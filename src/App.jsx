import { useLayoutEffect, useState } from 'react';
import { profile, stats, skillGroups } from './data/content';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Education from './components/Education';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import './agenci.css';
import templateServices from './templateServices';
import templateFooter from './templateFooter';
import templateMarquee from './templateMarquee';
import {startTemplateMotion} from './templateMotion';
const asset = name => `/agenci/assets/images/${name}`;
const links = ['About', 'Projects', 'Skills', 'Experience', 'Research', 'Education', 'Contact'];
export default function App() {
 const [menu,setMenu] = useState(false);
 useLayoutEffect(() => {
 startTemplateMotion().catch(console.error);
 const navigate = event => {
  const link = event.target.closest('a[href^="#"]');
  const target = link && document.getElementById(link.hash.slice(1));
  if (!target) return;
  event.preventDefault(); setMenu(false); document.querySelector(".close-button")?.click(); document.querySelector(".close-btn")?.click();
  const smoother = window.ScrollSmoother?.get();
  if (smoother) smoother.scrollTo(target, true, 'top 90px');
  else target.scrollIntoView({behavior:'smooth'});
  history.replaceState(null, '', link.hash);
 };
 document.addEventListener('click', navigate);
 return () => document.removeEventListener('click', navigate);
 }, []);
 return <>
 <a className="skip-link" href="#home">Skip to content</a>
 <div className="side-overlay"/>
 <div className="mobile-menu d-lg-none d-block scroll-sm position-fixed bg-black tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68">
 <button type="button" aria-label="Close navigation" className="close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 text-white">✕</button>
 <div className="mobile-menu__inner"><a href="#home" className="mobile-menu__logo text-white">Mohammad Rehan</a><div className="mobile-menu__menu"><ul className="nav-menu">{links.map(label=><li className="nav-menu__item" key={label}><a className="nav-menu__link text-white tw-py-4 fw-medium w-100" href={`#${label.toLowerCase()}`}>{label}</a></li>)}</ul></div></div></div>
 <div className="twoffcanvas-area"><div className="twoffcanvas bg-img bg-black position-fixed top-0 bottom-0 tw-p-13"><div className="twoffcanvas__close-btn"><button className="close-btn" aria-label="Close sidebar">✕</button></div><div className="twoffcanvas__logo tw-mb-15"><a href="#home" className="text-white">Mohammad Rehan</a></div><p className="text-white">{profile.heroSub}</p><nav className="portfolio-side-links">{links.map(label=><a key={label} href={`#${label.toLowerCase()}`}>{label}</a>)}</nav><a href={`mailto:${profile.email}`} className="text-white">{profile.email}</a></div></div><div className="body-overlay"/>
 <header className="header header-six tw-py-5 tw-transition-all tw-z-99 header-transparent"><div className="container container-1719"><nav className="d-flex align-items-center justify-content-between position-relative" aria-label="Main navigation"><div className="header-left"><div className="logo"><a href="#home" className="link portfolio-logo">Mohammad Rehan</a></div></div><div className="header-menu header-six-menu d-lg-block d-none"><ul className="nav-menu d-lg-flex align-items-center tw-gap-8">{links.map(label=><li className="nav-menu__item" key={label}><a className="nav-menu__link text-white hover-text-main-600 tw-py-4 fw-medium w-100" href={`#${label.toLowerCase()}`}>{label}</a></li>)}</ul></div><div className="header-right d-flex align-items-center tw-gap-5"><a href={profile.resumeFile} className="text-white">Résumé ↗</a><button type="button" className="toggle-mobileMenu d-lg-none text-white tw-text-9" aria-label="Open navigation"><img src={asset('icons/memu-toggole.svg')} alt=""/></button><button type="button" className="tw-menu-bar d-none d-lg-block" aria-label="Open sidebar"><img src={asset('icons/memu-toggole.svg')} alt=""/></button></div></nav></div></header>
 <div id="smooth-wrapper"><main id="smooth-content">
 <section id="home" className="hero-section hero-new-3 hero-ptb image-distortion p-relative fix z-index-1 bg-cover agenci-section" style={{backgroundImage:`url(${asset('img/bg-wrap-2.jpg')})`}}><div className="container"><div className="row g-4 justify-content-between align-items-center"><div className="col-xxl-8 col-xl-8"><div className="hero-content"><h1 className="tw-char-animation">Mohammad <span className="line1"><img src={asset('new-img/h-lin1.png')} alt=""/></span> Rehan developer <span className="text-2"><img src={asset('new-img/h-arrow.png')} alt=""/></span></h1></div></div><div className="col-xl-4"><ul className="social-icon"><li><a href={profile.github} aria-label="GitHub">GH</a><a href={profile.linkedin} aria-label="LinkedIn">IN</a></li><li><a href={`mailto:${profile.email}`} aria-label="Email">EM</a><a href={profile.resumeFile} aria-label="Résumé">CV</a></li></ul><p className="hero-text">{profile.heroSub}</p></div></div><div className="hero-bottom"><a href="#about">Scroll down ↓</a><p>{profile.location}</p></div></div></section>
 <section id="about" className="about-section-new-3 new-section-padding agenci-section"><div className="container"><div className="row g-4"><div className="col-lg-4 animation-item" data-aos="fade-up" data-aos-duration="1200"><div className="about-thumb-new-3"><span className="sub-title dm-sans-main">Who I am</span><div className="about-thumb"><div className="content"><h2 className="title mona-sans-main">Frontend & Software Developer</h2><a href={profile.resumeFile} className="theme-btn mona-sans-main">Download Résumé ↗</a></div><div className="thumb"><img src={asset('new-img/about-3-01.png')} alt="" loading="lazy"/></div></div></div></div><div className="col-lg-8"><div className="about-content-new-3 animation-item" data-aos="fade-up" data-aos-duration="1200"><h3 className="title-2 wa_title_spilt_1 mona-sans-main">{profile.bio[0]}</h3>{profile.bio.slice(1).map(p=><p className="text-2 satoshi-main" key={p}>{p}</p>)}<div className="counter-new-box"><p className="text-3 satoshi-main">{profile.roles.join(' · ')}</p><div className="counter-area"><h2 className="counter-title mona-sans-main">{stats[2].count}<small> published patent applications</small></h2><div className="thumb"><img src={asset('new-img/h-arrow.png')} alt="" loading="lazy"/></div></div></div></div></div></div></div></section>
 <div dangerouslySetInnerHTML={{__html:templateMarquee}}/>

 <Projects/>
 <div dangerouslySetInnerHTML={{__html:templateServices}}/>
 <div className="legacy"><Experience/><Research/><Certifications/><Education/><FAQ/><Contact/></div>
 <div dangerouslySetInnerHTML={{__html:templateFooter}}/>
 </main></div><div className="legacy"><ChatAssistant/></div>
 </>;
}
