const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Oracle/SQL', level: 60 },
  ];

  const otherSkills = [
    'UI/UX Design',
    'OOP',
    'Git & GitHub',
    'Responsive Design',
    'REST APIs',
    'Node.js',
    'Webpack',
    'Selenium',
    'Manual Testing',
    'Trading Forex & Crypto',
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Time Management',
    'Team Collaboration',
    'Continuous Learning',
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle mx-auto">
            Technical expertise and professional competencies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-6 text-lg">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills & Soft Skills */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 text-lg">Other Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 text-lg">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
