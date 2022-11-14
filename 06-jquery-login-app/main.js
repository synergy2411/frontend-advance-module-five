$(document).ready(function () {

    // Login
    $(".btn-login").click(function (event) {
        event.preventDefault();
        let usernameVal = $("#username").val()
        let passwordVal = $("#password").val()

        $.get("http://localhost:3000/users", function (data, status) {
            if (status === 'success') {
                const foundUser = data.find(user => user.username === usernameVal && user.password === passwordVal)
                if (foundUser) {
                    $(".result").text("Logged In!!")
                } else {
                    $(".result").text("Bad Credentials")
                }
            } else {
                console.log("NOT FOUND");
            }
        })
    })

    // Sign up
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