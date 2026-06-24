'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-200 border-t border-slate-200 dark:border-slate-900 pt-16 pb-12 px-6">
      {/* Decorative top border gradient line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Brand/Bio Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Mirajul Islam
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              React Native Developer specializing in building beautiful, high-performance mobile applications for iOS and Android. Let&apos;s create something amazing together.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/MirazRatul"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:text-white transition-all duration-200 text-slate-600 dark:text-slate-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/md-mirajul-islam-a305a840b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:text-white transition-all duration-200 text-slate-600 dark:text-slate-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mirajulislam76779@gmail.com"
                className="p-2.5 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:text-white transition-all duration-200 text-slate-600 dark:text-slate-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-300 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-300 uppercase tracking-widest mb-4">Focus Areas</h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>React Native Development</li>
              <li>iOS & Android Apps</li>
              <li>Full-Stack Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            &copy; {currentYear} Mirajul Islam. All rights reserved. • Built with React &amp; Next.js.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 dark:text-slate-400 dark:hover:text-white dark:border-slate-800 rounded-lg text-xs font-medium transition-all duration-200 shadow-md cursor-pointer"
          >
            Back to top 
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
