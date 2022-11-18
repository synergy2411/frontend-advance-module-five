$(document).ready(function () {
    $("#spinner").hide()
    $("a").on("click", function () {
        // alert($(this).text())
        $("a").removeClass("active")
        $(this).addClass("active")
        $("#spinner").show()
        $("#result").empty()
        let isRemoteCall = $(this).attr("data-remote");
        if (isRemoteCall) {
            // $("#result").load(`${$(this).text()}.html`)
            $.ajax(`${$(this).text()}.html`).done(data => {
                $("#spinner").hide()
                $("#result").append(data)
            })
        }
    })
})