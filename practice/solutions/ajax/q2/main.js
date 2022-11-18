$(document).ready(function () {
    // let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?";
    let url = "https://api.github.com/users";
    $.ajax(url).done(function (data) {
        data.forEach(user => {
            $("ul").append(`
                <li class='list-group-item my-2'>
                    <div class="d-flex align-items-center">
                        <img src=${user.avatar_url} style="width:100px;" class="rounded-circle">
                        <div class="mx-2 p-2">
                        <p>${user.login.toUpperCase()}</p>
                        <p> <a href=${user.url} > Follow me </a></p>
                        <div>
                    </div>
                </li>
            `)
        })
    })
})