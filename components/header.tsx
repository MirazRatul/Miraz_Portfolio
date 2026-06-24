'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, MessageSquare } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            MI
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {mounted && (
              <li>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Toggle theme"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            )}
            <li>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/8801937153621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-sm"
                >
                  <MessageSquare size={16} className="fill-current" />
                  WhatsApp
                </a>
                <a
                  href="tel:+8801937153621"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-sm"
                >
                  <Phone size={16} />
                  Call Me
                </a>
              </div>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-6 pb-6 flex flex-col gap-4 border-t border-slate-200 pt-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {mounted && (
              <li className="flex justify-between items-center py-2 border-t border-slate-100 mt-2 pt-4">
                <span className="text-sm font-medium text-slate-700">Theme</span>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 bg-slate-100 text-slate-700 rounded-lg transition-colors cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            )}
            <li className="grid grid-cols-2 gap-3 mt-2 border-t border-slate-100 dark:border-slate-800 pt-4">
              <a
                href="https://wa.me/8801937153621"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-center transition-all shadow-sm cursor-pointer text-sm"
              >
                <MessageSquare size={16} className="fill-current" />
                WhatsApp
              </a>
              <a
                href="tel:+8801937153621"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium text-center transition-all shadow-sm cursor-pointer text-sm"
              >
                <Phone size={16} />
                Call Me
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}


