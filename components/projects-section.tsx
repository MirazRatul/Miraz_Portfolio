import { Smartphone, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Fitcode',
    description:
      'A production-ready cross-platform fitness tracking mobile application for iOS and Android. Implemented secure authentication, real-time group chat using AWS DynamoDB, and integrated Apple Pay & Google Pay payments via Stripe SDK.',
    tech: ['React Native', 'JavaScript (ES6+)', 'Stripe SDK', 'AWS DynamoDB', 'Apple HealthKit', 'Google Fit'],
    features: [
      'Cross-platform fitness tracking (iOS & Android)',
      'Apple Pay & Google Pay integration via Stripe',
      'Real-time group chat with AWS DynamoDB',
      'Health data synchronization (HealthKit/Google Fit)',
      'Responsive UI with secure authentication',
    ],
    status: 'Live on Google Play Store',
    role: 'Sole React Native Developer',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'SS Transport',
    description:
      'Production-ready logistics and delivery management application for trip management, accident tracking, employee coordination, and real-time vehicle tracking with offline data persistence.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Axios', 'AsyncStorage'],
    features: [
      'Real-time vehicle tracking and trip management',
      'Accident reporting and employee directory',
      'Role-based access control',
      'In-app messaging via Firebase Firestore',
      'Offline data persistence with AsyncStorage',
      'Android & iOS permissions handling',
    ],
    status: 'Deployed on Google Play Store & App Store',
    role: 'Full-Stack React Native Developer',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Swop',
    description:
      'Production-ready Web3 social networking application with SmartSite profiles, feed interactions, and commerce flows. Contributed to core social features including media uploads, video player optimization, and transaction management.',
    tech: ['React Native', 'TypeScript', 'Redux', 'React Navigation', 'Web3/ethers', 'Cloudinary', 'Giphy SDK'],
    features: [
      'Social feed with comments, reposts, and nested replies',
      'Media-rich uploads (image, video, GIFs)',
      'Optimized video player with autoplay/fullscreen',
      'Background upload workflows with progress tracking',
      'Transaction swap feed with live price handling',
      'Multi-chain support (Arbitrum)',
    ],
    status: 'In Production',
    role: 'Senior React Native Developer',
    color: 'from-purple-500 to-pink-500',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-3xl">Production-ready applications that showcase my expertise in React Native development and real-world problem solving.</p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article key={project.title} className="group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-0 h-full">
                {/* Left Content */}
                <div className="md:col-span-2 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{project.role}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <p className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <span className={`text-sm font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Right Features */}
                <div className={`p-10 bg-gradient-to-br ${project.color} bg-opacity-5 border-l-2 border-slate-200`}>
                  <p className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Key Features</p>
                  <ul className="space-y-4">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

