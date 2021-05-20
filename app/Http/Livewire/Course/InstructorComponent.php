<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\CourseInstructor;

class InstructorComponent extends Component
{
    public $course;
    public $data;

    public function mount()
    {
        $this->data = $this->course->course_instructors()->get()->toArray();
    }

    public function render()
    {
        return view('livewire.course.instructor-component');
    }

    public function updatedData()
    {
        foreach($this->data as $data) {
            $instructor = CourseInstructor::find($data['id']);
            $instructor->name = $data['name'];
            $instructor->designation = $data['designation'];
            $instructor->url = $data['url'];
            $instructor->image = $data['image'];
            $instructor->save();
        }
    }
}
