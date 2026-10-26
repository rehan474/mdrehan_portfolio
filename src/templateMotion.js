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
 await Promise.all(Array.from(document.images).map(img => img.complete ? Promise.resolve() : new Promise(resolve => { img.addEventListener('load',resolve,{once:true}); img.addEventListener('error',resolve,{once:true}); })));
 window.ScrollTrigger?.refresh();
 window.AOS?.refresh();
 document.documentElement.classList.add('motion-ready');
}
