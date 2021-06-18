<?php

namespace App\Http\Livewire\Courses\Import;

use App\Services\CourseParsers\ImpactCourseParser;
use App\Services\CourseParsers\RakutenCourseParser;
use Livewire\Component;
use Livewire\WithFileUploads;

class Import extends Component
{
    use WithFileUploads;

    public $all_platforms = [
        [
            'label' => 'Rakuten (Edureka, Udemy)',
            'value' => 'rakuten'
        ],
        [
            'label' => 'Impact (LinkedIn)',
            'value' => 'impact'
        ]
    ];

    public $platform = 'impact';
    public $file;

    protected $rules = [
        'file' => 'required|file',
    ];

    public function submit()
    {
        $this->validate();
        $filePath = realpath($this->file->getRealPath());
        if ($this->platform === 'rakuten') {
            $parser = new RakutenCourseParser();
            $parser->parse($filePath);
        } else if ($this->platform === 'impact') {
            $parser = new ImpactCourseParser();
            $parser->parse($filePath);
        }
        return redirect()->to('/admin/courses/import');
    }

    public function render()
    {
        return view('livewire.courses.import.import');
    }
}
