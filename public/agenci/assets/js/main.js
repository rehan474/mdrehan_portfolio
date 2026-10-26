/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sidebar Navmenu Js
03. magnific Popupu Js
04. Add Attribute For Bg Image Js
05. about scroll rotate Js
06. odometer counter Js
07. Search Bar Js
08. Sticky Js
09. Offcanvas Sidebar js
10. Floating Progress js
11. knob progress js
12. Pricing js
13. interactive gallery imgae change js
14. Mouse Custom Cursor  js
****************************************************/


(function ($) {
    "use strict";


        ////////////////////////////////////////////////////
        // 01. PreLoader Js
        document.addEventListener("agenci-ready", () => {
            const svg = document.getElementById("preloaderSvg");
            const svgText = document.querySelector("svg text");
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
            tl.to(".preloader-heading .load-text, .preloader-heading .cont", {
                delay: 1,
                y: -80,
                opacity: 0,
                duration: 0.6
            });
            tl.to(svg, {
                duration: 0.6,
                attr: {
                    d: curve
                },
                ease: "power2.inOut"
            });
            tl.to(svg, {
                duration: 0.6,
                attr: {
                    d: flat
                },
                ease: "power2.inOut"
            });
            tl.to(".preloader", {
                y: "-130%",
                duration: 0.8,
                ease: "power4.inOut"
            });
            tl.set(".preloader", {
                display: "none",
                zIndex: -1
            });
        });




	////////////////////////////////////////////////////
	// 02. Sidebar Navmenu Js
    $(document).ready(function () {
        function toggleSubMenu() {
            if ($(".sidebar-navmenu").length) {
                $(".has-submenu")
                    .off("click")
                    .on("click", function () {
                        $(this)
                            .toggleClass("active")
                            .siblings(".has-submenu")
                            .removeClass("active")
                            .find(".nav-submenu")
                            .slideUp(300);
                        $(this).find(".nav-submenu").stop(true, true).slideToggle(300);
                    });
            } else {
                if ($(window).width() <= 991) {
                    $(".has-submenu")
                        .off("click")
                        .on("click", function () {
                            $(this)
                                .toggleClass("active")
                                .siblings(".has-submenu")
                                .removeClass("active")
                                .find(".nav-submenu")
                                .slideUp(300);
                            $(this).find(".nav-submenu").stop(true, true).slideToggle(300);
                        });
                } else {
                    $(".has-submenu").off("click");
                }
            }
        }
        toggleSubMenu();
        $(window).resize(function () {
            if (!$(".sidebar-navmenu").length) {
                toggleSubMenu();
            }
        });



        // ============== sidebar navmenu toggle button Js Start =======================
        $(".sidebar-navmenu-toggle-button").on("click", function () {
            $(".sidebar-navmenu").toggleClass("active");
            $(".body-overlay").addClass("apply");
        });

        $(".sidebar-navmenu-close-button, .body-overlay").on("click", function () {
            $(".sidebar-navmenu").removeClass("active");
            $(".body-overlay").removeClass("apply");
        });

        // ============== sidebar navmenu toggle button Js End =======================





        // ===================== Scroll Back to Top Js Start ======================
        function back_to_top() {
            var btn = $('#back_to_top');
            var btn_wrapper = $('.back-to-top-wrapper');
            // Detect scroll
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 300) {
                    btn_wrapper.addClass('back-to-top-btn-show');
                } else {
                    btn_wrapper.removeClass('back-to-top-btn-show');
                }
            });
            // Smooth scroll to top
            btn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 300);
            });
        }
        // Init
        back_to_top();

        // ===================== Scroll Back to Top Js End ======================

        // ========================== add active class to navbar menu current page Js Start =====================
        function dynamicActiveMenuClass(selector) {
            let FileName = window.location.pathname.split("/").reverse()[0];

            // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
            if (FileName === "" || FileName === "index.html") {
                // Keep the activePage class on the Home link
                selector
                    .find("li.nav-menu__item.has-submenu")
                    .eq(0)
                    .addClass("activePage");
            } else {
                // Remove activePage class from all items first
                selector.find("li").removeClass("activePage");

                // Add activePage class to the correct li based on the current URL
                selector.find("li").each(function () {
                    let anchor = $(this).find("a");
                    if ($(anchor).attr("href") == FileName) {
                        $(this).addClass("activePage");
                    }
                });

                // If any li has activePage element, add class to its parent li
                selector.children("li").each(function () {
                    if ($(this).find(".activePage").length) {
                        $(this).addClass("activePage");
                    }
                });
            }
        }

        if ($("ul").length) {
            dynamicActiveMenuClass($("ul"));
        }
        // ========================== add active class to navbar menu current page Js End =====================

        // ========================== Settings Panel Js Start =====================
        $(".settings-button").on("click", function () {
            $(".settings-panel").toggleClass("active");
            $(this).toggleClass("active");
        });

        $(document).on(
            "click",
            ".settings-panel__buttons .settings-panel__button",
            function () {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            }
        );

        // Cursor start
        $(".cursor-animate").on("click", function () {
            $("body").removeClass("remove-animate-cursor");
        });

        $(".cursor-default").on("click", function () {
            $("body").addClass("remove-animate-cursor");
        });
        // Cursor end

        // Direction start
        $(".direction-ltr").on("click", function () {
            $("html").attr("dir", "ltr");
        });

        $(".direction-rtl").on("click", function () {
            $("html").attr("dir", "rtl");
        });
        // Direction end
        // ========================== Settings Panel Js End =====================

        // ********************* Toast Notification Js start *********************
        function toastMessage(messageType, messageTitle, messageText, messageIcon) {
            let $toastContainer = $("#toast-container");

            let $toast = $("<div>", {
                class: `toast-message ${messageType}`,
                html: `
                <div class="toast-message__content">
                    <span class="toast-message__icon">
                    <i class="${messageIcon}"></i>
                    </span>
                    <div class="flex-grow-1">
                    <div class="d-flex align-items-start justify-content-between mb-1">
                        <h6 class="toast-message__title">${messageTitle}</h6>
                        <button type="button" class="toast-message__close">
                        <i class="ph-bold ph-x"></i>
                        </button>
                    </div>
                    <span class="toast-message__text">${messageText}</span>
                    </div>
                </div>
                <div class="progress__bar"></div>
                `,
            });

            $toastContainer.append($toast);

            setTimeout(() => {
                $toast.addClass("active");
            }, 50);

            let totalDuration = 3500;
            let startTime = Date.now();
            let remainingTime = totalDuration;
            let toastTimeout = setTimeout(hideToast, remainingTime);

            function hideToast() {
                $toast.removeClass("active");
                setTimeout(() => {
                    $toast.remove();
                }, 500);
            }

            // Remove Toast on Close Button Click
            $toast.find(".toast-message__close").on("click", function () {
                $toast.removeClass("active");
                setTimeout(() => {
                    $toast.remove();
                }, 500);
            });

            // Pause Timeout on Hover
            $toast.on("mouseenter", function () {
                remainingTime -= Date.now() - startTime;
                clearTimeout(toastTimeout);
            });

            // Resume Timeout on Mouse Leave
            $toast.on("mouseleave", function () {
                startTime = Date.now();
                toastTimeout = setTimeout(hideToast, remainingTime);
            });
        }
        // ********************* Toast Notification Js End *********************


        // ========================= Delete Item Js start ===================
        $(document).on("click", ".delete-button", function () {
            $(this).closest(".delete-item").addClass("d-none");

            toastMessage(
                "danger",
                "Deleted",
                "You deleted successfully!",
                "ph-bold ph-trash"
            );
        });
        // ========================= Delete Item Js End ===================

        // ========================= Form Submit Js Start ===================
        $(document).on("submit", ".form-submit", function (e) {
            e.preventDefault();

            $("input").val("");

            $("textarea").val("");

            toastMessage(
                "success",
                "Success",
                "Form submitted successfully!",
                "ph-fill ph-check-circle"
            );
        });
        // ========================= Form Submit Js End ===================

        // ================== Password Show Hide Js Start ==========
        $(".toggle-password").on("click", function () {
            $(this).toggleClass("active");
            var input = $($(this).attr("id"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).removeClass("ph-bold ph-eye-closed");
                $(this).addClass("ph-bold ph-eye");
            } else {
                input.attr("type", "password");
                $(this).addClass("ph-bold ph-eye-closed");
            }
        });
        // ========================= Password Show Hide Js End ===========================

        // ========================= AOS Js Start ===========================
        AOS.init({
            once: false, // animation will happen every time you scroll
            offset: 0, // start animation when element enters the viewport
            anchorPlacement: "top-bottom", // when the bottom of the element hits the bottom of the screen
        });
        // ========================= AOS Js End ===========================

    });



    ////////////////////////////////////////////////////
	// 03. magnific Popupu Js
    $('.open-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });



    ////////////////////////////////////////////////////
	// 04. Add Attribute For Bg Image Js
    $(".bg-img").each(function () {
        var img = $(this).data("background-image");
        if (img) {
            $(this).css("background-image", "url('" + img + "')");
        }
    });

    if ($('.accordion-box').length) {
    $(".accordion-box").on('click', '.acc-btn', function () {
        var outerBox = $(this).closest('.accordion-box');
        var target = $(this).closest('.accordion');
        var accBtn = $(this);
        var accContent = accBtn.next('.acc-content');

        if (target.hasClass('active-block')) {
            // Close this one
            accBtn.removeClass('active');
            target.removeClass('active-block');
            accContent.slideUp(300);
        } else {
            // Close all others
            outerBox.find('.accordion').removeClass('active-block');
            outerBox.find('.acc-btn').removeClass('active');
            outerBox.find('.acc-content').slideUp(300);

            // Open clicked one
            accBtn.addClass('active');
            target.addClass('active-block');
            accContent.slideDown(300);
        }
    });
    }


     /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

     

    ////////////////////////////////////////////////////
	// 05. about scroll rotate Js
    let reloadClassName = document.getElementById("reload");
    if (reloadClassName !== null) {
        window.onscroll = function () {
            scrollRotate();
        };
        function scrollRotate() {
            reloadClassName.style.transform = "rotate(" + window.pageYOffset / 6 + "deg)";
        }
    }


    ////////////////////////////////////////////////////
	// 06. odometer counter Js
    if ($(".odometer").length > 0) {
        $(".odometer").waypoint(
            function () {
                var odo = $(".odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );
    }


    ////////////////////////////////////////////////////
	// 07. Search Bar Js
    $(".open-search").on("click", function () {
        $(".search_popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });
    $(".search_close_btn").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });
    $(".search-popup-overlay").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(this).removeClass("search-popup-overlay-open");
    });



    ////////////////////////////////////////////////////
	// 08. Sticky Js
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 260) {
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });


    ////////////////////////////////////////////////////
	// 09. Offcanvas Sidebar js
    $(".tw-menu-bar").on("click", function () {
        $(".twoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".twoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".twoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });



    ////////////////////////////////////////////////////
	// 10. Floating Progress js
    const progressContainers = document.querySelectorAll('.progress-container');
    function setPercentage(progressContainer) {
        const percentage = progressContainer.getAttribute('data-percentage') + '%';
        const progressEl = progressContainer.querySelector('.progress');
        const percentageEl = progressContainer.querySelector('.percentage');
        progressEl.style.width = percentage;
        percentageEl.innerText = percentage;
        percentageEl.style.insetInlineStart = percentage;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressContainer = entry.target;
                setPercentage(progressContainer);
                progressContainer.querySelector('.progress').classList.remove('active');
                progressContainer.querySelector('.percentage').classList.remove('active');
                observer.unobserve(progressContainer);
            }
        });
    }, {
        threshold: 0.5
    });
    progressContainers.forEach(progressContainer => {
        observer.observe(progressContainer);
    });



    ////////////////////////////////////////////////////
	// 11. knob progress js
    if (typeof ($.fn.knob) !== 'undefined') {
        $('.knob').each(function () {
            var $this = $(this);
            var knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%');
                }
            });
            gsap.fromTo($({
                val: 0
            }), {
                val: 0
            }, {
                val: knobVal,
                duration: 2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: $this,
                    start: "top 80%",
                    once: true,
                },
                onUpdate: function () {
                    $this.val(Math.ceil(this.targets()[0].val)).trigger('change');
                }
            });
        });
    }


    ////////////////////////////////////////////////////
	// 12. Pricing js
    function tabtable_active() {
        var e = document.getElementById("filt-monthly"),
            d = document.getElementById("filt-yearly"),
            t = document.getElementById("switcher"),
            m = document.getElementById("monthly"),
            y = document.getElementById("hourly");

        e.addEventListener("click", function () {
            t.checked = false;
            e.classList.add("pricing-ip-active");
            d.classList.remove("pricing-ip-active");
            m.classList.remove("hide");
            y.classList.add("hide");
        });
        d.addEventListener("click", function () {
            t.checked = true;
            d.classList.add("pricing-ip-active");
            e.classList.remove("pricing-ip-active");
            m.classList.add("hide");
            y.classList.remove("hide");
        });
        t.addEventListener("click", function () {
            d.classList.toggle("pricing-ip-active");
            e.classList.toggle("pricing-ip-active");
            m.classList.toggle("hide");
            y.classList.toggle("hide");
        })
    }
    if ($('#filt-monthly').length > 0) {
        tabtable_active();
    }



    ////////////////////////////////////////////////////
	// 13. interactive gallery imgae change js
    $('.interactive-gallery-list-wrap .interactive-gallery-list-item').on("mouseenter", function () {
        $('#interactive-gallery-thumb').removeClass().addClass($(this).attr('rel'));
        $(this).addClass('active').siblings().removeClass('active');
    });


     ////////////////////////////////////////////////////
      // 11. Ripples  Js
      $(document).ready(function () {
        function initRipples() {
          $(".ripple-image").each(function () {
            var $container = $(this);
            var $img = $container.find("img").first();

            if ($img.length === 0) return;

            var img = new Image();
            img.src = $img.attr("src");

            img.onload = function () {
              var imgURL = img.src;

              $container.css({
                "background-image": "url(" + imgURL + ")",
                "background-size": "cover",
                "background-position": "center center"
              });

              // init ripples plugin
              if (typeof $container.ripples === "function") {
                $container.ripples({
                  resolution: 400,
                  perturbance: 0.03,
                  imageUrl: imgURL
                });
              }

              $img.hide();
            };
          });
        }
        initRipples();

      });

      

     //>> Text Scroll Start <<//
   //>> Text Scroll Start <<//
    $(document).ready(function () {

        let device_width = $(window).width();

        if (device_width > 767) {

            const portfolioArea = document.querySelector(".portfolio__area");
            const portfolioText = document.querySelector(".portfolio__text");

            if (portfolioArea && portfolioText) {

                let portfolioline = gsap.timeline({
                    scrollTrigger: {
                        trigger: portfolioArea,
                        start: "top center-=200",
                        pin: portfolioText,
                        end: "bottom bottom+=10",
                        markers: false,
                        pinSpacing: false,
                        scrub: 1,
                    }
                });

                portfolioline.to(portfolioText, { scale: 1, duration: 1 });
                portfolioline.to(portfolioText, { scale: 1, duration: 1 });
                portfolioline.to(portfolioText, { scale: 1, duration: 1 }, "+=2");

                gsap.to(portfolioText, {
                    scrollTrigger: {
                        trigger: portfolioArea,
                        start: "top center-=100",
                        end: "bottom bottom+=10",
                        scrub: 1
                    },
                    opacity: 0
                });
            }
        }

    });

    $(document).ready(function () {

    let device_width = $(window).width();

    if (device_width > 767) {

        const portfolioArea2 = document.querySelector(".portfolio__area2");
        const portfolioText2 = document.querySelector(".portfolio__text2");

        if (portfolioArea2 && portfolioText2) {

            let portfolioline = gsap.timeline({
                scrollTrigger: {
                    trigger: portfolioArea2,
                    start: "top center-=200",
                    pin: portfolioText2, // fix
                    end: "bottom bottom+=10",
                    markers: false,
                    pinSpacing: false,
                    scrub: 1,
                }
            });

            portfolioline.to(portfolioText2, { scale: 1, duration: 1 });
            portfolioline.to(portfolioText2, { scale: 1, duration: 1 });
            portfolioline.to(portfolioText2, { scale: 1, duration: 1 }, "+=2");

            gsap.to(portfolioText2, {
                scrollTrigger: {
                    trigger: portfolioArea2,
                    start: "top center-=100",
                    end: "bottom bottom+=10",
                    scrub: 1
                },
                opacity: 0
            });
        }
    }

    });


    // Horse Card Parallax Animation
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1199) {
        gsap.utils.toArray(".testimonial-card-style").forEach((card) => {
            gsap.from(card, {
                y: 150,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "top 30%",
                    scrub: true,
                    markers: false,
                }
            });
        });
    }

    /* ================================
      service Box Js Start
    ================================ */
    // if ($('.service-box-style-4').length) {
    //     $(".service-box-style-4").on('click', '.service-acc-btn', function () {
    //         var outerBox = $(this).closest('.service-box-style-4');
    //         var target = $(this).closest('.accordion');
    //         var accBtn = $(this);
    //         var accContent = accBtn.next('.service-acc-content');

    //         if (target.hasClass('active-block')) {
    //             // Already open, so close it
    //             accBtn.removeClass('active');
    //             target.removeClass('active-block');
    //             accContent.slideUp(300);
    //         } else {
    //             // Close all others
    //             outerBox.find('.accordion').removeClass('active-block');
    //             outerBox.find('.service-acc-btn').removeClass('active');
    //             outerBox.find('.service-acc-content').slideUp(300);

    //             // Open clicked one
    //             accBtn.addClass('active');
    //             target.addClass('active-block');
    //             accContent.slideDown(300);
    //         }
    //     });
    // }

    $(".service-box-style-4").on('click', '.accordion', function (e) {

    // button click হলে accordion open না (optional)
    if ($(e.target).closest('a').length) return;

    var outerBox = $(this).closest('.service-box-style-4');
    var target = $(this);
    var accBtn = target.find('.service-acc-btn');
    var accContent = target.find('.service-acc-content');

    if (target.hasClass('active-block')) {
        accBtn.removeClass('active');
        target.removeClass('active-block');
        accContent.slideUp(300);
    } else {
        outerBox.find('.accordion').removeClass('active-block');
        outerBox.find('.service-acc-btn').removeClass('active');
        outerBox.find('.service-acc-content').slideUp(300);

        accBtn.addClass('active');
        target.addClass('active-block');
        accContent.slideDown(300);
    }
});

     /* ================================
      Testimonial Slider Js Start
    ================================ */

   if ($('.test-slider').length > 0) {
    const TestSlider = new Swiper(".test-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".array-next",
            nextEl: ".array-prev",
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }


   if ($('.full-img-wrap3').length > 0) {
        // Check window width
        if (window.innerWidth > 1399) {
            ScrollTrigger.create({
                trigger: ".full-img-wrap3",
                start: "top 0",
                end: "bottom 0%",
                pin: ".full-img3",
                pinSpacing: false,
            });
        }
    }
    

     // circular-shape-wrapper
    if (document.querySelectorAll(".circular-shape-wrapper").length > 0) {
    let cs = gsap.timeline({
        scrollTrigger: {
        trigger: ".circular-shape-wrapper",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1.5,
        }
    });

    cs.to(".shape-thumb img", {
        scale: 20,       
        rotation: 90,
        ease: "none"   
    });
    }

    //>> Project box Slider Start <<//
      if($('.project-slider').length > 0) {
        const ProjectSlider = new Swiper(".project-slider", {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    //>> Project Slider2 Start <<//
    if($('.project-slider-2').length > 0) {
        const ProjectSlider2 = new Swiper(".project-slider-2", {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 1199) {
    document.querySelectorAll('.panel-pin').forEach((section) => {
        ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top 15%",
        endTrigger: ".panel-pin-area",
        end: "bottom 80%",
        scrub: 1,
        pinSpacing: true
        });
    });
    }

     //>> Service-Image Hover Start <<//
    const items = document.querySelectorAll('.service-item');
    const images = document.querySelectorAll('.hover-image');

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {

            // active class
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // image show
            images.forEach(img => img.style.opacity = '0');

            if(images[index]){
                images[index].style.opacity = '1';
            }
        });
    });

     if ($('.hero-slider-4').length > 0) {
    const HeroSlider4 = new Swiper(".hero-slider-4", {
        spaceBetween: 20,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".array-next",
            nextEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

    // Horse Card Parallax Animation
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1199) {
        gsap.utils.toArray(".testi-card-items-4-new").forEach((card) => {
            gsap.from(card, {
                y: 150,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "top 30%",
                    scrub: true,
                    markers: false,
                }
            });
        });
    }

    // grow animation 
//    let mm = gsap.matchMedia();

//     mm.add("(min-width: 1200px)", () => {

//         gsap.utils.toArray(".service-main-card-items-2").forEach((card) => {

//             let img = card.querySelector(".service-image img");

//             gsap.fromTo(img, 
//             {
//                 x: 200,
//                 opacity: 0,
//                 scale: 1.05
//             },
//             {
//                 x: 0,
//                 opacity: 1,
//                 scale: 1,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: card,
//                     start: "top 85%",
//                     end: "top 40%",
//                     scrub: 1.5
//                 }
//             });

//         });

//     });

// 19 .service panel animation //
	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 150;
		let offsetIncrement = 120;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 120%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});

   gsap.registerPlugin(ScrollTrigger);

