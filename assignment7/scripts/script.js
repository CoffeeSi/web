$(document).ready(function () {
    console.log("jQuery is ready!");
});

$("h1").text("jQuery 3.7");
$("#text").html("jQuery is a fast, small, and feature-rich JavaScript library.");
$(".btn").css("background-color", "coral");

$("#btn-hide").click(function () {
    $("#info-text").hide();
});
$("#btn-show").click(function () {
    $("#info-text").show();
});
$("#btn-toggle").click(function () {
    $("#info-text").toggle();
});

$("#btn-fadein").click(function () {
    $(".img-cat").fadeIn();
});
$("#btn-fadeout").click(function () {
    $(".img-cat").fadeOut();
});
$("#btn-fadetoggle").click(function () {
    $(".img-cat").fadeToggle();
});


$("#btn-slideup").click(function () {
    $("#panel").slideUp();
});
$("#btn-slidedown").click(function () {
    $("#panel").slideDown();
});
$("#btn-slidetoggle").click(function () {
    $("#panel").slideToggle();
});

let i = 1;
$("#btn-add").click(function () {
    $(".elements").append("<li>Item " + i + "</li>");
    i++;
});
$("#btn-prepend").click(function () {
    $(".elements").prepend("<li>Item " + i + "</li>");
    i++;
});
$("#btn-remove").click(function () {
    $(".elements li:last-child").remove();
});

let j = 0;
$("#btn-changeImg").click(function () {
    if (j % 2 == 0) {
        $("#img-change").attr("src", "assets/cat2.png");
        j++;
    }
    else if (j % 2 == 1) {
        $("#img-change").attr("src", "assets/cat.jpeg");
        j++;
    }
});

$("#btn-changeLink").click(function () {
    let newUrl = prompt("Enter a new URL for the link:", "https://www.wikipedia.org");
    if (newUrl) {
        $("#link").attr("href", newUrl).text("Visit " + newUrl);
    }
});

$("#input-name").change(function () {
    $("#output-name").text("Name: " + $("#input-name").val());
})

$("#input-email").change(function () {
    $("#output-email").text("Email: " + $("#input-email").val());
})

$("#square").click(function () {
    $(this).animate({ width: "200px", height: "200px", left: "150px", top: "50px" });
})

$("#square2").click(function () {
    $(this).animate({ left: "200px" })
        .animate({ top: "50px" })
        .animate({ width: "100px", height: "100px" })
        .animate({ width: "200px", height: "200px", left: "0px", top: "0px" });
})

$("#square3").click(function () {
    $(this).animate({ opacity: ".2", width: "100px", height: "100px", left: "1000px" }, 2000)
        .animate({ opacity: "1", width: "150px", height: "150px", left: "0px" }, 500);
})

$('.acc-header').on('click', function () {
    var target = $($(this).data('target'));
    if (target.is(':visible')) {
        target.slideUp(200);
        $(this).find('.chev').text('▸');
    } else {
        $('.acc-content:visible').slideUp(200);
        $('.acc-header .chev').text('▸');
        target.slideDown(200);
        $(this).find('.chev').text('▾');
    }
});