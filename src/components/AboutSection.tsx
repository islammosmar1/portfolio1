import { MapPin, Phone, Mail, Download, Send, Code, Palette, Lightbulb, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const skills = [
    { icon: Code, label: 'Frontend Development' },
    { icon: Palette, label: 'UI/UX Design' },
    { icon: Lightbulb, label: 'Problem Solving' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar & Info */}
          <div className="glass-card p-8 relative">
            <div className="absolute -top-3 right-6">
              <span className="px-4 py-1.5 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                Available for Work
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-2xl">IM</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Islam Mesmar</h3>
                <p className="text-muted-foreground text-sm mb-4">Computer System Engineer</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Frontend Developer with hands-on training in building responsive, user-centered web interfaces. Skilled in HTML, CSS, JavaScript, and React.js, with experience in UI/UX principles, QA fundamentals, and collaborative development. Passionate about continuous learning and delivering practical, high-quality solutions.
                </p>
                
                {/* Contact info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    Jenin, Palestine
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    +972598188707
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    islammosmar2@gmail.com
                  </div>
                  <a href="https://www.linkedin.com/in/islam-mosmar-8a3a60266" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                    in/islam-mosmar-8a3a60266
                  </a>
                  <a href="https://github.com/islammosmar1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                    github.com/islammosmar1
                  </a>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                 <a href="/Islam Alaa Mesmar-cv.pdf" download>
  <Button variant="outline" size="sm" className="gap-2">
    <Download className="w-4 h-4" />
    Download CV
  </Button>
</a>
                  <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats & Skills */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card">
                <div className="text-4xl font-bold text-gradient mb-1">8+</div>
                <p className="text-sm text-muted-foreground">Training Programs</p>
              </div>
              <div className="stat-card">
                <div className="text-4xl font-bold text-gradient mb-1">20+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
            
            {/* Core Skills */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Core Skills</h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <skill.icon className="w-4 h-4 text-primary" />
                    </div>
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Languages</h4>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium">Arabic</p>
                  <p className="text-xs text-muted-foreground">Native</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">English</p>
                  <p className="text-xs text-muted-foreground">Fluent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
