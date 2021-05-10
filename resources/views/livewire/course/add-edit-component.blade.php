<form wire:submit.prevent="submit">
    <div class="panel-body">
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control"  placeholder="Enter title" wire:model="title">
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Subtitle</label>
            <input type="text" class="form-control"  placeholder="Enter subtitle" wire:model="subtitle">
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Locale</label>
            <input type="text" class="form-control"  placeholder="Enter locale" wire:model="locale">
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Caption</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model="captions"></textarea>
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Image</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" wire:model="image">
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">URL</label>
            <input type="text" class="form-control"  placeholder="Enter url" wire:model="url">
        </div>
        <div class="form-group col-12">
            <label for="validationTextarea">Difficulty Level</label>
            <select class="form-control select2" required wire:model="difficulty_level">
                <option value="All Levels">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
            </select>
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Outcome</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model="outcome"></textarea>
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model="description"></textarea>
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Prerequisites</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model="prerequisites"></textarea>
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">FAQ</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model="faq"></textarea>
        </div>
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Certification</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked wire:model="certification">
                <label class="form-check-label" for="exampleRadios1">
                    Yes
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="0" wire:model="certification">
                <label class="form-check-label" for="exampleRadios2">
                    No
                </label>
            </div>
        </div>

        <div class="form-group col-12">
            <label for="exampleInputEmail1">Rating</label>
            <input type="number" class="form-control"  placeholder="Enter rating" min="1" max="5" wire:model="rating">
        </div>
        
        <div class="form-group col-12">
            <label for="exampleInputEmail1">Discount Price</label>
            <input type="number" class="form-control"  placeholder="Enter discount price" wire:model="discount_price">
        </div>

        <div class="form-group col-12">
            <label for="exampleInputEmail1">Price</label>
            <input type="number" class="form-control"  placeholder="Enter price" wire:model="price">
        </div>

        <div class="form-group col-12">
            <label for="validationTextarea">Course Provider</label>
            <select class="form-control select2" required wire:model="course_provider_id">
                @foreach(App\Models\CourseProvider::all() as $provider)
                <option value="{{$provider->id}}">{{$provider->name}}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group col-12">
            <label for="validationTextarea">Course Category</label>
            <select class="form-control select2" required wire:model="course_category_id">
                @foreach(App\Models\CourseCategory::all() as $category)
                <option value="{{$category->id}}">{{$category->name}}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group col-12">
            <label for="validationTextarea">Course Sub Category</label>
            <select class="form-control select2" required wire:model="course_sub_category_id">
                @foreach(App\Models\CourseSubCategory::all() as $subcategory)
                <option value="{{$subcategory->id}}">{{$subcategory->name}}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group col-12">
            <label for="validationTextarea">Course Topic</label>
            <select class="form-control select2" required wire:model="course_topic_id">
                @foreach(App\Models\CourseTopic::all() as $topic)
                <option value="{{$topic->id}}">{{$topic->name}}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    

</form>