let started = false;
export async function startTemplateMotion() {
 if (started) return; started = true;
 const scripts = ["/agenci/assets/js/jquery-3.7.1.min.js", "/agenci/assets/js/phosphor-icon.js", "/agenci/assets/js/boostrap.bundle.min.js", "/agenci/assets/js/waypoints.js", "/agenci/assets/js/swiper-bundle.js", "/agenci/assets/js/odometer.min.js", "/agenci/assets/js/magnific-popup.min.js", "/agenci/assets/js/jquery-knob.js", "/agenci/assets/js/aos.js", "/agenci/assets/js/gsap/gsap.js", "/agenci/assets/js/gsap/gsap-scroll-to-plugin.js", "/agenci/assets/js/gsap/gsap-scroll-smoother.js", "/agenci/assets/js/gsap/gsap-scroll-trigger.js", "/agenci/assets/js/gsap/gsap-split-text.js", "/agenci/assets/js/three.min.js", "/agenci/assets/js/chroma.min.js", "/agenci/assets/js/custom-gsap.js", "/agenci/assets/js/slider-active.js", "/agenci/assets/js/main.js", "/agenci/assets/js/tw-cursor.js"];
 for (const src of scripts) {
 if (src.endsWith("custom-gsap.js")) await document.fonts.ready;
 await new Promise((resolve,reject) => {
  const script=document.createElement('script'); script.src=src;
  script.onload=resolve; script.onerror=()=>reject(new Error('Failed to load '+src));
  document.body.append(script);
 });
 }
 document.dispatchEvent(new Event('agenci-ready'));
 await document.fonts.ready;
 const refresh = () => { window.ScrollTrigger?.refresh(); window.AOS?.refresh(); };
 // Lazy images must not block refresh until every lower section has been visited.
 document.querySelectorAll('img').forEach(img => {
  if (!img.complete) { img.addEventListener('load',refresh,{once:true}); img.addEventListener('error',refresh,{once:true}); }
 });
 if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.gsap?.from('.selected-work-title', {x:60, opacity:.2, ease:'none', scrollTrigger:{trigger:'.project-top-area',start:'top 95%',end:'top 55%',scrub:1}});
  window.gsap?.from('.footer-textt', {y:40, opacity:.25, ease:'none', scrollTrigger:{trigger:'.footer-textt',start:'top 98%',end:'bottom bottom',scrub:1}});
  document.querySelectorAll('.legacy .portfolio-reveal').forEach(el => {
   window.gsap?.from(el, {y:24, duration:.65, ease:'power2.out', scrollTrigger:{trigger:el,start:'top 92%',once:true}});
  });
 }
 window.ScrollTrigger?.refresh();
 window.AOS?.refresh();
 document.documentElement.classList.add('motion-ready');
}
