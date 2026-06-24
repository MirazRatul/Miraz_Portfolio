'use client';

import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

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

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-20 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Let&apos;s Work Together</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
            I&apos;m always interested in hearing about new opportunities, collaborations, and innovative projects. Let&apos;s connect and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => {
                if (link.type === 'email') {
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${link.href}`, '_blank');
                } else if (link.type === 'link') {
                  window.open(link.href, '_blank');
                }
              }}
              className="group p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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



        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-500 text-sm font-medium">
            Available for: Full-time positions • Contract work • Freelance projects • Technical consultation
          </p>
        </div>
      </div>
    </section>
  );
}
