// ============================================================
// All editable content for the portfolio lives here.
// Change facts, links, and copy in this one file — components
// just render whatever is here.
// ============================================================

export const profile = {
  name: "Mohammad Rehan",
  location: "Riyadh, Saudi Arabia",
  locationNote: "Open to relocate",
  nationality: "Indian national",
  email: "mohorehan@gmail.com",
  phone: "+966 50 702 1474",
  linkedin: "https://www.linkedin.com/in/mdrehan474",
  github: "https://github.com/rehan474",
  resumeFile: "/Resume/MOHAMMAD_REHAN_SAUDI__RESUME.pdf", // drop your real PDF here with this filename
  roles: [
    "Frontend Developer",
    "AI & Computer Vision Researcher",
    "Cloud Foundations (OCI · AWS)",
    "Cybersecurity Enthusiast",
  ],
  heroSub:
    "MCA graduate building at the intersection of generative AI, frontend engineering and cloud & security foundations — with IEEE-linked research and patent filings on GAN-based image synthesis.",
  bio: [
    "I'm an MCA graduate (NMAM Institute of Technology, Nitte) with a technical core in frontend development, artificial intelligence and computer vision, currently based in Riyadh, Saudi Arabia.",
    "My research runs through generative image synthesis: training DCGAN and BigGAN models for text-to-image generation, publishing in IEEE Xplore, and filing Indian patents around flower image generation systems.",
    "On the cloud and security side, I hold an Oracle Cloud Infrastructure AI Foundations certification and an AWS Solutions Architecture job simulation, and I'm actively building toward cybersecurity and cloud engineering roles alongside frontend and AI/ML work.",
  ],
  tags: ["Vue.js", "PyTorch", "GANs", "Oracle Cloud", "AWS", "MySQL", "Flask"],
};

export const stats = [
  { count: 3, suffix: "", label: "Research Papers (IEEE-linked)" },
  // TODO: confirm exact patent count/details — resume text listed 2, Rehan says 3
  { count: 3, suffix: "", label: "Indian Patents Filed" },
  { count: 94, suffix: "%", label: "Best GAN Accuracy (BigGAN, 10 classes)" },
  { count: 4, suffix: "+", label: "Professional Certifications" },
];

export const skillGroups = [
  {
    title: "Languages & Frontend",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "HTML / CSS", level: 90 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 82 },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "PyTorch", level: 82 },
      { name: "GANs / DCGAN / BigGAN", level: 88 },
      { name: "Gradio", level: 80 },
      { name: "Flask", level: 78 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Cloud, Data & Security",
    skills: [
      { name: "Oracle Cloud Infrastructure", level: 75 },
      { name: "AWS (Architecture Concepts)", level: 65 },
      { name: "MySQL / SQL / DBMS", level: 80 },
      { name: "Cybersecurity Foundations", level: 62 },
      { name: "GitHub", level: 85 },
    ],
  },
];

export const experience = [
  {
    title: "Administrative Secretary & Frontend Support Coordinator",
    org: "Zawia KSA · Saudi Arabia",
    duration: "Jul 2025 — Present",
    bullets: [
      "Manage daily administrative operations — document preparation, filing systems, correspondence and office records.",
      "Prepare reports, presentations, official letters, quotations and meeting minutes using Word, Excel, PowerPoint, Outlook and PDF tools; optimize UI performance, responsiveness and cross-browser compatibility.",
      "Coordinate meetings, schedules and travel arrangements across management, clients, vendors and internal teams.",
      "Support frontend web application activities using Vue.js, HTML, CSS and JavaScript when required by project teams.",
      "Assist with website content updates, UI testing, project documentation and technical/business stakeholder coordination.",
    ],
  },
  {
    title: "Frontend Developer (Intern)",
    org: "Design Webtech · Bengaluru, India",
    duration: "Jan 2025 — Jun 2025",
    bullets: [
      "Developed component-based, responsive user interfaces using Vue.js, HTML, CSS and JavaScript.",
      "Implemented routing, authentication and client-side validation for production-grade applications.",
      "Collaborated in code reviews, debugging and testing to improve UI performance and usability.",
      "Gained hands-on experience in an agile environment delivering real client work.",
    ],
  },
];

export const projects = [
  {
    id: "proj1",
    tag: "Deep Learning",
    title: "Enhanced Text-to-Image Flower Generator",
    summary:
      "Text-to-image synthesis system generating high-resolution flower images from text, comparing DCGAN and BigGAN architectures.",
    stack: ["PyTorch", "DCGAN", "BigGAN", "Flask", "Gradio", "Bootstrap"],
    overview:
      "An advanced text-to-image synthesis system that generates high-resolution flower images directly from textual descriptions.",
    problem:
      "Generating realistic, high-resolution images from text requires balancing model capacity, training stability and category diversity.",
    solution:
      "Trained a DCGAN across 5 flower categories and a BigGAN across 10 categories, tuning loss functions and hyperparameters to improve realism and training stability.",
    results: [
      "DCGAN: 89.2% accuracy across 5 flower categories",
      "BigGAN: 94.0% accuracy across 10 flower categories",
    ],
    interface:
      "Built a Flask-based web interface integrated with Gradio and Bootstrap for interactive model selection and live inference.",
    githubUrl: null, // add repo link if available
    liveUrl: null,
  },
  {
    id: "proj2",
    tag: "Web Development",
    title: "Wellness Center E-Commerce Platform",
    summary:
      "PHP–MySQL e-commerce web application for a wellness center specializing in herbal products, with a consultation subscription system.",
    stack: ["PHP", "MySQL", "Auth", "Cart & Orders"],
    overview:
      "A PHP–MySQL e-commerce application built for a wellness center specializing in herbal products.",
    features: [
      "Product listings and shopping cart",
      "Secure user authentication",
      "Order management",
      "Subscription system for consultation services with personalized session tracking",
    ],
    githubUrl: null,
    liveUrl: null,
  },
];

