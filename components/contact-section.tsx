'use client';

import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mirajulislam76779@gmail.com',
    icon: Mail,
    handle: 'mirajulislam76779@gmail.com',
    color: 'bg-red-50 hover:bg-red-100 text-red-600',
    iconColor: 'text-red-600',
    type: 'email',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MirazRatul',
    icon: Github,
    handle: '@MirazRatul',
    color: 'bg-gray-50 hover:bg-gray-100 text-gray-600',
    iconColor: 'text-gray-600',
    type: 'link',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/md-mirajul-islam-a305a840b',
    icon: Linkedin,
    handle: 'md-mirajul-islam',
    color: 'bg-blue-50 hover:bg-blue-100 text-blue-600',
    iconColor: 'text-blue-600',
    type: 'link',
  },
];

export function ContactSection() {
  const { ref, isRevealed } = useScrollReveal(0.05);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMain, setCopiedMain] = useState(false);

  const handleCopyEmail = async (email) => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyMainEmail = async () => {
    await navigator.clipboard.writeText('mirajulislam76779@gmail.com');
    setCopiedMain(true);
    setTimeout(() => setCopiedMain(false), 2000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            I&apos;m always interested in hearing about new opportunities, collaborations, and innovative projects. Let&apos;s connect and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => {
                if (link.type === 'email') {
                  handleCopyEmail(link.href);
                } else if (link.type === 'link') {
                  window.open(link.href, '_blank');
                }
              }}
              className={`group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-lg ${link.color} transition-colors`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{link.name}</h3>
              <p className="text-sm text-slate-600">{link.handle}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleCopyMainEmail}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {copiedMain ? (
              <>
                <Check size={20} /> Email Copied!
              </>
            ) : (
              <>
                <Copy size={20} /> Get In Touch
              </>
            )}
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-white/80 text-sm">
            Available for: Full-time positions • Contract work • Freelance projects • Technical consultation
          </p>
        </div>
      </div>
    </section>
  );
}
