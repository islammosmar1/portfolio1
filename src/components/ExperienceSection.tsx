import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Graduation Project - ResQ Me',
    company: 'Palestine Technical University',
    period: 'August 2021 - January 2026',
    location: 'Tulkarim, Palestine',
    description: 'Designed and implemented an AI-enhanced digital emergency response system that optimizes ambulance dispatch using real-time GPS location tracking, role-based access control, and intelligent data-driven decision.',
    skills: ['TypeScript', 'React', 'GPS Tracking', 'AI/ML'],
    link: 'https://github.com/islammosmar1/ResQ-me.git',
  },
  {
    role: 'Manual QA Trainee',
    company: 'ITG Software',
    period: '2024 - 2025',
    location: 'Remote',
    description: 'Learned manual testing methodologies, test case creation, and quality assurance fundamentals using Selenium automation.',
    skills: ['Selenium', 'Java', 'Manual Testing', 'QA'],
  },
  {
    role: 'Frontend Development Trainee',
    company: 'GridApps Company',
    period: '2024',
    location: 'Palestine',
    description: 'Developed responsive web applications and learned modern frontend development practices.',
    skills: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
  },
  {
    role: 'UI/UX Design Trainee',
    company: 'IEEE IUG',
    period: '2023',
    location: 'Palestine',
    description: 'Studied user interface and user experience design principles, wireframing, and prototyping.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
  },
  {
    role: 'Frontend Development Trainee',
    company: 'True Time Solution (TTS)',
    period: '2023',
    location: 'Palestine',
    description: 'Built responsive web interfaces and learned frontend development best practices.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    role: 'C++ Trainer',
    company: 'Ahi Evran University (Turkey) & PTUK',
    period: '2023',
    location: 'Turkey / Palestine',
    description: 'Trained students in C++ programming fundamentals and object-oriented programming concepts.',
    skills: ['C++', 'OOP', 'Teaching', 'Mentoring'],
  },
  {
    role: 'Frontend Development Trainee',
    company: 'Gaza Sky Geeks',
    period: '2024',
    location: 'Palestine',
    description: 'Completed intensive frontend development training with focus on modern web technologies.',
    skills: ['JavaScript', 'React', 'HTML', 'CSS'],
  },
  {
    role: 'Java Trainer',
    company: 'PTUK University',
    period: '2022',
    location: 'Tulkarim, Palestine',
    description: 'Taught Java programming to university students, covering OOP and data structures.',
    skills: ['Java', 'OOP', 'Data Structures', 'Teaching'],
  },
  {
    role: 'Frontend Development Trainee',
    company: 'Udacity',
    period: '2024 - 2025',
    location: 'Online',
    description: 'Completed professional frontend nanodegree with multiple capstone projects.',
    skills: ['JavaScript', 'Webpack', 'APIs', 'Node.js'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey through training programs, projects, and mentoring
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-6 relative group hover:border-primary/30 transition-all duration-300">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              
              <div className="pl-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <span className="text-primary text-sm">@ {exp.company}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.link && (
                  <a 
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
