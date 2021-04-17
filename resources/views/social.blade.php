<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    <script>
        localStorage.setItem("accessToken", {{$accessToken}})
        setTimeout(() => {
            window.close();
        }, 100);
    </script>
</body>
</html> 