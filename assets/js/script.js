function myFunction() {
    var element = document.getElementById("specifi-hide");
    element.classList.toggle("opentab");

    var an = document.getElementById("down");
    an.classList.toggle("closetab");
    var hien = document.getElementById("up");
    hien.classList.toggle("opentab");
}


// add remove class
function funtionform() {
    var element = document.getElementById("form-input--hide");
    element.classList.add("form-input--open");
}

function funtionclose() {
    var element = document.getElementById("form-input--hide");
    element.classList.remove("form-input--open");
}

// function closeproductinfor() {
//     var elementinfor = document.getElementById("banner__content-product-infor-id");
//     elementinfor.classList.add("closetab");
// }
// add remove class

// Active class
// var header = document.getElementById("btn-active");
// var btns = header.getElementsByClassName("product-intro__btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("product-intro__btn--active");
//         current[0].className = current[0].className.replace(" product-intro__btn--active", "");
//         this.className += " product-intro__btn--active";
//     });
// }
// Active class

$(document).on('click', '.category-item', function() {
    $(this).addClass('category-item--active').siblings().removeClass('category-item--active')
})
$(document).on('click', '.home-fitter__btn', function() {
    $(this).addClass('btn__primary').siblings().removeClass('btn__primary')
})
$(document).on('click', '.pagination-item', function() {
    $(this).addClass('pagination-item--active').siblings().removeClass('pagination-item--active')
})
$(document).on('click', '.header__notify-item', function() {
    $(this).addClass('header__notify-item--viewed')
})
$(document).on('click', '.header__sort-item', function() {
    $(this).addClass('header__sort-item--active').siblings().removeClass('header__sort-item--active')
})

function search() {
    var element = document.getElementById("header__search-historys");
    element.classList.add("opentab");
}

// document.getElementById('input-header-search').onclick = function() {
//     window.location.href = "#header__search-historys";
// }
$('.banner__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1126,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

//
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML = days + " Ngày " + hours + " Giờ " +
//         minutes + " Phút " + seconds + "Giây ";

//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);

function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("29 April 2021 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span> Ngày</span>");
    $("#hours").html(hours + "<span> Giờ</span>");
    $("#minutes").html(minutes + "<span> Phút</span>");
    $("#seconds").html(seconds + "<span> Giây</span>");

}

setInterval(function() { makeTimer(); }, 1000);