/***************************************************
==================== JS INDEX ======================
****************************************************

01. Section title Animation Js
02. Mobile Menu Js
03. Position Aware button hover Js
04. portfolio panel Js
05. button hover animation Js
06. maquee bg animation Js
07. cta animation Js
08. hover reveal for image Js
09. project panel scroll Js
10. project sticky Js
11. about splitText Js
12. thumbnail zoom 100% Js
13. Home four project Js
14. project five sticky Js
15. button text split animation Js
16. fullscreen banner Js
17. Home four project Js
18. interactive gallery sticky Js
19. video button Js
****************************************************/



var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
////////////////////////////////////////////////////
// 0. Smooth Scroll Js
function smoothSctoll() {
	$('.smooth a').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 120
			}, 1500);
		}
	});
}
smoothSctoll();
if($('#smooth-wrapper').length && $('#smooth-content').length){
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

	gsap.config({
		nullTargetWarn: false,
	});

	let smoother = ScrollSmoother.create({
		smooth: 2,
		effects: true,
		smoothTouch: 0.1,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});
}

////////////////////////////////////////////////////
// 01. Section title Animation Js
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && $(".tw-char-animation").length > 0) {
    let char_come = gsap.utils.toArray(".tw-char-animation");
    char_come.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });
        const itemSplitted = new SplitText(splitTextLine, {
            type: "chars, words",
        });
        gsap.set(splitTextLine, {
            perspective: 300
        });
        itemSplitted.split({
            type: "chars, words"
        });
        tl.from(itemSplitted.chars, {
            duration: 1,
            delay: 0.5,
            x: 100,
            autoAlpha: 0,
            stagger: 0.05,
        });
    });
}


////////////////////////////////////////////////////
// 02. Mobile Menu Js
document.addEventListener("agenci-ready", function () {

    var mmm = gsap.matchMedia();
    var mtl = gsap.timeline({ paused: true });

    const toggleMobileMenus = document.querySelectorAll(".toggle-mobileMenu, .sidebar-navmenu-toggle-button");
    const closeButton = document.querySelector(".close-button");
    const mobileSideOverlay = document.querySelector(".side-overlay");

    // GSAP Animation (only once)
    mmm.add("(max-width: 991px)", () => {

        mtl.clear(); // important (avoid duplicate timeline)

        mtl.to(".side-overlay", {
            opacity: 1,
            visibility: "visible",
            duration: 0.15,
        });

        mtl.to(".mobile-menu", {
            x: 0,
            duration: 0.2,
        });

        mtl.from(".nav-menu__item", {
            opacity: 0,
            y: -60,
            duration: 0.2,
            stagger: 0.08,
        });

    });

    // ✅ OPEN MENU (outside matchMedia)
    toggleMobileMenus.forEach(btn => {
        btn.addEventListener("click", function () {
            mtl.play();
            document.body.style.overflow = "hidden";
        });
    });

    // ✅ CLOSE BUTTON
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            mtl.reverse();
            document.body.style.overflow = "";
        });
    }

    // ✅ OVERLAY CLOSE
    if (mobileSideOverlay) {
        mobileSideOverlay.addEventListener("click", function () {
            mtl.reverse();
            document.body.style.overflow = "";
        });
    }

});


