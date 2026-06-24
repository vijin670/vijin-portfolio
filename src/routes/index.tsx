import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, ArrowUpRight, Sparkles, Brain, Database, Code2, Cpu, GraduationCap, Award, Trophy, Camera, Film, Clapperboard, Menu, X as XClose } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
  </svg>
);
const Pinterest = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.17-.11-.95-.2-2.4.04-3.43.22-.94 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.02-.28 1.2.6 2.18 1.79 2.18 2.15 0 3.8-2.27 3.8-5.55 0-2.9-2.08-4.93-5.06-4.93-3.45 0-5.47 2.58-5.47 5.25 0 1.04.4 2.16.9 2.77.1.12.11.22.08.34-.09.36-.29 1.18-.33 1.35-.05.22-.17.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.75-7.25 7.92-7.25 4.16 0 7.39 2.96 7.39 6.93 0 4.13-2.6 7.45-6.22 7.45-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.34-1.49 3.13C9.57 23.85 10.76 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0Z"/>
  </svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const XSocial = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.937l-5.43-7.106L4.4 22H1.142l8.02-9.166L1 2h7.094l4.91 6.49L18.244 2Zm-2.43 18h1.92L7.27 4H5.21l10.604 16Z"/>
  </svg>
);
import portrait from "@/assets/vijin-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vijin Ajai V — AI & ML Engineer" },
      { name: "description", content: "Portfolio of Vijin Ajai V — Computer Science undergrad building AI-powered systems across healthcare, finance and IoT." },
      { property: "og:title", content: "Vijin Ajai V — AI & ML Engineer" },
      { property: "og:description", content: "Portfolio of Vijin Ajai V — building AI-powered systems across healthcare, finance and IoT." },
    ],
  }),
  component: Index,
});

const skills = [
  "Python", "Machine Learning", "Deep Learning", "NLP", "FastAPI",
  "PostgreSQL", "MongoDB", "JavaScript", "C++", "SQL",
  "Groq / LLaMA 3", "Gradio", "React", "Prisma", "Gemini AI",
];

const SOCIALS = [
  { Icon: Github, href: "https://github.com/vijin670", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/vijinajaivinoth/", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:vijin670@gmail.com", label: "Email" },
  { Icon: Phone, href: "tel:+919360179366", label: "Phone" },
  { Icon: Pinterest, href: "https://in.pinterest.com/vvijin670/", label: "Pinterest" },
  { Icon: Instagram, href: "https://www.instagram.com/vcaptures.lr/", label: "Instagram" },
  { Icon: XSocial, href: "https://x.com/nx9_hunter", label: "X" },
];

const HELLOS = [
  { lang: "English", text: "Hello World!" },
  { lang: "தமிழ்", text: "வணக்கம் உலகம்!" },
  { lang: "हिन्दी", text: "नमस्ते दुनिया!" },
  { lang: "Français", text: "Bonjour le monde!" },
  { lang: "Español", text: "¡Hola Mundo!" },
  { lang: "日本語", text: "こんにちは世界!" },
];

type Project = {
  name: string;
  tag: string;
  desc: string;
  long?: string;
  stack: string[];
  url: string;
  highlights?: string[];
  role?: string;
  year?: string;
};

