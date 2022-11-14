$(document).ready(function () {
    $(".btn-sign-up").click(function () {
        let usernameVal = $("#username").val();
        let passwordVal = $("#password").val();
        $.post("http://localhost:3000/users", {
            username: usernameVal,
            password: passwordVal
        }, function (data, status, xhr) {
            if (status === 'success') {
                $(".result").html("User registered succsessfully")
            } else {
                $(".result").html("Some proble while registering")
            }
        })
    })
})