////////////////////////////////////////////////////
// 03. Position Aware button hover Js
class Button {
    constructor(buttonElement) {
        this.block = buttonElement;
        this.init();
        this.initEvents();
    }
    init() {
        const el = gsap.utils.selector(this.block);
        this.DOM = {
            button: this.block,
            flair: el(".button__flair"),
        };
        this.xSet = gsap.quickSetter(this.DOM.flair, "xPercent");
        this.ySet = gsap.quickSetter(this.DOM.flair, "yPercent");
    }
    getXY(e) {
        const {
            left,
            top,
            width,
            height
        } =
        this.DOM.button.getBoundingClientRect();
        const xTransformer = gsap.utils.pipe(
            gsap.utils.mapRange(0, width, 0, 100),
            gsap.utils.clamp(0, 100)
        );
        const yTransformer = gsap.utils.pipe(
            gsap.utils.mapRange(0, height, 0, 100),
            gsap.utils.clamp(0, 100)
        );
        return {
            x: xTransformer(e.clientX - left),
            y: yTransformer(e.clientY - top),
        };
    }
    initEvents() {
        this.DOM.button.addEventListener("mouseenter", (e) => {
            const {
                x,
                y
            } = this.getXY(e);
            this.xSet(x);
            this.ySet(y);
            gsap.to(this.DOM.flair, {
                scale: 1,
                duration: 0.9,
                ease: "power2.out",
            });
        });
        this.DOM.button.addEventListener("mouseleave", (e) => {
            const {
                x,
                y
            } = this.getXY(e);
            gsap.killTweensOf(this.DOM.flair);
            gsap.to(this.DOM.flair, {
                xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                scale: 0,
                duration: 0.9,
                ease: "power2.out",
            });
        });
        this.DOM.button.addEventListener("mousemove", (e) => {
            const {
                x,
                y
            } = this.getXY(e);
            gsap.to(this.DOM.flair, {
                xPercent: x,
                yPercent: y,
                duration: 0.9,
                ease: "power2",
            });
        });
    }
}
const buttonElements = document.querySelectorAll('[data-block="button"]');
buttonElements.forEach((buttonElement) => {
    new Button(buttonElement);
});


////////////////////////////////////////////////////
// 04. portfolio panel Js
let otherSections = document.querySelectorAll('.portfolio-panel')
otherSections.forEach((section, index) => {
    gsap.set(otherSections, {
        scale: 1
    });
    tl.to(section, {
        scale: .8,
        scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: 'top 20%',
            end: "bottom 100%",
            endTrigger: '.portfolio-panel-area',
            pinSpacing: false,
            markers: false,
        },
    })
})



////////////////////////////////////////////////////
// 05. button hover animation Js
$('.tw-hover-btn').on('mouseenter', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find('.tw-btn-circle-dot').css({
        top: y,
        left: x
    });
});
$('.tw-hover-btn').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find('.tw-btn-circle-dot').css({
        top: y,
        left: x
    });
});
var hoverBtns = gsap.utils.toArray(".tw-hover-btn-wrapper");
const hoverBtnItem = gsap.utils.toArray(".tw-hover-btn-item");
hoverBtns.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
        callParallax(e);
    });

    function callParallax(e) {
        parallaxIt(e, hoverBtnItem[i], 60);
    }

    function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
        gsap.to(target, 1, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
    }
    $(btn).mouseleave(function (e) {
        gsap.to(hoverBtnItem[i], 1, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
    });
});



////////////////////////////////////////////////////
// 06. maquee bg animation Js
gsap.utils.toArray('.maquee-bg').forEach(container => {
    const img = container.querySelector('img');
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
        }
    });
    tl.fromTo(img, {
        yPercent: -20,
        ease: 'none'
    }, {
        yPercent: 20,
        ease: 'none'
    });
});