const projects: Project[] = [
  {
    name: "Rural Health AI",
    tag: "Healthcare · LLM",
    desc: "Multilingual symptom triage assistant for rural users. Voice + text in Indian languages, powered by Groq's LLaMA 3, with severity assessment and nearby healthcare center lookup.",
    long: "Built end-to-end as a triage helper for low-connectivity rural settings. Combines a Whisper-based voice front-end with a Groq-hosted LLaMA 3 reasoning core and a curated symptom ontology. Outputs include severity score, red-flag escalation, and a map of the nearest PHCs.",
    role: "ML + Backend",
    year: "2025",
    stack: ["LLaMA 3", "Groq", "FastAPI", "Multilingual NLP"],
    url: "https://github.com/vijin670/RuralHealthAI",
    highlights: [
      "Voice + text input in 6 Indian languages",
      "Severity scoring with red-flag escalation",
      "Nearby PHC / hospital lookup via geolocation",
    ],
  },
  {
    name: "UniTutor",
    tag: "EdTech · Full-Stack",
    desc: "AI-powered academic assistance & university management platform with role-based auth, schedule management and an intelligent chatbot for academic queries.",
    long: "A campus operating layer: students get a Gemini-powered Q&A chat trained on their course material, faculty manage classes and attendance, and admins control roles. Built on Express + Prisma with a React front-end.",
    role: "Full-Stack Lead",
    year: "2025",
    stack: ["React", "Express", "Prisma", "Gemini AI", "SQLite"],
    url: "https://github.com/vijin670/UniTutor",
    highlights: [
      "Role-based auth for students, faculty & admins",
      "Gemini-powered Q&A over course material",
      "Timetable, attendance & assignment tracking",
    ],
  },
  {
    name: "AI Personal Finance Tracker",
    tag: "FinTech · Gamification",
    desc: "Intelligent finance manager with AI-driven budgeting, savings recommendations and expense tracking. 97% model accuracy with gamification to drive discipline.",
    long: "Classifies transactions with 97% accuracy, models spend patterns, and serves personalised savings nudges. Gamification layer adds streaks and XP so behaviour change actually sticks.",
    role: "ML + Product",
    year: "2025",
    stack: ["Python", "ML", "Gamification"],
    url: "https://github.com/vijin670",
    highlights: [
      "97% accuracy on spend-category classification",
      "Personalised savings & budget recommendations",
      "Streaks + XP system to reinforce discipline",
    ],
  },
  {
    name: "Satellite Super-Resolution",
    tag: "Computer Vision · CNN",
    desc: "Deep learning–based satellite image super-resolution. Enhances low-resolution imagery into high-quality outputs with a live Gradio demo. (Klymo Ascent 1.0)",
    long: "A CNN upscaler trained on satellite tiles that recovers structure from low-resolution inputs. Shipped with a live Gradio demo for side-by-side comparison. Finalist at Klymo Ascent 1.0.",
    role: "Deep Learning",
    year: "2024",
    stack: ["PyTorch", "CNN", "Gradio"],
    url: "https://github.com/vijin670/Satellite-Super-Resolution-Klymo-Ascent",
    highlights: [
      "CNN upscaler trained on satellite tiles",
      "Live Gradio demo for instant comparison",
      "Built for Klymo Ascent 1.0 challenge",
    ],
  },
  {
    name: "Water Quality Prediction",
    tag: "Sustainability · AICTE",
    desc: "ML model analyzing pollutant data for clean-water sustainability. Built during the AICTE Virtual Internship on AI & Data Analytics, with real-world testing.",
    long: "Regression pipeline over real sensor data predicting pollutant load and source-health. Includes EDA dashboards for water bodies and a deployable inference script. Built under AICTE AI & Data Analytics internship.",
    role: "Data Science",
    year: "2024",
    stack: ["Python", "scikit-learn", "EDA"],
    url: "https://github.com/vijin670",
    highlights: [
      "Pollutant-level regression on real sensor data",
      "EDA dashboards for water-source health",
      "Built during AICTE AI & Data Analytics internship",
    ],
  },
  {
    name: "Internizer",
    tag: "Platform · WIP",
    desc: "A platform in development to help students discover and land relevant internships, with smart matching and tracking.",
    long: "Matches student skills to live internship listings, then tracks each application through a status timeline. Currently iterating on the matching model and recruiter dashboard.",
    role: "Founder · Eng",
    year: "2025",
    stack: ["React", "Node", "AI Matching"],
    url: "https://github.com/vijin670/INTERNIZER",
    highlights: [
      "Smart skill-to-role matching engine",
      "Application tracker with status timeline",
      "Currently in active development",
    ],
  },
];

