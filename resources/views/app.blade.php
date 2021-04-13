<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name')}}</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    crossorigin="anonymous"
  />
   
</head>
<body>
    <div id="root"></div>
  <script src="{{mix('js/app.js')}}"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
crossorigin="anonymous"
></script>
<script type="text/javascript">


document.addEventListener("DOMContentLoaded", function() {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll(".dropdown-menu").forEach(function(element) {
        element.addEventListener("click", function(e) {
            e.stopPropagation();
        });
    });

    if (window.innerWidth < 992) {
        document
            .querySelectorAll(".navbar .dropdown")
            .forEach(function(everydropdown) {
                everydropdown.addEventListener(
                    "hidden.bs.dropdown",
                    function() {
                        // after dropdown is hidden, then find all submenus
                        this.querySelectorAll(".megasubmenu").forEach(function(
                            everysubmenu
                        ) {
                            everysubmenu.style.display = "none";
                        });
                    }
                );
            });

        document
            .querySelectorAll(".has-megasubmenu a")
            .forEach(function(element) {
                element.addEventListener("click", function(e) {
                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList.contains("megasubmenu")) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();

                        if (nextEl.style.display == "block") {
                            nextEl.style.display = "none";
                        } else {
                            nextEl.style.display = "block";
                        }
                    }
                });
            });
        document
            .querySelectorAll(".has-megasubmenu-2 a")
            .forEach(function(element) {
                element.addEventListener("click", function(e) {
                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList.contains("megasubmenu-2")) {
                        e.preventDefault();

                        if (nextEl.style.display == "block") {
                            nextEl.style.display = "none";
                        } else {
                            nextEl.style.display = "block";
                        }
                    }
                });
            });
    }
});

</script>
</body>
</html>