let mmm = gsap.matchMedia(); // ✅ same name use করো

mmm.add("(min-width: 1200px)", () => {
    
    gsap.to(".jump-anim", {
        x: 150, 
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-new",
            start: "top top",   
            end: "bottom top",  
            scrub: 1            
        }
    });

    gsap.to(".studio-text", {
        x: -150, 
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-new",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    return () => {
        // cleanup if needed
    };
});

   

    gsap.registerPlugin(ScrollTrigger);

    document.fonts.ready.then(() => {

        document.querySelectorAll(".xb_header_text").forEach((el) => {

            let split2 = SplitText.create(el, {
                type: "chars",
            });

            gsap.from(split2.chars, {
                y: -300,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: el,   // important: alada trigger
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

        });

    });

      if (typeof gsap === "undefined") return; // GSAP check

    const initial = [
        "polygon(0% 0%,0% 0%,0% 0%,0% 0%)",
        "polygon(33% 0%,33% 0%,33% 0%,33% 0%)",
        "polygon(66% 0%,66% 0%,66% 0%,66% 0%)",
        "polygon(0% 33%,0% 33%,0% 33%,0% 33%)",
        "polygon(33% 33%,33% 33%,33% 33%,33% 33%)",
        "polygon(66% 33%,66% 33%,66% 33%,66% 33%)",
        "polygon(0% 66%,0% 66%,0% 66%,0% 66%)",
        "polygon(33% 66%,33% 66%,33% 66%,33% 66%)",
        "polygon(66% 66%,66% 66%,66% 66%,66% 66%)"
    ];

    const final = [
        "polygon(0% 0%,33% 0%,33% 33%,0% 33%)",
        "polygon(33% 0%,66% 0%,66% 33%,33% 33%)",
        "polygon(66% 0%,100% 0%,100% 33%,66% 33%)",
        "polygon(0% 33%,33% 33%,33% 66%,0% 66%)",
        "polygon(33% 33%,66% 33%,66% 66%,33% 66%)",
        "polygon(66% 33%,100% 33%,100% 66%,66% 66%)",
        "polygon(0% 66%,33% 66%,33% 100%,0% 100%)",
        "polygon(33% 66%,66% 66%,66% 100%,33% 100%)",
        "polygon(66% 66%,100% 66%,100% 100%,66% 100%)"
    ];

    document.querySelectorAll(".xb-clip-animation").forEach(wrapper => {

        const img = wrapper.querySelector("img");
        if (!img) return; // 🔥 important fix

        const url = img.src;
        img.style.opacity = "0";

        for (let i = 0; i < 9; i++) {
            const mask = document.createElement("div");
            mask.className = "mask";
            mask.style.backgroundImage = `url(${url})`;
            mask.style.backgroundSize = "cover";
            mask.style.backgroundPosition = "center";
            wrapper.appendChild(mask);
        }

        const masks = wrapper.querySelectorAll(".mask");

        gsap.set(masks, {
            clipPath: (i) => initial[i]
        });

        gsap.to(masks, {
            clipPath: (i) => final[i],
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: wrapper,
                start: "top 80%"
            }
        });
    });


    // ===============================
    // GSAP + SplitText Safe Check
    // ===============================
    if (typeof gsap === "undefined" || typeof SplitText === "undefined") return;

    gsap.registerPlugin(SplitText, ScrollTrigger);

    // ===============================
    // Split Elements
    // ===============================
    const splitElements = $(".xb-split-up");
    // An absent optional split group must not skip the remaining title animations.

    // ===============================
    // Init Function
    // ===============================
    const initSplit = () => {

        splitElements.each(function (index, el) {

            // Split text
            const split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            // Delay control
            let delayValue = $(el).attr("data-split-delay");
            delayValue = delayValue ? parseFloat(delayValue) : 0;

            // Initial state
            gsap.set(split.chars, {
                rotate: 90,
                opacity: 0,
            });

            // Animation
            gsap.to(split.chars, {
                scrollTrigger: {
                    trigger: el,

                    // 🔥 KEY FIX (footer-safe)
                    start: "top bottom",

                    toggleActions: "play none none reverse",

                    // 🔥 refresh friendly
                    invalidateOnRefresh: true,

                    // optional (better UX)
                    once: true,
                },

                opacity: 1,
                rotate: 0,
                duration: 0.8,
                ease: "back.out(3)",

                stagger: {
                    each: 0.06,
                    from: "start"
                },

                delay: delayValue,
            });

        });

        // 🔥 VERY IMPORTANT (fix trigger issue)
        ScrollTrigger.refresh();
    };

    // ===============================
    // Font Ready Fix
    // ===============================
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initSplit();
            setTimeout(() => ScrollTrigger.refresh(), 100);
        });
    } else {
        $(window).on("load", () => {
            initSplit();
            setTimeout(() => ScrollTrigger.refresh(), 100);
        });
    }

    // ===============================
    // Window Load Refresh (Images Fix)
    // ===============================
    $(window).on("load", function () {
        ScrollTrigger.refresh();
    });

    



     if ($(".wa_title_spilt_1").length) {

        gsap.registerPlugin(SplitText, ScrollTrigger);

        document.querySelectorAll(".wa_title_spilt_1").forEach((atEl) => {

            const atSplit = new SplitText(atEl, {
                type: "words,chars",
                wordsClass: "word",
                charsClass: "char",
            });

            let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 0.5;
            let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

            if (window.innerWidth <= 768) {
                atDuration = atDuration * 0.3;
            }

            gsap.set(atSplit.words, {
                willChange: "transform",
                perspective: 1000,
                transformStyle: "preserve-3d",
            });

            gsap.set(atSplit.chars, {
                willChange: "transform",
                opacity: 0,
                rotateX: -80,
                transformOrigin: "center center -10px",
            });

            gsap.set(atEl, {
                perspective: 1000,
                transformStyle: "preserve-3d",
            });

            gsap.to(atSplit.chars, {
                scrollTrigger: {
                    trigger: atEl,
                    start: "top 80%",
                },
                opacity: 1,
                rotateX: 0,
                duration: atDuration,
                delay: atDelay,
                ease: "power3.out",
                stagger: {
                    each: 0.05,
                    from: "center",
                    grid: "auto",
                },
            });

        });

    }

     if (
    typeof SplitText !== "undefined" &&
        document.querySelectorAll(".split-title").length > 0
        ) {
    document.querySelectorAll(".split-title").forEach((title) => {

        // split by words + chars (IMPORTANT)
        const split = new SplitText(title, {
        type: "words,chars"
        });

        // add class to chars
        split.chars.forEach((char) => {
        char.classList.add("char");
        });

        // GSAP animation
        gsap.to(split.chars, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        clipPath: "inset(0% 0% -15% 0%)",
        x: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.03
        });

    });
    }

    ////////////////////////////////////////////////////
	// 14. Mouse Custom Cursor  js
    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
                        e.classList.add("active"), t.classList.add("active");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("active"),
                            t.classList.remove("active"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();
    $(".tw-cursor-point-area").on("mouseenter", function () {
        $(".mouseCursor").addClass("cursor-big");
    });
    $(".tw-cursor-point-area").on("mouseleave", function () {
        $(".mouseCursor").removeClass("cursor-big");
    });


})(jQuery);