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
      $this->emit('prerequitesUpdated', $newData);    
    }

    public function add()
    {
        array_push($this->data,$this->input);
        $this->input="";
        $this->emit('prerequitesUpdated', $this->data);    
    }
    
    public function render()
    {
        if(is_array($this->data) === false)
        {
            $this->data = [];
        }
        return view('livewire.course.course-prerequites-component');
    }
    public function updatedData()
    {
        $this->emit('prerequitesUpdated', $this->data);
    }
}
