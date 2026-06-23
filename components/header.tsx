'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Copy, Check, Sun, Moon } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('mirajulislam76779@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              <button
                onClick={handleCopyEmail}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  "Let's Talk"
                )}
              </button>
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
            <li>
              <button
                onClick={() => {
                  handleCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className="block w-full px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium text-center transition-all"
              >
                {copied ? 'Email Copied!' : "Let's Talk"}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}


