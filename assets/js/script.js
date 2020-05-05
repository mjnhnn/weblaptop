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
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1126,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

//