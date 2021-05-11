<form wire:submit.prevent="submit">
    <div class="panel-body">
        <div class="form-group col-12 @error('title') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" placeholder="Enter title" wire:model="title">
            @error('title')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('subtitle') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Subtitle</label>
            <input type="text" class="form-control" placeholder="Enter subtitle" wire:model="subtitle">
            @error('subtitle')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('locale') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Locale</label>
            <input type="text" class="form-control" placeholder="Enter locale" wire:model="locale">
            @error('locale')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('captions') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Caption</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" wire:model="captions"></textarea>
            @error('captions')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('image') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Image</label>
            <input type="file" class="form-control-file " id="exampleFormControlFile1" wire:model="image">
            @error('image')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('url') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">URL</label>
            <input type="text" class="form-control "  placeholder="Enter url" wire:model="url">
            @error('url')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('difficulty_level') has-error has-feedback @enderror">
            <label for="validationTextarea">Difficulty Level</label>
            <select class="form-control select2" wire:model="difficulty_level">
                <option value="All Levels">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
            </select>
            @error('difficulty_level')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('outcome') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Outcome</label>
            @livewire('course.course-outcome-component')
            @error('outcome')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('description') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Description</label>
            <textarea class="form-control " id="exampleFormControlTextarea1" rows="3" wire:model="description"></textarea>
            @error('description')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('prerequisites') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Prerequisites</label>
            @livewire('course.course-prerequites-component')
            @error('prerequisites')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('faq') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">FAQ</label>
            @livewire('course.course-faq-component')
            @error('faq')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('rating_distribution') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Rating Distribution</label>
            @livewire('course.course-rating-distribution-component')
            @error('rating_distribution')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="form-group col-12 @error('certification') has-error has-feedback @enderror">
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
            @error('certification')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('rating') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Rating</label>
            <input type="number" class="form-control"  placeholder="Enter rating" min="1" max="5"  wire:model="rating">
            @error('rating')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('discount_price') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Discount Price</label>
            <input type="number" class="form-control"  placeholder="Enter discount price" wire:model="discount_price">
            @error('discount_price')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('price') has-error has-feedback @enderror">
            <label for="exampleInputEmail1">Price</label>
            <input type="number" class="form-control"  placeholder="Enter price"  wire:model="price">
            @error('price')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('course_provider_id') has-error has-feedback @enderror">
            <label for="validationTextarea">Course Provider</label>
            <select class="form-control select2" wire:model="course_provider_id">
                @foreach(App\Models\CourseProvider::all() as $provider)
                <option value="{{$provider->id}}">{{$provider->name}}</option>
                @endforeach
            </select>
            @error('course_provider_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('course_category_id') has-error has-feedback @enderror">
            <label for="validationTextarea">Course Category</label>
            <select class="form-control select2 " wire:model="course_category_id">
                @foreach(App\Models\CourseCategory::all() as $category)
                <option value="{{$category->id}}">{{$category->name}}</option>
                @endforeach
            </select>
            @error('course_category_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('course_sub_category_id') has-error has-feedback @enderror">
            <label for="validationTextarea">Course Sub Category</label>
            <select class="form-control select2" wire:model="course_sub_category_id">
                @foreach(App\Models\CourseSubCategory::all() as $subcategory)
                <option value="{{$subcategory->id}}">{{$subcategory->name}}</option>
                @endforeach
            </select>
            @error('course_sub_category_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        
        <div class="form-group col-12 @error('course_topic_id') has-error has-feedback @enderror">
            <label for="validationTextarea">Course Topic</label>
            <select class="form-control select2" wire:model="course_topic_id">
                @foreach(App\Models\CourseTopic::all() as $topic)
                <option value="{{$topic->id}}">{{$topic->name}}</option>
                @endforeach
            </select>
            @error('course_topic_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    
    
</form>