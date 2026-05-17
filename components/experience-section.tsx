import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    period: '09/2023 - Present',
    title: 'Junior Software Engineer',
    company: 'Bayshore Communication',
    location: 'Remote',
    description:
      'Working as a full-time React Native App Developer, building and maintaining cross-platform mobile applications. Implementing new features, optimizing UI/UX, and integrating APIs and third-party services for production applications.',
    skills: ['React Native', 'TypeScript', 'Firebase', 'REST APIs', 'State Management'],
  },
  {
    period: '10/2023 - 01/2026',
    title: 'Software Developer',
    company: 'Cytron Limited',
    location: 'London, UK',
    description:
      'Developing and maintaining high-quality mobile applications using React Native. Integrating complex APIs, managing backend services, implementing authentication systems, and ensuring code quality standards.',
    skills: ['React Native', 'TypeScript', 'AWS', 'Redux', 'Firebase Firestore'],
  },
  {
    period: '06/2023 - 08/2023',
    title: 'Software Intern',
    company: 'OS IT Solutions Ltd.',
    location: 'Dhaka, Bangladesh',
    description:
      'Completed hands-on software development internship and gained practical industry experience working on real-world projects with production deployment.',
    skills: ['React Native', 'JavaScript', 'Git', 'Agile', 'Code Review'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6">My professional journey in mobile app development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-12 top-24 w-0.5 h-20 bg-gradient-to-b from-blue-400 to-cyan-300"></div>
              )}
              
              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Content */}
                <div className="pb-12 flex-1 bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                          <MapPin size={16} className="text-blue-600" />
                          <span>{exp.company}</span>
                          <span className="text-slate-400">—</span>
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar size={16} className="text-blue-600" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
