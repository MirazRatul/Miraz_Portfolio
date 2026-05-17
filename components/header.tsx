'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Copy, Check } from 'lucide-react';

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


