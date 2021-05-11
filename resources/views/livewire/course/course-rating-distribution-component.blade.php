<div class="row">
    @foreach ($data as $value)
        <div class="col-sm-8">
            <label>{{$data[$loop->index]['rating']}}</label>
            <input type="text" class="form-control" is-invalid wire:model="data.{{$loop->index}}.count">
        </div>
    @endforeach
</div>