////////////////////////////////////////////////////
// 07. cta animation Js
if ($('.cta-area').length > 0) {
    gsap.timeline({
            scrollTrigger: {
                trigger: '.cta-area',
                start: 'top 100%',
                end: 'bottom 20%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.tw-cta-title-1', {
            x: '-15%'
        });
    gsap.set('.tw-cta-title-1', {
        x: '10%'
    });

}
if ($('.cta-area').length > 0) {
    gsap.timeline({
            scrollTrigger: {
                trigger: '.cta-area',
                start: 'top 100%',
                end: 'bottom 20%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.tw-cta-title-2', {
            x: '10%'
        });
    gsap.set('.tw-cta-title-2', {
        x: '-10%'
    });
}


////////////////////////////////////////////////////
// 08. hover reveal for image Js
const hoverItem = document.querySelectorAll(".hover__reveal-item");
function moveImage(e, hoverItem, index) {
    const item = hoverItem.getBoundingClientRect();
    const x = e.clientX - item.x;
    const y = e.clientY - item.y;
    if (hoverItem.children[index]) {
        hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
    }
}
hoverItem.forEach((item, i) => {
    item.addEventListener("mousemove", (e) => {
        setInterval(moveImage(e, item, 1), 50);
    });
});


////////////////////////////////////////////////////
// 09. project panel scroll Js
let pr = gsap.matchMedia();
pr.add("(min-width: 991px)", () => {
    let tl = gsap.timeline();
    let projectpanels = document.querySelectorAll('.project-panel')
    projectpanels.forEach((section, index) => {
        tl.to(section, {
            scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: 'center center',
                end: "bottom 60%",
                endTrigger: '.project-panel-area',
                pinSpacing: false,
                markers: false,
            },
        })
    })
});



////////////////////////////////////////////////////
// 10. project sticky Js
gsap.utils.toArray('.project-sticky').forEach(sticky => {
    if (window.innerWidth < 0 || window.innerWidth > 992) {
        ScrollTrigger.create({
            trigger: sticky,
            start: 'top top+=220',
            end: '+=2320',
            pin: true,
            scrub: true,
        });
    }
});


////////////////////////////////////////////////////
// 11. about splitText Js
if (document.querySelector('.animated-title, .banner-three-title')) {
    gsap.set('.animated-title, .banner-three-title', {
        opacity: 0
    });
    gsap.to('.animated-title, .banner-three-title', {
        opacity: 1,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.animated-title, .banner-three-title',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true
        },
        onComplete: runAnimation
    });
    function runAnimation() {
        const mySplitText = new SplitText(".animated-title, .banner-three-title", {
            type: "words,chars"
        });
        const chars = mySplitText.chars;
        const cta = gsap.timeline({
            repeat: -1,
            delay: 0.5
        });
        cta.to(chars, {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power1.out",
            stagger: 0.04,
            transformOrigin: 'center bottom'
        });
        cta.to(chars, {
            yPercent: -20,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.03,
            duration: 0.8
        }, 0.5);
        cta.to(chars, {
            scaleY: 1,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.03,
            duration: 1.5
        }, 0.5);
        cta.to(chars, {
            onStart: () => {
                chars.forEach(char => char.classList.add('char-animated'));
            }
        }, 0.5);
        cta.to(chars, {
            yPercent: 0,
            ease: "back.out(1.7)",
            stagger: 0.03,
            duration: 0.8
        }, 0.7);
        cta.to(chars, {
            onStart: () => {
                chars.forEach(char => char.classList.remove('char-animated'));
            }
        });
    }
}


////////////////////////////////////////////////////
// 12. thumbnail zoom 100% Js
if ($('.thumbnail-three-area').length > 0) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1200px)", () => {
        let thumbnail = gsap.timeline({
            scrollTrigger: {
                trigger: ".thumbnail-three-area",
                start: "top 170",
                pin: true,
                markers: false,
                scrub: 1,
                pinSpacing: false,
                end: "bottom 70%",
            }
        });
        thumbnail.to(".thumbnail-three-bg", {
            width: "1110px",
            height: "560px",

        });
    });
}

/* ================================
       Des Portfolio Anim Js Start
    ================================ */
    
    if (document.querySelector(".des-portfolio-wrap")) {
        const pr = gsap.matchMedia();

        pr.add("(prefers-reduced-motion: no-preference)", () => {

            const sections = document.querySelectorAll(".des-portfolio-panel");
            const wrap = document.querySelector(".des-portfolio-wrap");

            if (!sections.length || !wrap) return;

            // Initial state
            gsap.set(sections, { scale: 1 });

            // Animate each section except the last one
            sections.forEach((section, index) => {
                const isLast = index === sections.length - 1;

                gsap.to(section, {
                    scale: isLast ? 1 : 0.8, // 👈 last one stays full-size
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: () => window.innerWidth < 1199 ? "top 100px" : "top 14%",
                        end: "bottom 80%",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        endTrigger: wrap,
                        markers: false,
                    },
                });
            });

            // Cleanup on condition change
            return () => {
                // gsap.matchMedia reverts only the animations owned by this breakpoint.
            };
        });
    }


