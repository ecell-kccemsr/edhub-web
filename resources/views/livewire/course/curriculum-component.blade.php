<div >
    @foreach ($data as $chapter)
        <div  x-data="{open: false}" style="border: 2px solid #eee;margin-top:5px; margin-bottom: 5px;padding: 10px">
            <p>Chapter #{{$loop->index+1}}</p>
            <div class="row">
                <div class="col-sm-10">
                    <input type="text" class="form-control" wire:model.lazy="data.{{$loop->index}}.title">
                </div>
                <div class="col-sm-2">
                    <button @click="open = true" class="btn btn-info" type="button">
                        <template x-if="open==false"><div>Open</div></template>
                        <template x-if="open==true"><div>Close</div></template>
                    </button>
                    <button type="button" class="btn btn-danger" wire:click="delete({{$chapter['id']}})">Delete</button>
                </div>
            </div>
            <div class="row" x-show="open" @click.away="open = false">
                <div class="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model.lazy="data.{{$loop->index}}.description"></textarea>
                </div>
                <div class="col-sm-10">
                    @foreach ($data[$loop->index]['curriculum_lectures'] as $lecture)
                        <div style="border: 2px solid #eee;margin-top:5px; margin-bottom: 5px;padding: 15px;">
                            <p>Lecture #{{$loop->index+1}}</p>
                            <div class="row">
                                <div class="col-sm-10" style="margin-bottom: 0px">
                                    <input type="text" class="form-control" wire:model.lazy="data.{{$loop->parent->index}}.curriculum_lectures.{{$loop->index}}.title">
                                </div>
                                <div class="col-sm-2" style="margin-bottom: 0px">
                                    <button type="button" class="btn btn-danger" wire:click="deleteLecture({{$lecture['id']}})">Delete</button>
                                </div>
                                <div class="col-sm-10" style="margin-bottom: 0px">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model.lazy="data.{{$loop->parent->index}}.curriculum_lectures.{{$loop->index}}.description"></textarea>
                                </div>
                            </div>
                        </div>
                    @endforeach    
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="To add Lecture enter title and press enter" wire:model="inputLecture" wire:keydown.enter.prevent="addLecture({{$chapter['id']}})">
                    </div> 
                </div>
            </div>
        </div>
    @endforeach
   <div class="row">
        <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="To add Chapter enter title and press enter" wire:model="inputChapter" wire:keydown.enter.prevent="addChapter">
        </div> 
   </div>
</div>