<?php

namespace App\Http\Livewire\Course;

use Livewire\Component;

class CourseFaqComponent extends Component
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
      $this->emit('faqUpdated', $newData);
    }

    public function add()
    {
        array_push($this->data, ["question"=>$this->input,"answer"=>""]);
        $this->input="";
        $this->emit('faqUpdated', $this->data);
    }

    public function render()
    {
        if(is_array($this->data) === false)
        {
            $this->data = [];
        }
        return view('livewire.course.course-faq-component');
    }
    public function updatedData()
    {
        $this->emit('faqUpdated', $this->data);
    }
}
