/***************************************************
==================== JS INDEX ======================
****************************************************

01. Maquee Js
02. testimonial Js
03. testimonial two Js
04. testimonial three Js
05. Project four Js
06. service five Js
07. maquee five Js
08. portfolio five Js
09. testimonial five Js
10. fullscreen banner active Js
11. fullscreen banner Three active Js


****************************************************/


(function ($) {
    "use strict";

    ////////////////////////////////////////////////////
    // 01. Maquee Js
    var slider = new Swiper('.maquee-active', {
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 40,
            },
        },
    });

     

    ////////////////////////////////////////////////////
    // 02. testimonial Js
    var slider = new Swiper('.testimonial-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });




    ////////////////////////////////////////////////////
    // 03. testimonial two Js
    var slider = new Swiper('.testimonial-two-active', {
        slidesPerView: 1,
        loop: true,
        speed: 2500,
        autoplay: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });




    ////////////////////////////////////////////////////
    // 04. testimonial three Js
    var slider = new Swiper('.testimonial-three-active', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 2500,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3.6,
            },
            '1400': {
                slidesPerView: 2.8,
            },
            '1200': {
                slidesPerView: 1.6,
            },
            '992': {
                slidesPerView: 1.4,
            },
            '768': {
                slidesPerView: 1.1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".testimonial-three-dot",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
            },
        },
    });


    ////////////////////////////////////////////////////
    // 05. Project four Js
    var slider = new Swiper('.project-four-active', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 2500,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            '1600': {
                slidesPerView: 3.4,
            },
            '1400': {
                slidesPerView: 2.8,
            },
            '1200': {
                slidesPerView: 1.6,
            },
            '992': {
                slidesPerView: 1.4,
            },
            '768': {
                slidesPerView: 1.1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });



    ////////////////////////////////////////////////////
    // 06. service five Js
    var slider = new Swiper('.service-five-active', {
        slidesPerView: "auto",
        spaceBetween: 25,
        loop: true,
        speed: 2500,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            '1920': {
                slidesPerView: 5,
            },
            '1800': {
                slidesPerView: 4,
            },
            '1600': {
                slidesPerView: 4,
            },
            '1400': {
                slidesPerView: 3.7,
            },
            '1200': {
                slidesPerView: 3.2,
            },
            '992': {
                slidesPerView: 2.7,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1.5,
            },
            '0': {
                slidesPerView: 1.2,
            },
        },
        // pagination
        pagination: {
            el: ".service-five-dot",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
            },
        },
    });



    ////////////////////////////////////////////////////
    // 07. maquee five Js
    var slider = new Swiper('.maquee-five-active', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 30,
            },
            768: {
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 30,
            },
        },
    });



    ////////////////////////////////////////////////////
    // 08. portfolio five Js
    var slider = new Swiper('.portfolio-five-active', {
        slidesPerView: "auto",
        spaceBetween: 25,
        loop: true,
        speed: 2500,
        autoplay: true,
        centeredSlides: true,
        breakpoints: {
            '1600': {
                slidesPerView: 2.3,
            },
            '1400': {
                slidesPerView: 2.2,
            },
            '1200': {
                slidesPerView: 1.9,
            },
            '992': {
                slidesPerView: 1.5,
            },
            '768': {
                slidesPerView: 1.4,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        // pagination
        pagination: {
            el: ".portfolio-five-dot",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
            },
        },
    });



    ////////////////////////////////////////////////////
    // 09. testimonial five Js
    var slider = new Swiper('.testimonial-five-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
        // Navigation arrows
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });



    ////////////////////////////////////////////////////
    // 10. fullscreen banner active Js
    const sliderswiperone = new Swiper('.fullscreen-banner-one-active', {
        // Optional parameters
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        autoplay: true,
        effect: 'fade',
        breakpoints: {
            '1600': {
                slidesPerView: 1,
            },
            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },

            a11y: false,
        },

        pagination: {
            el: ".fullscreen-banner-one-dots",
            clickable: true,
        },

    });



    ////////////////////////////////////////////////////
    // 11. fullscreen banner Three active Js
    if (document.querySelectorAll(".fullscreen-banner-three").length > 0) {
        const interleaveOffset = 0.75;
        var portfolio_4_activ = new Swiper('.fullscreen-banner-three-activ', {
            loop: true,
            direction: "vertical",
            autoplay: false,
            speed: 2000,
            watchSlidesProgress: true,
            mousewheelControl: true,
            mousewheel: true,
            pagination: {
                el: ".fullscreen-banner-three-pagination",
                clickable: true,
            },
            on: {
                progress: function () {
                    let swiper = this;

                    for (let i = 0; i < swiper.slides.length; i++) {
                        let slideProgress = swiper.slides[i].progress;
                        let innerOffset = swiper.height * interleaveOffset;
                        let innerTranslate = slideProgress * innerOffset;

                        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
                            y: innerTranslate,
                        });
                    }
                },
                setTransition: function (slider, speed) {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-inner").style.transition =
                            speed + "ms";
                    }
                },

                slideChange: function () {
                    var bullets = document.querySelectorAll(".swiper-pagination-bullet");
                    bullets.forEach((bullet, index) => {
                        if (index <= this.realIndex) {
                            bullet.classList.add("swiper-pagination-bullet-active");
                        }
                    });
                }
            }
        });
    }
    // =========================  Fullscreen Banner Three End ==============





})(jQuery);