const stats = [
  { value: "8.0", label: "CGPA / 10" },
  { value: "500K+", label: "Pinterest monthly views" },
  { value: "97%", label: "Best model accuracy" },
  { value: "6+", label: "Shipped projects" },
];

const education = [
  {
    school: "SRM University, Trichy",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2023 — 2027",
    detail: "CGPA 8.0 / 10 · Coursework in AI, ML, DBMS, OS & Data Structures.",
  },
  {
    school: "The Rajas International School, Nagercoil",
    degree: "Higher Secondary (CBSE, PCM + CS)",
    period: "2021 — 2023",
    detail: "Computer Science stream · School topper in programming electives.",
  },
];

const certifications = [
  { name: "AICTE Virtual Internship — AI & Data Analytics", issuer: "AICTE · Edunet Foundation", year: "2024" },
  { name: "Machine Learning Internship", issuer: "Industry training program", year: "2024" },
  { name: "Data Science Internship", issuer: "Industry training program", year: "2024" },
  { name: "Python for Data Science", issuer: "NPTEL", year: "2023" },
  { name: "Supervised Machine Learning", issuer: "Coursera · DeepLearning.AI", year: "2024" },
  { name: "SQL (Intermediate)", issuer: "HackerRank", year: "2023" },
];

const achievements = [
  {
    title: "Klymo Ascent 1.0 — Finalist",
    body: "Built a CNN-based satellite super-resolution pipeline shortlisted in the national-level innovation challenge.",
  },
  {
    title: "97% model accuracy on Finance Tracker",
    body: "Tuned and validated an ML pipeline achieving 97% accuracy on real-world expense categorisation.",
  },
  {
    title: "Two completed internships before graduation",
    body: "Shipped production-grade ML and data-science work during AICTE and industry internships in CS Year 2.",
  },
  {
    title: "6+ shipped projects on GitHub",
    body: "Maintains an active portfolio of full-stack and AI projects across healthcare, fintech and sustainability.",
  },
];

function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2">
      <span className="v-logo">V</span>
      <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
        vijin.ajai
      </span>
    </a>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#creative", label: "Creative" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 rounded-full border border-border bg-card/60 px-6 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="transition hover:text-foreground" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-neon-glow"
        >
          <Menu className="h-3.5 w-3.5" /> Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col px-5 py-6 sm:px-8">
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  <XClose className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-12 grid flex-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      className="group flex items-baseline gap-4 border-b border-border py-4 font-display text-4xl font-bold uppercase tracking-tight text-foreground transition hover:text-primary sm:text-6xl"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="transition group-hover:translate-x-2">{l.label}</span>
                      <ArrowUpRight className="ml-auto h-6 w-6 opacity-0 transition group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </nav>
                <div className="flex flex-col justify-end gap-6 pb-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Reach out</p>
                    <a href="mailto:vijin670@gmail.com" className="mt-2 block font-display text-2xl text-foreground hover:text-primary">vijin670@gmail.com</a>
                    <a href="tel:+919360179366" className="mt-1 block font-mono text-sm text-muted-foreground hover:text-primary">+91 93601 79366</a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SOCIALS.map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={label}
                        className="grid h-11 w-11 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 hero-radial" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,420px)_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto w-full max-w-sm"
        >
          <div className="clip-hero relative aspect-[4/5] w-full overflow-hidden bg-card neon-ring">
            <img
              src={portrait}
              alt="Vijin Ajai V"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-md bg-background/70 px-3 py-2 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/90">
              <div className="flex items-center justify-between">
                <span>// vijin_ajai_v</span>
                <span className="text-primary">● online</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-muted-foreground">
                <span>Trichy, India</span>
                <span>v 1.0</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rotate-[-4deg] rounded-md border border-border bg-card px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            cs · srm trichy · '27
          </div>
        </motion.div>

        <div className="relative">
          <HelloRotator />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight sm:text-8xl lg:text-[6.5rem]"
          >
            <span className="block">VIJIN</span>
            <span className="block">
              AJAI <span className="text-primary text-glow">V.</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A Computer Science undergrad shipping AI-powered systems across
            healthcare, finance and IoT — obsessed with model accuracy, clean
            data pipelines and tools that actually help people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-neon-glow"
            >
              My Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10"
            >
              About Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HelloRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % HELLOS.length), 1800);
    return () => clearInterval(id);
  }, []);
  const current = HELLOS[i];
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
      <span className="text-primary">✦</span>
      <span className="relative inline-block h-5 min-w-[180px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.lang}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 whitespace-nowrap"
          >
            {current.text} <span className="text-muted-foreground/70">/ {current.lang}</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}

