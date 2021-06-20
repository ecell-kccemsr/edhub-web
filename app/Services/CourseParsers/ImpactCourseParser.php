<?php

namespace App\Services\CourseParsers;

use App\Models\Course;
use App\Models\CourseInstructor;
use App\Models\CourseTopic;

class ImpactCourseParser
{
    public function parse($file)
    {
        $fn = fopen($file,"r");
        $first_line = fgets($fn);
        $keys = explode("\t",$first_line);
        $array = [];
        $i=0;
        while(! feof($fn))  {
            $line = fgets($fn);
            $data = explode("\t",$line);
            $data_arr = [];
            foreach($data as $key=>$value)
            {
                $data_arr[rtrim($keys[$key])] = strlen(trim($value)) == 0?Null:$value;
            }
            $array[$i] = $data_arr;
            $i++;
        }
        array_pop($array);
        foreach($array as $a)
        {
            if (Course::where('cid', $a['id'])->first() !== null) {
                continue;
            }
            $course = new Course();
            if($a['id']!=null)
            {
                $course->cid = $a['id'];
            }
            if($a['title']!=null)
            {
                $course->title = $a['title'];
            }
            if($a['language']!=null)
            {
                $course->locale = $a['language'];
            }
            if($a['link']!=null)
            {
                $course->url = $a['link'];
            }
            if($a['description']!=null)
            {
                $course->description = $a['description'];
            }
            if($a['courseLevel']!=null)
            {
                $course->difficulty_level = $a['courseLevel'];
            }
            if($a['imageLink']!=null)
            {
                $course->image = $a['imageLink'];
            }
            if($a['price']!=null)
            {
                $course->price = floatval($a['price']);
            }
            $course->course_provider_id = 5;
            $course->generateSlug();
            $course->save();
        }
        fclose($fn);
    }
}
