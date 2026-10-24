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
const asset = name => `/agenci/assets/images/${name}`;
const links = ['About', 'Projects', 'Skills', 'Experience', 'Research', 'Education', 'Contact'];
export default function App() {
 const [menu,setMenu] = useState(false);
 useLayoutEffect(() => {
  const {gsap,ScrollTrigger} = window;
  if(!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.from('.hero-content h1',{y:70,opacity:0,duration:1.1,ease:'power3.out'});
   gsap.utils.toArray('.motion-reveal').forEach(el=>gsap.from(el,{y:45,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  });
  mm.add('(min-width: 1199px) and (prefers-reduced-motion: no-preference)',()=>{
   const panels=gsap.utils.toArray('.des-portfolio-panel');
   panels.forEach((panel,index)=>gsap.to(panel,{scale:index===panels.length-1?1:.8,ease:'none',scrollTrigger:{trigger:panel,start:'top 14%',end:'bottom 80%',scrub:true,pin:true,pinSpacing:false,endTrigger:'.des-portfolio-wrap'}}));
  });
  const refresh=()=>ScrollTrigger.refresh();
  document.fonts.ready.then(refresh);window.addEventListener('load',refresh);
  return ()=>{mm.revert();window.removeEventListener('load',refresh)};
 },[]);
 return <>
 <a className="skip-link" href="#main">Skip to content</a>
 <header className="portfolio-header"><a className="portfolio-logo" href="#home">Rehan<span>®</span></a><nav aria-label="Main navigation" className={menu?'is-open':''}>{links.map(label=><a key={label} href={`#${label.toLowerCase()}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav><a className="pill" href={profile.resumeFile}>Résumé ↗</a><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?'Close':'Menu'} ☰</button></header>
 <main id="main">
 <section id="home" className="hero-section hero-new-3 hero-ptb bg-cover agenci-section" style={{backgroundImage:`url(${asset('img/bg-wrap-2.jpg')})`}}><div className="container"><div className="row g-4 justify-content-between align-items-center"><div className="col-xl-8"><div className="hero-content"><h1>Mohammad<br/><span className="line1"><img src={asset('new-img/h-lin1.png')} alt=""/></span> Rehan<br/>developer <span className="text-2"><img src={asset('new-img/h-arrow.png')} alt=""/></span></h1></div></div><div className="col-xl-4"><ul className="social-icon"><li><a href={profile.github} aria-label="GitHub">GH</a><a href={profile.linkedin} aria-label="LinkedIn">IN</a></li><li><a href={`mailto:${profile.email}`} aria-label="Email">EM</a><a href={profile.resumeFile} aria-label="Résumé">CV</a></li></ul><p className="hero-text">{profile.heroSub}</p></div></div><div className="hero-bottom"><a href="#about">Scroll down ↓</a><p>{profile.location}</p></div></div></section>
 <section id="about" className="about-section-new-3 new-section-padding agenci-section"><div className="container"><div className="row g-4"><div className="col-lg-4 motion-reveal"><div className="about-thumb-new-3"><span className="sub-title dm-sans-main">Who I am</span><div className="about-thumb"><div className="content"><h2 className="title mona-sans-main">Frontend & Software Developer</h2><a href={profile.resumeFile} className="theme-btn mona-sans-main">Download Résumé ↗</a></div><div className="thumb"><img src={asset('new-img/about-3-01.png')} alt="" loading="lazy"/></div></div></div></div><div className="col-lg-8"><div className="about-content-new-3 motion-reveal"><h3 className="title-2 mona-sans-main">{profile.bio[0]}</h3>{profile.bio.slice(1).map(p=><p className="text-2 satoshi-main" key={p}>{p}</p>)}<div className="counter-new-box"><p className="text-3 satoshi-main">{profile.roles.join(' · ')}</p><div className="counter-area"><h2 className="counter-title mona-sans-main">{stats[2].count}<small> published patent applications</small></h2><div className="thumb"><img src={asset('new-img/about-3-02.png')} alt="" loading="lazy"/></div></div></div></div></div></div></div></section>
 <div className="skills-marquee" aria-label={profile.tags.join(', ')}><div aria-hidden="true">{[...profile.tags,...profile.tags].map((s,i)=><span key={i}>{s} ✳</span>)}</div></div>
 <div className="portfolio-stats">{stats.map(s=><div key={s.label}><strong>{s.count}{s.suffix}</strong><span>{s.label}</span></div>)}</div>
 <Projects/>
 <section id="skills" className="service-section-new-3 new-section-padding agenci-section"><div className="container"><div className="new-service-top-area-3"><span className="sub-title satoshi-main">Technical skills</span><h2 className="title mona-sans-main motion-reveal">Frontend, applied AI & business systems.</h2></div><div className="row g-4">{skillGroups.map((group,i)=><div className="col-lg-4" key={group.title}><div className="new-service-box-items-3 motion-reveal"><div className="skill-symbol" aria-hidden="true">{['✳','◎','↗'][i]}</div><div className="content"><h3 className="title mona-sans-main">{group.title}</h3>{group.skills.map(s=><p className="satoshi-main" key={s.name}>{s.name}<span className="skill-level">{s.level}%</span></p>)}</div></div></div>)}</div></div></section>
 <div className="legacy"><Experience/><Research/><Certifications/><Education/><FAQ/><Contact/></div>
 </main><footer className="portfolio-footer"><p>Have a project or opportunity?</p><a className="footer-title" href={`mailto:${profile.email}`}>Let’s talk ↗</a><div><span>© {new Date().getFullYear()} {profile.name}</span><a href={profile.linkedin}>LinkedIn ↗</a><a href={profile.github}>GitHub ↗</a><a href="#home">Back to top ↑</a></div></footer><div className="legacy"><ChatAssistant/></div>
 </>;
}
