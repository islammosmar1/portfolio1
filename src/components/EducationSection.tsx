import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">
            My academic background and qualifications
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Bachelor's Degree */}
          <div className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  Bachelor's Degree in Computer System Engineering
                </h3>
                <p className="text-primary text-sm mb-3">Palestine Technical University</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Tulkarim, Palestine
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    January 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  High School Diploma - Scientific Track
                </h3>
                <p className="text-primary text-sm mb-1">Jenin Secondary Boys School</p>
                <p className="text-2xl font-bold text-gradient mb-3">93%</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Jenin, Palestine
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    2020 - 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
