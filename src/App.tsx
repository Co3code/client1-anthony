/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Instagram, 
  Facebook, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  ChevronRight,
  Send,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    description: "A real-time environmental monitoring dashboard built for a school sustainability project.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind", "D3.js"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "PixelCraft Editor",
    description: "A browser-based sprite editor for game developers, featuring layer support and export options.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Canvas API", "Redux"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "StudySync Mobile",
    description: "Collaborative note-taking app designed to help students organize group projects efficiently.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase", "Node.js"],
    github: "#",
    demo: "#"
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Lead Developer",
    organization: "Senior Capstone Project",
    period: "2024 - Present",
    description: "Architecting a full-stack web application for local community engagement. Managing a team of 4 students."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    organization: "Web Design Workshop",
    period: "2023",
    description: "Developed high-fidelity prototypes for a mobile health tracking app. Focused on accessibility and user flow."
  },
  {
    id: 3,
    title: "Frontend Contributor",
    organization: "Open Source School Initiative",
    period: "2022",
    description: "Contributed to the development of the school's internal resource portal using modern React patterns."
  }
];

const SKILLS = [
  { name: "Frontend", icon: <Code2 size={20} />, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend", icon: <Terminal size={20} />, items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { name: "Design", icon: <Palette size={20} />, items: ["Figma", "UI/UX Principles", "Motion Design", "Adobe CC"] },
  { name: "Tools", icon: <Cpu size={20} />, items: ["Git", "Docker", "Vite", "Linux"] }
];

/// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 px-8 py-4 flex justify-between items-center transition-all duration-300">
      <div className="text-3xl font-cursive gradient-text tracking-normal">Anthony</div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-normal text-zinc-400 hover:text-emerald-400 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold hover:text-emerald-400"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 max-w-2xl text-lg leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1.5 w-24 bg-emerald-500 mt-6 rounded-full" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              Available for Freelance
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
              Hi, I'm <br /><span className="gradient-text">Anthony</span>
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-300 mb-8 font-light tracking-tight">
              Creative Developer & <br />Digital Builder
            </p>
            <p className="text-zinc-500 max-w-lg mb-12 text-lg leading-relaxed">
              I specialize in crafting high-performance digital experiences. Check out my latest app below!
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#projects" 
                className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black font-black rounded-2xl transition-all glow text-lg uppercase tracking-tighter"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-all text-lg"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-lg mx-auto rounded-[40px] overflow-hidden border-4 border-white/5 shadow-2xl">
              {/* 
                IMAGE FOLDER: /public/images/
                REPLACE: /public/images/profile.jpg 
              */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Anthony" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-4 border-r-4 border-emerald-500/30 rounded-tr-[60px]" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-4 border-l-4 border-violet-500/30 rounded-bl-[60px]" />
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="download" className="py-32 bg-emerald-500/5 border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-emerald-500 font-black uppercase tracking-[0.2em] mb-4">Featured Application</div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Experience the <br /><span className="gradient-text">Next Generation</span> of Productivity.
              </h2>
              <p className="text-zinc-400 text-xl mb-10 leading-relaxed">
                My latest mobile application designed to streamline your workflow. Built with React Native and high-performance backend systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-black rounded-2xl font-bold hover:bg-emerald-600 transition-all glow">
                  <Terminal size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase opacity-60 leading-none">Direct Download</div>
                    <div className="text-lg leading-none">Download APK</div>
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* App Mockup Photo */}
              <div className="relative z-10 glass p-4 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="rounded-[2.5rem] overflow-hidden border-8 border-zinc-900 aspect-[9/19] max-w-[320px] mx-auto">
                  {/* 
                    IMAGE FOLDER: /public/images/
                    REPLACE: /public/images/app-mockup.jpg 
                  */}
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" 
                    alt="App Mockup" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-8">
          <SectionHeading 
            title="About Me" 
            subtitle="I'm a student developer with a passion for building things that live on the internet. My journey started with curiosity and has evolved into a dedicated pursuit of engineering excellence."
          />
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-zinc-400 text-lg">
              <p className="leading-relaxed">
                As a student, I've spent my time diving deep into the world of web technologies. I love the challenge of taking a complex problem and breaking it down into an elegant, user-friendly solution.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to student-led projects, or experimenting with emerging tech like AI and creative coding.
              </p>
              <div className="flex gap-10 pt-6">
                <div className="text-left">
                  <div className="text-4xl font-bold text-white">15+</div>
                  <div className="text-xs uppercase font-black tracking-widest text-emerald-500 mt-1">Projects</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-white">3+</div>
                  <div className="text-xs uppercase font-black tracking-widest text-emerald-500 mt-1">Years</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-white">100%</div>
                  <div className="text-xs uppercase font-black tracking-widest text-emerald-500 mt-1">Passion</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {SKILLS.map((skill, idx) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass rounded-3xl hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                  <ul className="text-sm space-y-2 text-zinc-500">
                    {skill.items.map(item => <li key={item} className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full" />{item}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-zinc-950/30">
        <div className="container mx-auto px-8">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent school and personal projects where I've applied my skills to solve real-world problems."
          />

          <div className="grid md:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass rounded-[40px] overflow-hidden hover:border-emerald-500/50 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* 
                    IMAGE FOLDER: /public/images/
                    REPLACE: /public/images/project-{id}.jpg 
                  */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4">
                      <a href={project.demo} className="p-3 bg-white text-black rounded-2xl hover:bg-emerald-500 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.github} className="p-3 bg-white text-black rounded-2xl hover:bg-emerald-500 transition-colors">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-black tracking-widest px-3 py-1.5 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="container mx-auto px-8">
          <SectionHeading 
            title="My Journey" 
            subtitle="My path through education and collaborative projects that have shaped my technical foundation."
          />

          <div className="max-w-4xl mx-auto space-y-16 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-white/10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#0a0a0a] z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                
                <div className="md:w-1/2 pl-10 md:pl-0">
                  <div className={`glass p-10 rounded-[40px] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-4 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-emerald-400 font-medium mb-6">{exp.organization}</p>
                    <p className="text-zinc-500 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto glass rounded-[60px] overflow-hidden grid md:grid-cols-2">
            <div className="p-16 bg-emerald-500 text-black">
              <h2 className="text-5xl font-display font-bold mb-8 leading-tight">Let's build something amazing together.</h2>
              <p className="text-black/70 mb-16 text-xl leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-black/10 rounded-2xl"><Mail size={32} /></div>
                  <div>
                    <div className="text-xs uppercase font-black opacity-40 tracking-widest">Email Me</div>
                    <div className="text-xl font-bold">anthony@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-black/10 rounded-2xl"><Github size={32} /></div>
                  <div>
                    <div className="text-xs uppercase font-black opacity-40 tracking-widest">GitHub</div>
                    <div className="text-xl font-bold">github.com/anthony</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mt-20">
                <a href="#" className="p-4 bg-black/10 rounded-full hover:bg-black/20 transition-colors"><Instagram size={24} /></a>
                <a href="#" className="p-4 bg-black/10 rounded-full hover:bg-black/20 transition-colors"><Facebook size={24} /></a>
              </div>
            </div>

            <div className="p-16">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-black mb-3">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-black mb-3">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 font-black mb-3">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>
                <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-black font-black rounded-2xl transition-all flex items-center justify-center gap-3 group text-lg uppercase tracking-tighter">
                  Send Message
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-4xl font-cursive gradient-text tracking-normal">Anthony</div>
          <div className="text-zinc-500 font-medium">
            © {new Date().getFullYear()} Anthony. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

