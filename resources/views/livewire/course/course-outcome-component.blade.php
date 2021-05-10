<div class="row">
    @foreach ($data as $value)
        <div class="col-8">
            <label>Data</label>
            <input type="text" class="form-control" is-invalid >
        </div>
        <div class="col-4">
            <button type="submit" class="btn btn-danger">Submit</button>
        </div>
    @endforeach
</div>