function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="preloader-shell fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 hero-radial" />
      <div className="relative flex flex-col items-center gap-6">
        <svg
          viewBox="0 0 784 780"
          className="h-64 w-64 sm:h-80 sm:w-80 drop-shadow-[0_0_30px_color-mix(in_oklab,var(--neon)_60%,transparent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="miter"
          strokeLinecap="square"
          style={{ color: "var(--neon)" }}
        >
          {/* Outer V */}
          <polyline className="v-path v-p1" points="20,30 280,150 392,720 504,150 764,30" />
          {/* Inner diamond / inner V */}
          <polyline className="v-path v-p2" points="280,150 392,560 504,150" />
          <polyline className="v-path v-p3" points="305,565 392,755 479,565" />
        </svg>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span className="h-px w-10 bg-primary/40" />
          Vijin Ajai V.
          <span className="h-px w-10 bg-primary/40" />
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const row = [
    "Python", "TensorFlow", "PyTorch", "FastAPI", "LLaMA 3", "Groq",
    "PostgreSQL", "MongoDB", "Prisma", "React", "Gemini", "NLP", "scikit-learn", "Gradio",
  ];
  const items = [...row, ...row];
  return (
    <section className="relative border-y border-border bg-card/40 py-6">
      <div className="no-scrollbar overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
          {items.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              <span className="transition hover:text-primary">{s}</span>
              <span className="text-primary/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ About me</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Building <span className="font-serif italic text-primary">intelligent</span> systems that solve real problems.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a CS undergrad at SRM University Trichy (Class of 2027), spending
              most of my time in notebooks and IDEs — training models, wiring up
              APIs, and turning ML research into things people can actually use.
            </p>
            <p>
              My work spans <span className="text-foreground">healthcare triage</span>,
              {" "}<span className="text-foreground">finance gamification</span>,
              {" "}<span className="text-foreground">satellite imagery</span>, and
              {" "}<span className="text-foreground">water-quality sustainability</span>.
              I&apos;ve completed internships in ML, Data Science, and AI Analytics
              (AICTE), and I&apos;m always shipping something new.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-8">
              <div className="font-display text-4xl font-semibold text-primary text-glow sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const focusItems = [
  { Icon: Brain, title: "Machine Learning", body: "Classification, prediction, feature engineering, evaluation with precision / recall." },
  { Icon: Sparkles, title: "Generative AI", body: "LLM-backed assistants with LLaMA 3, Groq and Gemini — RAG, tool-use, multilingual." },
  { Icon: Database, title: "Data & Backends", body: "FastAPI, Prisma, PostgreSQL, MongoDB, JWT auth, clean pipelines, fast iteration." },
  { Icon: Cpu, title: "Deep Learning", body: "CNNs for vision tasks — satellite super-resolution and image-quality modeling." },
  { Icon: Code2, title: "Full-Stack", body: "React + Express, role-based platforms, real-time chatbots, and production deploys." },
];

function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ Focus areas</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Focusing on the <span className="font-serif italic text-primary">best.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A snapshot of the tools, models and domains I reach for when building
            things end-to-end.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusItems.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-primary/60"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition group-hover:bg-primary/20" />
              <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="relative mt-6 font-display text-xl font-medium">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projects" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              My <span className="font-serif italic text-primary">projects.</span>
            </h2>
          </div>
          <a
            href="https://github.com/vijin670"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            All on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.button
              key={p.name}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 text-left transition hover:border-primary/60"
            >
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-0 transition group-hover:opacity-30" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{p.tag}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p className="relative mt-6 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              {p.highlights && (
                <ul className="relative mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl border-border bg-card">
        {project && (
          <>
            <DialogHeader>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{project.tag}</p>
              <DialogTitle className="font-display text-3xl font-bold tracking-tight">{project.name}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                {project.long ?? project.desc}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 border-y border-border py-4 font-mono text-[10px] uppercase tracking-[0.2em]">
              <div>
                <div className="text-muted-foreground">Role</div>
                <div className="mt-1 text-foreground">{project.role ?? "Builder"}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Year</div>
                <div className="mt-1 text-foreground">{project.year ?? "—"}</div>
              </div>
            </div>
            {project.highlights && (
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-neon-glow"
            >
              View on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

const creative = [
  {
    Icon: Camera,
    role: "Photographer",
    title: "Light, story, frame.",
    body: "Street, portrait & lifestyle photography. Building a Pinterest archive with 500K+ monthly viewers — published as @vcaptures.lr on Instagram.",
    tags: ["Portrait", "Street", "Lifestyle"],
  },
  {
    Icon: Film,
    role: "Editor",
    title: "Cuts that feel inevitable.",
    body: "Photo color-grading and short-form video edits. Lightroom + Premiere Pro workflows tuned for cinematic, moody tones.",
    tags: ["Lightroom", "Premiere", "Color"],
  },
  {
    Icon: Clapperboard,
    role: "Cinematographer",
    title: "Frames with weight.",
    body: "Camera, composition and lighting for short films and travel reels. Comfortable shooting handheld or gimbal-stabilized, day or night.",
    tags: ["Composition", "Lighting", "B-roll"],
  },
];

function Creative() {
  return (
    <section id="creative" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ Beyond code</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
              The <span className="font-serif italic font-normal normal-case text-primary">creative</span> side.
            </h2>
          </div>
          <a
            href="https://in.pinterest.com/vvijin670/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10"
          >
            500K+ monthly on Pinterest <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {creative.map(({ Icon, role, title, body, tags }, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-primary/60"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition group-hover:bg-primary/20" />
              <div className="relative flex items-center justify-between">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{role}</span>
              </div>
              <h3 className="relative mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ Education & credentials</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Learning <span className="font-serif italic font-normal normal-case text-primary">never stops.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" /> Education
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{e.school}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/80">{e.degree}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <Award className="h-4 w-4 text-primary" /> Certifications
            </div>
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-4 p-5 transition hover:bg-primary/5">
                  <div>
                    <div className="font-display text-sm font-medium text-foreground">{c.name}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.issuer}</div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ Achievements</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Milestones <span className="font-serif italic font-normal normal-case text-primary">worth shipping.</span>
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-primary/60"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition group-hover:bg-primary/20" />
              <Trophy className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="relative mt-5 font-display text-lg font-semibold">{a.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-28">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="absolute inset-0 hero-radial opacity-60" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">✦ Let&apos;s talk</p>
        <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          Got an idea?{" "}
          <span className="font-serif italic text-primary text-glow">Let&apos;s build it.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Open to internships, research collaborations and freelance ML / full-stack
          work. The fastest way to reach me is email.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:vijin670@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-neon-glow"
          >
            <Mail className="h-4 w-4" /> vijin670@gmail.com
          </a>
          <a
            href="tel:+919360179366"
            className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10"
          >
            <Phone className="h-4 w-4" /> +91 93601 79366
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="v-logo" style={{ height: "1.75rem", width: "1.75rem", fontSize: "0.95rem" }}>V</span>
          © {new Date().getFullYear()} Vijin Ajai V
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Built with care · Trichy, IN
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Creative />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
