<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;
use App\Models\CurriculumChapter;
use App\Models\CurriculumLecture;

class CurriculumComponent extends Component
{
    public $course;
    public $data;
    public $inputLecture;
    public $inputChapter;

    public function mount()
    {
        $this->data = $this->course->course_chapters()->with('curriculum_lectures')->get()->toArray();
    }

    public function addLecture($curriculum_chapter_id)
    {
        $lecture = new CurriculumLecture();
        $lecture->title = $this->inputLecture;
        $lecture->description = '';
        $lecture->curriculum_chapter_id = $curriculum_chapter_id;
        $lecture->save();
        $this->mount();
        $this->inputLecture = '';
    }

    public function addChapter()
    {
        $chapter = new CurriculumChapter;
        $chapter->title = $this->inputChapter;
        $chapter->description = '';
        $chapter->course_id = $this->course->id;
        $chapter->save();
        $this->mount();
        $this->inputChapter = "";
    }

    public function deleteChapter($id)
    {
        $curriculum = CurriculumChapter::find($id);
        $curriculum->delete();
        $this->data = $this->course->course_chapters()->with('curriculum_lectures')->get()->toArray();
    }

    public function deleteLecture($id)
    {
        $curriculum = CurriculumLecture::find($id);
        $curriculum->delete();
        $this->data = $this->course->course_chapters()->with('curriculum_lectures')->get()->toArray();
    }

    public function render()
    {
        return view('livewire.course.curriculum-component');
    }

    public function updatedData()
    {
        foreach($this->data as $data) {
            $curriculum = CurriculumChapter::find($data['id']);
            $curriculum->title = $data['title'];
            $curriculum->description = $data['description'];
            $curriculum->save();
            foreach($data['curriculum_lectures'] as $data) {
                $lecture = CurriculumLecture::find($data['id']);
                $lecture->title = $data['title'];
                $lecture->description = $data['description'];
                $lecture->save();
            }
        }
    }
}