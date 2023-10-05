//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({
                'left': left,
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'left': left
            });
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});
//
//$(".submit").click(function () {
//    return false;
//})


var preApproval = document.querySelector('.pre-approval');
var popUp = document.getElementById('popup');

function openPopup() {
    popUp.style.display = 'block';
}

function closePopup() {
    popUp.style.display = 'none';
}


//
//var carImg = document.querySelector('.cars li:first-child');
//var carParagraph = document.querySelector('.p-car');
//
//
//var truckImg = document.querySelector('.cars li:nth-child(2)');
//var truckParagraph = document.querySelector('.p-truck');
//
//var suvImg = document.querySelector('.cars li:nth-child(3)');
//var suvParagraph = document.querySelector('.p-suv');
//
//var vanImg = document.querySelector('.cars li:last-child');
//var vanParagraph = document.querySelector('.p-van');
//
//carImg.addEventListener('click', function () {
//    if (carParagraph.style.color == 'rgb(247, 247, 247)' && carParagraph.style.opacity == 1) {
//        carParagraph.style.color = '';
//        carParagraph.style.opacity = 0;
//    } else {
//        carParagraph.style.color = 'rgb(247, 247, 247)';
//        carParagraph.style.opacity = 1;
//    }
//    if (carParagraph.style.color == 'rgb(247, 247, 247)' && carParagraph.style.opacity == 1) {
//        truckParagraph.style.color = '';
//        truckParagraph.style.opacity = 0;
//        suvParagraph.style.color = '';
//        suvParagraph.style.opacity = 0;
//        vanParagraph.style.color = '';
//        vanParagraph.style.opacity = 0;
//    }
//});
//
//truckImg.addEventListener('click', function () {
//    if (truckParagraph.style.color == 'rgb(247, 247, 247)' && truckParagraph.style.opacity == 1) {
//        truckParagraph.style.color = '';
//        truckParagraph.style.opacity = 0;
//    } else {
//        truckParagraph.style.color = 'rgb(247, 247, 247)';
//        truckParagraph.style.opacity = 1;
//    }
//    if (truckParagraph.style.color == 'rgb(247, 247, 247)' && truckParagraph.style.opacity == 1) {
//        carParagraph.style.color = '';
//        carParagraph.style.opacity = 0;
//        suvParagraph.style.color = '';
//        suvParagraph.style.opacity = 0;
//        vanParagraph.style.color = '';
//        vanParagraph.style.opacity = 0;
//    }
//});
//
//
//suvImg.addEventListener('click', function () {
//    if (suvParagraph.style.color == 'rgb(247, 247, 247)' && suvParagraph.style.opacity == 1) {
//        suvParagraph.style.color = '';
//        suvParagraph.style.opacity = 0;
//    } else {
//        suvParagraph.style.color = 'rgb(247, 247, 247)';
//        suvParagraph.style.opacity = 1;
//    }
//    if (suvParagraph.style.color == 'rgb(247, 247, 247)' && suvParagraph.style.opacity == 1) {
//        carParagraph.style.color = '';
//        carParagraph.style.opacity = 0;
//        truckParagraph.style.color = '';
//        truckParagraph.style.opacity = 0;
//        vanParagraph.style.color = '';
//        vanParagraph.style.opacity = 0;
//    }
//});
//
//
//
//vanImg.addEventListener('click', function () {
//    if (vanParagraph.style.color == 'rgb(247, 247, 247)' && vanParagraph.style.opacity == 1) {
//        vanParagraph.style.color = '';
//        svanaragraph.style.opacity = 0;
//    } else {
//        vanParagraph.style.color = 'rgb(247, 247, 247)';
//        vanParagraph.style.opacity = 1;
//    }
//    if (vanParagraph.style.color == 'rgb(247, 247, 247)' && vanParagraph.style.opacity == 1) {
//        carParagraph.style.color = '';
//        carParagraph.style.opacity = 0;
//        truckParagraph.style.color = '';
//        truckParagraph.style.opacity = 0;
//        suvParagraph.style.color = '';
//        suvParagraph.style.opacity = 0;
//    }
//});
//


//var option = document.querySelectorAll('.option');

$('.option').click(function () {
    if (!$(this).hasClass("current")) {
        $(".option.current").removeClass("current");
        $(this).addClass("current");
    }
});

$('#cascade-slider').cascadeSlider({
    itemClass: 'cascade-slider_item',
    arrowClass: 'cascade-slider_arrow'
});

//var carName = document.querySelectorAll('.cascade-slider_item h3');
//var carItem = document.querySelectorAll('.cascade-slider_item');
//var carPrev = document.querySelector('.cascade-slider_item.prev');
//var carNext = document.querySelector('.cascade-slider_item.next');

//for (i = 0; i < carItem.length; i++) {
//    if ($('cascade-slider_item').hasClass('now'))  {
//        $('.cascade-slider_item h3').style.opacity = 1;
//    } else {
//        $('.cascade-slider_item h3').style.opacity = 0;
//    }
//}
//if ($('cascade-slider_item').hasClass('now'))  {
//        $('.heading').style.opacity = 1;
//    } else {
//        $('.heading').style.opacity = 0;
//    }

//var angle = 0;
//
//function galleryspin(sign) {
//    spinner = document.querySelector("#spinner");
//    if (!sign) {
//        angle = angle + 45;
//    } else {
//        angle = angle - 45;
//    }
//    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
//}


//var angle = 0;
//
//function galleryspin(sign) {
//    spinner = document.querySelector("#spinner");
//    if (!sign) {
//        angle = angle + 45;
//    } else {
//        angle = angle - 45;
//    }
//    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg);
//        transform: rotateY("+ angle +"
//            deg);
//        ");
//    }


//
//var carousel = $(".carousel"),
//    currdeg  = 0;
//
//$(".forward").on("click", { d: "n" }, rotate);
//$(".backward").on("click", { d: "p" }, rotate);
//
//function rotate(e){
//  if(e.data.d=="n"){
//    currdeg = currdeg - 60;
//  }
//  if(e.data.d=="p"){
//    currdeg = currdeg + 60;
//  }
//  carousel.css({
//    "-webkit-transform": "rotateY("+currdeg+"deg)",
//    "-moz-transform": "rotateY("+currdeg+"deg)",
//    "-o-transform": "rotateY("+currdeg+"deg)",
//    "transform": "rotateY("+currdeg+"deg)"
//  });
//}