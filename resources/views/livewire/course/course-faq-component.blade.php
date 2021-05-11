<div class="row">
    @foreach ($data as $value)
        <div class="col-sm-8">
            <input type="text" class="form-control" is-invalid wire:model="data.{{$loop->index}}.question">
            <textarea class="form-control " id="exampleFormControlTextarea1" rows="3" wire:model="data.{{$loop->index}}.answer"></textarea>
        </div>
        <div class="col-sm-4">
            <button type="button" class="btn btn-danger" wire:click="delete({{$loop->index}})">x</button>
        </div>
    @endforeach
    <div class="col-sm-8">
        <input type="text" class="form-control" placeholder="Enter new question and press enter" wire:model="input" wire:keydown.enter.prevent="add">
    </div>
</div>