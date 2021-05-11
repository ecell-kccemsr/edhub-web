<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CourseRatingDistributionComponent extends Component
{
    public $data; 

    public function render()
    {
        return view('livewire.course.course-rating-distribution-component');
    }
}
