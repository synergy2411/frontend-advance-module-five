$(document).ready(function () {



    // GETTERS & SETTERS >> html(), val(), text(), attr()

    console.log($("#username").attr("type"))


    $("[type='submit']").click(function (e) {
        e.preventDefault()
        $(this).attr("value", "Logged In")
    })











    // EFFECTS 

    // $(".btn-animate").click(function () {
    //     $(".div-animate").animate({
    //         height: "200px",
    //         width: "200px"
    //     }, 2000, "linear"
    //     )
    // })

    // $(".btn-animate-stop").click(function () {
    //     $(".div-animate").stop();
    // })


    // FORM EVENTS

    // $("form").submit(function (event) {
    //     event.preventDefault()
    //     console.log($("#username").val());
    // })

    // $("#username").focus(function () {
    //     console.log("FOCUSED");
    // })
    // $("#username").blur(function () {
    //     let value = $(this).val()
    //     if (value === '') {
    //         alert("Put some value in input field")
    //     }
    // })


















    // $(".btn").click(function () {
    //     console.log($(".txtTodoInput").val())
    // })









    // KEYBOARD EVENTS
    // $(".txtTodoInput").keydown(function () {
    //     console.log(this.value)
    // })
    // $(".txtTodoInput").keyup(function () {
    //     console.log(this)
    // })




















    // $("h1").text("Changed");

    // MOUSE EVENTS
    // $(".btn").click(function () {
    //     alert("Who'is this?")
    // })

    // $(".btn").mouseenter(function () {
    //     $(".btn").css("background", "teal")
    // })
    // $(".btn").mouseleave(function () {
    //     $(".btn").css("background", "transparent")
    // })

    // $(".btn").hover(function () {
    //     $(".btn").css("background", "teal")
    // })


});