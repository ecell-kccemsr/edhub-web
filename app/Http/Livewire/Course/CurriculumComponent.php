<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;
use App\Models\CurriculumChapter;
use App\Models\CurriculumLecture;

class CurriculumComponent extends Component
{
    public $course;
    public $data;

    public function mount()
    {
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
