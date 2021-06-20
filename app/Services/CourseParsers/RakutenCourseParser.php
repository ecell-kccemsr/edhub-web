<?php

namespace App\Services\CourseParsers;

class RakutenCourseParser extends CourseParser
{
    public static function parse($file)
    {
        // $fileContents= file_get_contents($file);
        // $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
        // $fileContents = trim(str_replace('"', "'", $fileContents));
        $simpleXml = simplexml_load_string($file);
        $json = json_encode($simpleXml);
        dd($json);
        // $result =  json_decode($json,true);
        // print_r($result);
        // foreach ($result as $item) {
        //     print_r($item['product_id']);
        //     break;
        // }

        // foreach($json as $j)
        // {
        //     print_r($j['merchantId']);
        //     // break;

        // }

        
    }
}
