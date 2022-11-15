$(document).ready(function () {


    // jQuery POST -> to create the data
    $("#btnGetData").click(function () {
        $.post("https://jsonplaceholder.typicode.com/posts",
            { title: "NEW TITLE", body: "..." },
            function (data, status, xhr) {
                console.log("STATUS : ", status)
            })
    })

    // jQuery GET -> to retrive the data
    // $("#btnGetData").click(function () {
    //     $.get("https://jsonplaceholder.typicode.com/posts", function (data, status, xhr) {
    //         data.forEach(post => {
    //             $(".list-container").append(`<li>${post.title}</li>`)
    //         })
    //     })
    // })















    // jQuery LOAD
    // $("#btnGetData").click(function () {
    //     let divEl = $("#content");
    //     divEl.load("response.html .content", function (data, status, xhr) {
    //         if (status === 'success') {
    //             $("#btnGetData").css("background", "teal")
    //             $("#btnGetData").css("color", "#fff")
    //         }
    //         // alert("COMPLETED")
    //     });
    // })

























    // DOM Hierarchy
    // body
    // - div.container
    // -- h1
    // -- ul.list-container
    // --- li#tea
    // --- li#coffee
    // --- li#latte
    // -- button


    // FILTERING METHODS, first, last, eq, has, not, slice, filter

    // console.log($(".list-container").find("li").not("#tea"))

    // console.log($(".container").find("ul").not(".list-courses"))
    // console.log($(".container").find("ul").has("#react"))

    // console.log($("ul").find("li").filter("#latte"));
    // console.log($("ul").find("li").slice(1))
    // console.log($("ul").find("li").eq(1))
    // console.log($("ul").find("li").last())
    // console.log($("ul").find("li").first())





















    // Traversing SIDEWAYS -> siblings, next, nextAll, nextUntil, prev, prevAll, prevUntil

    // console.log($("button").prevUntil("h1"));       /// ?

    // console.log($("#tea").nextUntil("#latte"));
    // console.log($("#latte").prevAll());

    // console.log($("#tea").nextAll());

    // console.log($("#tea").next().prev().next());


    // let prev = $(".list-container").prev();
    // console.log("prev Siblings :", prev);

    // let next = $(".list-container").next();
    // console.log("Next Siblings :", next);
    // let h1Siblings = $(".list-container").siblings();
    // console.log("H1 Siblings :", h1Siblings);

    // let liSiblings = $("#tea").siblings();
    // console.log("Tea Siblings : ", liSiblings);















    // Traversing DOWN - find, children
    // const liElements = $(".container").find(".list-container").children()
    // console.log(liElements.toArray());

    // console.log("DIV : FIND > ", $(".container").find("#tea"));
    // console.log("DIV : FIND > ", $(".container").find(".list-container"));


    // console.log("CHILDREN : DIV -> ", $(".container").children())
    // console.log("CHILDREN : UL -> ", $(".list-container").children())







    // Traversing UP -> parent, parents, parentsUntil
    // console.log("Tea Parent Until :", $("#tea").parentsUntil("body"));

    // console.log("#coffee Anchestors : ", $("#coffee").parents());

    // console.log("Tea Parent : ", $("#tea").parent())
    // console.log("h1 Parent : ", $("h1").parent())






















    // JQUERY DIMENSIONS

    // width: 400px;
    // padding: 20px;       
    // border: 2px red solid;
    // margin: 10px;


    // console.log("Width : ", $(".container").width());
    // console.log("Inner Width : ", $(".container").innerWidth());
    // console.log("Outer Width : ", $(".container").outerWidth());
    // console.log("Outer Width (TRUE) : ", $(".container").outerWidth(true));
























    // CSS CLASSES
    // addClass, removeClass, toggleClass, CSS

    // $("h1").addClass("my-border")

    // $(".list-container").removeClass("feature")

    // $("#toggle").click(function () {
    //     $("h1").toggleClass("my-border");
    //     $(".list-container").toggleClass("feature");
    // })

    // $("#tea").css("text-decoration", "underline")
















    // REMOVE METHODS
    // empty, remove, unwrap, removeAttr

    // $("ul").removeAttr("class")
    // $("#tea").unwrap()
    // $(".list-container").remove()
    // $(".list-container").empty()

















    // INSERT METHODS
    // append, prepend, after, before, wrap

    // $(".list-container").append("<li>Milk</li>")
    // $(".list-container").prepend("<li>Milk</li>")

    // $("#coffee").after("<li>Cappacino</li>")
    // $("#coffee").before("<li>Cappacino</li>")

    // $("h1").wrap("<div class='header'></div>")


})