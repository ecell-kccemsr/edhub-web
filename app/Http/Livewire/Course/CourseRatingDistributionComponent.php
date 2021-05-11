<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CourseRatingDistributionComponent extends Component
{
    public $data = [
        ["count"=>"shubhra","rating"=>"female"],
        ["count"=>"shubhra","rating"=>"female"],
     ]; 

    public function render()
    {
        return view('livewire.course.course-rating-distribution-component');
    }
}