export const research = [
  {
    marker: "01",
    status: "Published · IEEE Xplore",
    title: "Text-to-Image GAN for Realistic Flower Image Synthesis Using Textual Input",
    venue: "IDCIoT 2025",
    url: "https://ieeexplore.ieee.org/document/10915099",
  },
  {
    marker: "02",
    status: "Published · ICISML 2026",
    title: "Gradio-Enabled Dual-Model Waste Classifier: From-Scratch CNN vs MobileNetV2",
    venue: "6th International Conference on Intelligent Systems and Machine Learning",
    url: null,
  },
  {
    marker: "03",
    status: "Accepted · IEEE",
    title: "Text-Guided Floral Image Synthesis Using BigGAN: A Comparative Evaluation with DCGAN",
    venue: "Comparative study of generative architectures",
    url: null,
  },
];

export const patents = [
  {
    marker: "P1",
    title: "Text to Flower Image Generation System",
    detail: "App No. 202541004974 A · Filed 22/01/2025 · Published 31/01/2025",
  },
  {
    marker: "P2",
    title: "Flower Image Generation System and Method Thereof",
    detail: "App No. 202541070082 A · Filed 23/07/2025 · Published 01/08/2025",
  },
  {
    marker: "P3",
    title: "A Dual-Model Smart Waste Classifier System",
    detail: "App No. 202541133604 A · Filed 30/12/2025 · Published 09/01/2026S",
  },
];

export const certifications = [
  { icon: "☁", title: "OCI 2025 Certified AI Foundations Associate", detail: "Oracle University · Oct 2025" },
  { icon: "☁", title: "AWS Solutions Architecture Job Simulation", detail: "Forage · Jul 2025" },
  { icon: "🔒", title: "Cybersecurity for Everyone", detail: "Foundational cybersecurity coursework" },
  { icon: "✦", title: "Microsoft Copilot for Productivity", detail: "Microsoft & LinkedIn Learning" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    org: "NMAM Institute of Technology, Nitte",
    duration: "2023 — 2025",
    detail: "CGPA: 8.87",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    org: "Alva's College, Moodbidri",
    duration: "2019 — 2022",
    detail: "CGPA: 7.15",
  },
];

export const faq = [
  {
    q: "Are you open to relocation?",
    a: "Yes — currently based in Riyadh, Saudi Arabia, and open to relocating for the right opportunity.",
  },
  {
    q: "What roles are you targeting?",
    a: "Frontend development, AI/ML & computer vision, and cloud/cybersecurity-adjacent engineering roles.",
  },
  {
    q: "Do you have publications?",
    a: "Yes — TWO IEEE Xplore publication, one paper accepted at ICISML 2026, and one under review, all on GAN-based image synthesis.",
  },
  {
    q: "Can I see your résumé?",
    a: "Use the \"Download Résumé\" button in the hero section, or reach out directly via the contact form below.",
  },
];

// Lightweight rule-based knowledge base for the chat assistant.
// Not a live LLM — keyword-matched against this data only.
export const chatKnowledge = {
  skills:
    "Rehan works across JavaScript, Vue.js, HTML/CSS, PHP and Python on the frontend, PyTorch/GANs (DCGAN, BigGAN) in AI/ML, and MySQL, Oracle Cloud Infrastructure and AWS concepts on the data/cloud side.",
  experience:
    "He's currently an Administrative Secretary & Frontend Support Coordinator at Zawia KSA (Jul 2025–present), and previously interned as a Frontend Developer at Design Webtech in Bengaluru (Jan–Jun 2025).",
  projects:
    "Two flagship projects: a DCGAN/BigGAN text-to-image flower generator (94% accuracy with BigGAN), and a PHP/MySQL wellness-center e-commerce platform.",
  education:
    "MCA from NMAM Institute of Technology, Nitte (2023–2025, CGPA 8.87), and BCA from Alva's College, Moodbidri (2019–2022, CGPA 7.15).",
  research:
    "TWO IEEE Xplore publication, one paper accepted at ICISML 2026, one under review — plus multiple Indian patent filings on flower image generation systems.",
  contact:
    "Reach Mohammad Rehan at mohorehan@gmail.com, +966 50 702 1474, or via LinkedIn (mdrehan474) and GitHub (rehan474).",
  location: "Based in Riyadh, Saudi Arabia — open to relocation.",
  resume: "Use the 'Download Résumé' button at the top of the page, or ask via the contact form.",
};
