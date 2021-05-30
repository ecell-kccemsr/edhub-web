<?php

namespace App\Http\Livewire\Course;

use App\Models\Course;
use Livewire\Component;
use Livewire\WithFileUploads;

class AddEditComponent extends Component
{
    use WithFileUploads;

    public $course;

    public $title;
    public $subtitle;
    public $locale;
    public $captions;
    public $image;
    public $url;
    public $difficulty_level;
    public $outcome;
    public $description;
    public $prerequisites;
    public $faq;
    public $rating_distribution;
    public $certification;
    public $rating;
    public $price;
    public $discount_price;
    public $course_provider_id;
    public $course_category_id;
    public $course_sub_category_id;
    public $course_topic_id;

    protected $rules = [
        'title' => 'required|min:6',
        'url' => 'required',
        'difficulty_level' => 'required',
        'certification' => 'required',
        'rating' => 'required',
        'price' => 'required',
        'course_provider_id' => 'required',
        'image' => 'image|max:1024',
    ];

    protected $listeners = ['outcomeUpdated','prerequitesUpdated','faqUpdated','ratingDistributionUpdated'];

    public function submit()
    {
        $this->validate();
        if($this->course === null) {
            $this->course = new Course();
        }
        $this->course->title = $this->title;
        $this->course->subtitle = $this->subtitle;
        $this->course->locale = $this->locale;
        $this->course->captions = $this->captions;
        $this->course->image = $this->image;
        $this->course->url = $this->url;
        $this->course->difficulty_level = $this->difficulty_level;
        $this->course->outcome = $this->outcome;
        $this->course->description = $this->description;
        $this->course->prerequisites = $this->prerequisites;
        $this->course->faq = $this->faq;
        $this->course->rating_distribution = $this->rating_distribution;
        $this->course->certification = $this->certification;
        $this->course->rating = $this->rating;
        $this->course->price = $this->price;
        $this->course->discount_price = $this->discount_price;
        $this->course->course_provider_id = $this->course_provider_id;
        $this->course->course_category_id = $this->course_category_id;
        $this->course->course_sub_category_id = $this->course_sub_category_id;
        $this->course->course_topic_id = $this->course_topic_id;
        $this->course->generateSlug();
        $this->course->save();
        redirect()->to('/admin/courses');
    }

    public function mount()
    {
        if($this->course !== null) {
            $this->title = $this->course->title;
            $this->subtitle = $this->course->subtitle;
            $this->locale = $this->course->locale;
            $this->captions = $this->course->captions;
            $this->image = $this->course->image;
            $this->url = $this->course->url;
            $this->difficulty_level = $this->course->difficulty_level;
            $this->outcome = $this->course->outcome;
            $this->description = $this->course->description;
            $this->prerequisites = $this->course->prerequisites;
            $this->faq = $this->course->faq;
            $this->rating_distribution = $this->course->rating_distribution;
            $this->certification = $this->course->certification;
            $this->rating = $this->course->rating;
            $this->price = $this->course->price;
            $this->discount_price = $this->course->discount_price;
            $this->course_provider_id = $this->course->course_provider_id;
            $this->course_category_id = $this->course->course_category_id;
            $this->course_sub_category_id = $this->course->course_sub_category_id;
            $this->course_topic_id = $this->course->course_topic_id;
        }

    }

    public function render()
    {
        return view('livewire.course.add-edit-component');
    }

    public function outcomeUpdated($outcome)
    {
        $this->outcome = $outcome;
    }
    public function prerequitesUpdated($prerequisites)
    {
        $this->prerequisites = $prerequisites;
    }
    public function faqUpdated($faq)
    {
        $this->faq = $faq;
    }
    public function ratingDistributionUpdated($rating_distribution)
    {
        $this->rating_distribution = $rating_distribution;
    }
}
