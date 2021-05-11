<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CourseFaqComponent extends Component
{
    public $data = [
       ["question"=>"shubhra","answer"=>"female"],
       ["question"=>"shubhra","answer"=>"female"],
    ]; 
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
        array_push($this->data, ["question"=>$this->input,"answer"=>""]);
        $this->input="";
    }

    public function render()
    {
        return view('livewire.course.course-faq-component');
    }
}
