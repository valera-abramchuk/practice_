$(function() {
    var siteScroll = function() {

        $(window).scroll(function() {

            var st = $(this).scrollTop();

            if (st > 10) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
            }


        })

    };


    siteScroll();
    AOS.init({
        duration: 800
    });



    //     $('.navbar-toggler').on('click', function() {
    //         $('.header').toggleClass('scroll2');
    //     });

    //     // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    //     let vh = window.innerHeight * 0.01;
    //     // Then we set the value in the --vh custom property to the root of the document
    //     document.documentElement.style.setProperty("--vh", `${vh}px`);

    //     window.addEventListener('resize', () => {
    //         // We execute the same script as before
    //         let vh = window.innerHeight * 0.01;
    //         document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     });
})
let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");


stpbl1.onmouseover = function() {
    stepbrdr1.style.borderBottom = "3px solid white";

}
stpbl1.onmouseout = function() {
    stepbrdr1.style.borderBottom = "3px solid black";

};

stpbl2.onmouseover = function() {
    stepbrdr2.style.borderBottom = "3px solid white";

}
stpbl2.onmouseout = function() {
    stepbrdr2.style.borderBottom = "3px solid black";

};
stpbl3.onmouseover = function() {
    stepbrdr3.style.borderBottom = "3px solid white";

}
stpbl3.onmouseout = function() {
    stepbrdr3.style.borderBottom = "3px solid black";

};