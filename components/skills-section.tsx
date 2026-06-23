'use client';

import { Braces, Cloud, Code2, Database, Layers, Smartphone, Workflow } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Production-grade cross-platform apps with polished native behavior.',
    skills: ['React Native', 'Expo', 'React Navigation', 'iOS', 'Android'],
  },
  {
    title: 'Frontend Engineering',
    icon: Code2,
    description: 'Typed, component-driven interfaces built for speed and maintainability.',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'State & Architecture',
    icon: Layers,
    description: 'Reusable app patterns that keep features predictable as products grow.',
    skills: ['Redux Toolkit', 'Context API', 'Hooks', 'Clean Architecture', 'Reusable UI'],
  },
  {
    title: 'Backend Integration',
    icon: Braces,
    description: 'Reliable data flows between mobile clients, APIs, and backend services.',
    skills: ['REST APIs', 'Axios', 'Firebase Auth', 'Firestore', 'Push Notifications'],
  },
  {
    title: 'Cloud & Data',
    icon: Cloud,
    description: 'Cloud-backed features, storage, and transactional app workflows.',
    skills: ['AWS', 'DynamoDB', 'Firebase', 'Cloud Storage', 'Analytics'],
  },
  {
    title: 'Workflow',
    icon: Workflow,
    description: 'Team-ready delivery habits from version control to app releases.',
    skills: ['Git', 'Code Review', 'Agile', 'App Store', 'Play Store'],
  },
];

const coreStrengths = [
  { label: 'React Native', value: '92%' },
  { label: 'TypeScript', value: '88%' },
  { label: 'Firebase', value: '84%' },
  { label: 'REST API Integration', value: '90%' },
];

export function SkillsSection() {
  const { ref, isRevealed } = useScrollReveal(0.05);

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-20 px-6 bg-white transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          <p className="mt-6 max-w-3xl text-xl text-slate-700 leading-relaxed font-light">
            A focused toolkit for building fast, reliable mobile products from interface to release.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">
          <div className="border-2 border-slate-200 rounded-lg p-6 bg-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Core Strengths</h3>
            </div>

            <div className="space-y-7">
              {coreStrengths.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-semibold text-slate-800">{skill.label}</span>
                    <span className="text-sm font-semibold text-blue-600">{skill.value}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                      style={{ width: skill.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="border-2 border-slate-200 rounded-lg p-5 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-blue-100 rounded-lg">
                    <group.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{group.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