////////////////////////////////////////////////////
// 13. Home four project Js
let dd = gsap.matchMedia();
dd.add("(min-width: 1200px)", () => {
    const panelsSections = gsap.utils.toArray(".panels-three");
    for (let i = 0; i < panelsSections.length; i++) {
        const thePanelsSection = panelsSections[i];
        const panels = gsap.utils.toArray(".panels-three-container .panel-three", thePanelsSection);
        const panelsContainer = thePanelsSection.querySelector(".panels-three-container");
        const panelHeight = 643;
        gsap.set(panelsContainer, {
            height: panelHeight
        });
        gsap.set(panels, {
            height: panelHeight
        });
        let totalPanelsWidth = 0;
        panels.forEach((panel) => {
            totalPanelsWidth += $(panel).outerWidth(true);
        });
        gsap.set(panelsContainer, {
            width: totalPanelsWidth
        });
        gsap.to(panels, {
            x: -totalPanelsWidth + innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer,
                pin: true,
                start: '40% center',
                end: "bottom 80%",
                scrub: 1,
                end: (st) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
            }
        });
    }
});




////////////////////////////////////////////////////
// 14. project five sticky Js
gsap.utils.toArray('.project-five-sticky').forEach(sticky => {
    if (window.innerWidth < 0 || window.innerWidth > 992) {
        ScrollTrigger.create({
            trigger: sticky,
            start: 'top top+=290',
            end: '+=670',
            pin: true,
            scrub: true,
        });
    }
});


////////////////////////////////////////////////////
// 15. button text split animation Js
if ($(".btn-animated-text").length) {
    $(".btn-animated-text").each(function () {
        var $btn = $(this);
        var text = $btn.attr("data-text");
        $btn.empty();
        if (!text) return;
        for (var i = 0; i < text.length; i++) {
            var char = text[i] === " " ? "\u00A0" : text[i];
            var $span = $("<span></span>").attr("data-text", char).text(char);
            $btn.append($span);
        }
    });
}


////////////////////////////////////////////////////
// 16. fullscreen banner Js
$('.fullscreen-banner-two-title').on("mouseenter", function () {
    $('#fullscreen-banner-two-wrap').removeClass().addClass($(this).attr('rel'));
    $(this).addClass('active').siblings().removeClass('active');
});



////////////////////////////////////////////////////
// 17. Home four project Js
let ss = gsap.matchMedia();
ss.add("(min-width: 1200px)", () => {
    const panelsSections = gsap.utils.toArray(".panels-four");
    for (let i = 0; i < panelsSections.length; i++) {
        const thePanelsSection = panelsSections[i];
        const panels = gsap.utils.toArray(".panels-four-container .panel-four", thePanelsSection);
        const panelsContainer = thePanelsSection.querySelector(".panels-four-container");
        const panelHeight = 640;
        gsap.set(panelsContainer, {
            height: panelHeight
        });
        gsap.set(panels, {
            height: panelHeight
        });
        let totalPanelsWidth = 0;
        panels.forEach((panel) => {
            totalPanelsWidth += $(panel).outerWidth(true);
        });
        gsap.set(panelsContainer, {
            width: totalPanelsWidth
        });
        gsap.to(panels, {
            x: -totalPanelsWidth + innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer,
                pin: true,
                start: '55% center',
                end: "bottom 80%",
                scrub: 1,
                end: (st) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
            }
        });
    }
});



////////////////////////////////////////////////////
// 18. interactive gallery sticky Js
gsap.utils.toArray('.interactive-gallery-list-thumb-wrap').forEach(sticky => {
    if (window.innerWidth < 0 || window.innerWidth > 768) {
        ScrollTrigger.create({
            trigger: sticky,
            start: 'top top+=120',
            end: '+=435',
            pin: true,
            scrub: true,
        });
    }
});




////////////////////////////////////////////////////
// 19. video button Js
if (document.querySelector(".video-button")) {
    let topToBottomTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".video-button",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2,
            markers: false,
        }
    });
    topToBottomTL.fromTo(".video-button", {
        y: 0, 
        opacity: 0,
    }, {
        y: 170,
        opacity: 1,
        duration: 1.6
    });
}

