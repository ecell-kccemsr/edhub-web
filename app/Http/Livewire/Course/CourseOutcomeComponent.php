<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CourseOutcomeComponent extends Component
{
    public $data; 

    public function render()
    {
        return view('livewire.course.course-outcome-component');
    }
}
