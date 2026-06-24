'use client';

import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('mirajulislam76779@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-16 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 dark:hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest animate-fade-in-up opacity-0">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight animate-fade-in-up delay-100 opacity-0">
                Hi, I&apos;m Mirajul Islam
              </h1>
              <p className="text-2xl font-semibold text-slate-700 animate-fade-in-up delay-200 opacity-0">
                React Native Developer
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed animate-fade-in-up delay-300 opacity-0">
              I craft beautiful, high-performance mobile applications for iOS and Android. With 3 years of experience, I&apos;ve built production-ready apps that serve thousands of users and generate millions in transactions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4 animate-fade-in-up delay-400 opacity-0">
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">React Native</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">TypeScript</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">JavaScript (ES6+)</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">Expo</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">iOS & Android</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">Redux / Redux Toolkit</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">Firebase</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">Amazon Web Services (AWS)</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">REST APIs</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">Tailwind CSS</span>
              </div>
              <div className="px-4 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-medium text-slate-700">Git / GitHub</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-500 opacity-0">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                download="Mirajul_Islam_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
              <a
                href="https://github.com/MirazRatul"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-lg text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/md-mirajul-islam-a305a840b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-lg text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-3 bg-slate-100 rounded-lg text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="Email"
                title="Copy email to clipboard"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[360px] aspect-square mx-auto md:ml-auto animate-slide-in-right opacity-0 delay-200 group">
            {/* Glowing background blobs */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"></div>
            
            {/* Rotating dashed ring */}
            <div className="absolute -inset-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>

            {/* Inner Image Container */}
            <div className="relative w-full h-full p-1 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/profile.jpg"
                  alt="Mirajul Islam"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Inner ring overlay */}
                <div className="absolute inset-1 border border-white/25 rounded-full pointer-events-none z-10"></div>
              </div>
            </div>

            {/* Floating Specialty Badge (Top-Left) */}
            <div className="absolute -top-3 -left-3 backdrop-blur-md bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300 select-none animate-[bounce_4s_infinite]">
              <span className="text-lg">📱</span>
              <div className="flex flex-col pr-1">
                <span className="text-[9px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider leading-none">Specialty</span>
                <span className="text-xs font-bold text-slate-800 dark:text-white leading-tight">App Development</span>
              </div>
            </div>

            {/* Floating Availability Badge (Bottom-Right) */}
            <div className="absolute -bottom-3 -right-3 backdrop-blur-md bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2.5 hover:scale-105 transition-transform duration-300 select-none animate-[bounce_4s_infinite_1.5s]">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <div className="flex flex-col pr-1">
                <span className="text-[9px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider leading-none">Status</span>
                <span className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Available for Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

