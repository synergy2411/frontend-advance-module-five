$(document).ready(function () {
    let url = "myfile.html";
    // console.log($.ajax(url));

    $.ajax(url).done(function (data) {
        // alert(data)
        $("body").append(data)
    })
})