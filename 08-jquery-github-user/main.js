$(document).ready(function () {

    let users = [];

    $("#btnFetch").on("click", function () {
        let username = $("#txt-username").val();
        $.get(`https://api.github.com/users/${username}`,
            function (data, status) {
                let imgEl = document.createElement("img")
                $("#img-container").html(imgEl)
                $("img").attr("src", data.avatar_url)
                $("img").css("width", "200px")
                $("img").css("height", "200px")
            })
    })


    const displayUsers = (users) => {
        $("#all-users").empty()
        users.forEach(user => {
            let divEl = document.createElement("div")
            $(divEl).addClass("col-4")
            $(divEl).html(`
                    <div class='card' style='width: 18rem;'>
                        <img src=${user.avatar_url} class="card-img-top">
                        <div class='card-body'>
                            <p class='text-center'> 
                                ${user.login.toUpperCase()}
                            </p>
                        </div>
                    </div>
            `)
            $("#all-users").append(divEl)
        })
    }

    const getAllUsers = () => {
        $.get("https://api.github.com/users",
            function (data, status) {
                console.log(data);
                displayUsers(data)
                users = data;
            })
    }

    getAllUsers()



    // Filtering 

    const filterUsers = (username) => {
        let filteredUsers = users.filter(user => user.login.includes(username))
        displayUsers(filteredUsers);
    }

    $("#txt-filter").on("keyup", function () {
        let username = $(this).val();
        console.log(username)
        filterUsers(username)
    })
















})