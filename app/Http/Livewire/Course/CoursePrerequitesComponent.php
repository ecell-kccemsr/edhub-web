<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CoursePrerequitesComponent extends Component
{
    public $data; 
    public $input;
    
    public function delete($index)
    {
      $newData = [];
      for($i=0; $i<count($this->data);$i++) {
          if($i !== $index) {
              $newData[] = $this->data[$i];
          }
      }
      $this->data = $newData;
    }

    public function add()
    {
        array_push($this->data,$this->input);
        $this->input="";
    }

    public function render()
    {
        return view('livewire.course.course-prerequites-component');
    }
}
