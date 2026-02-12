import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Frontend Web Developer Nanodegree',
    issuer: 'Udacity',
    date: '2025',
    description: 'Professional certification in modern frontend development including HTML, CSS, JavaScript, and React.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'React Developer Certificate',
    issuer: 'Gaza Sky Geeks',
    date: '2024',
    description: 'Comprehensive React.js training covering components, hooks, state management, and best practices.',
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: 'Software Quality Assurance',
    issuer: 'ITG Software',
    date: '2025',
    description: 'QA fundamentals including manual testing, test automation with Selenium, and quality processes.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'GridApps',
    date: '2024',
    description: 'User interface and experience design principles, prototyping, and design thinking methodology.',
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    title: 'JavaScript Advanced Concepts',
    issuer: 'Udacity',
    date: '2024',
    description: 'Advanced JavaScript including ES6+, async programming, webpack, and modern development workflows.',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Gaza Sky Geeks',
    date: '2024',
    description: 'Full-stack web development fundamentals covering HTML, CSS, JavaScript, and responsive design.',
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto">
            Professional certifications and credentials earned through dedicated training
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center border border-border/30`}>
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
              </div>
              
              {/* Title & Issuer */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {cert.issuer}
              </p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-3">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
