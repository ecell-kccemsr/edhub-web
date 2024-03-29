<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CourseRatingDistributionComponent extends Component
{
    public $data; 

    public function updatedData()
    {
        $this->emit('ratingDistributionUpdated', $this->data);
    }

    public function render()
    {
        if(is_array($this->data) === false)
        {
            $this->data = [];
        }
        return view('livewire.course.course-rating-distribution-component');
    }
}
