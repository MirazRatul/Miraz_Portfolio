'use client';

import { Code2, Zap, GitBranch, Users } from "lucide-react";
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building scalable apps with modular components and reusable patterns",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Optimizing rendering, reducing bundle size, and maximizing app efficiency",
  },
  {
    icon: GitBranch,
    title: "Production Ready",
    description:
      "Deploying to Google Play Store and Apple App Store with proper CI/CD",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with backend teams and implementing complex features",
  },
];

export function AboutSection() {
  const { ref, isRevealed } = useScrollReveal(0.05);

  return (
    <section
      ref={ref}
      id="about"
      className={`py-20 px-6 bg-gradient-to-b from-slate-50 to-white transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>

          <div className="space-y-6 mt-12">
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              I&apos;m a React Native developer with{" "}
              <span className="font-semibold text-blue-600">3 years</span> of
              professional experience building cross-platform mobile
              applications. I specialize in creating high-performance,
              user-centric applications that work seamlessly on both iOS and
              Android platforms.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              Currently working as a{" "}
              <span className="font-semibold">
                Junior Software Engineer at Bayshore Communication
              </span>{" "}
              (Dhaka), I&apos;ve previously worked as a <span className="font-semibold">Software Developer at
              Cytron Limited</span>{" "}(London). My journey started with an internship at
              OS IT Solutions, where I gained hands-on industry experience.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              I hold a{" "}
              <span className="font-semibold">
                Bachelor of Science in Computer Science & Engineering
              </span>{" "}
              from Bangladesh Army International University of Science and
              Technology (BAIUST) with a CGPA of 3.56.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
