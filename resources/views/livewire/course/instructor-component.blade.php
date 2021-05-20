@foreach ($data as $instructor)
<div class="row">
    <div class="col-sm-3">
        <div class="form-group col-12">
            <div>   
            <label for="exampleInputEmail1">Image</label>
            </div>
            <img src="{{$instructor['image']}}"/>
            <input type="file" class="form-control-file">
        </div>
    </div>
    <div class="col-sm-9">
        <div class="col-sm-8">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" wire:model="data.{{$loop->index}}.name">
        </div>
        <div class="col-sm-8">
            <label for="exampleInputEmail1">Designation</label>
            <input type="text" class="form-control" wire:model="data.{{$loop->index}}.designation">
        </div>
        <div class="col-sm-8">
            <label for="exampleInputEmail1">URL</label>
            <input type="text" class="form-control" wire:model="data.{{$loop->index}}.url">
        </div>
    </div>
</div>
@endforeach