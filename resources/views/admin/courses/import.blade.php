@extends('voyager::master')

@section('page_title','Import Courses')

@section('page_header')
    <h1 class="page-title">
        <i class="icon voyager-upload"></i>Import Courses &nbsp;
    </h1>
@stop

@section('content')
    <div class="page-content edit-add container-fluid">
          <div class="row">
            <div class="col-md-12">
                <div class="panel panel-bordered">
                    <div class="panel-body">
                        @livewire('courses.import.import')
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@section('javascript')
    @livewireScripts
@endsection
