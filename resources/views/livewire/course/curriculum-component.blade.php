<div >
    @foreach ($data as $value)
        <div  x-data="{open: false}">
            <div class="row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" wire:model.lazy="data.{{$loop->index}}.title">
                </div>
                <div class="col-sm-2">
                    <button @click="open = true" class="btn btn-info" type="button">
                        <template x-if="open==false"><div>Open</div></template>
                        <template x-if="open==true"><div>Close</div></template>
                    </button>
                </div>
            </div>
            <div class="row" x-show="open" @click.away="open = false">
                <div class="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model.lazy="data.{{$loop->index}}.description"></textarea>
                </div>
                @foreach ($data[$loop->index]['curriculum_lectures'] as $lecture)
                    <div class="col-sm-10">
                        <input type="text" class="form-control" wire:model.lazy="data.{{$loop->parent->index}}.curriculum_lectures.{{$loop->index}}.title">
                    </div>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model.lazy="data.{{$loop->parent->index}}.curriculum_lectures.{{$loop->index}}.description"></textarea>
                    </div>
                @endforeach           
            </div>
        </div>
    @endforeach
</div>