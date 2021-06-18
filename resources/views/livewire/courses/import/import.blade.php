<div class="row">
    <div class="form-group col-md-12">
        <label for="validationTextarea">Course Advertisement Platform</label>
        <select class="form-control select2 " wire:model="platform">
            @foreach ($all_platforms as $platform)
            <option value="{{$platform['value']}}">{{$platform['label']}}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group  col-md-12" >
        <label class="control-label" for="name">Document/File</label>
        <input  required  type="file" wire:model="file">
    </div>
    <div class="col-md-12">
        <button class="btn btn-primary" wire:click="submit">Import</button>
    </div>
</div>
