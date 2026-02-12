import { Code2, User, Github, Mouse } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Floating icons */}
          <div className="flex items-center gap-8 mb-8">
            <div className="floating-icon animate-float">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="floating-icon animate-float-delayed">
              <User className="w-6 h-6" />
            </div>
            <div className="floating-icon animate-float">
              <Github className="w-6 h-6" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fade-in">
            Welcome To My
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Portfolio Website
          </h1>

          {/* Name */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Islam Mesmar
          </h2>

          {/* Role */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Frontend Developer & Computer System Engineer
          </p>

          {/* Website link */}
          <a 
            href="https://github.com/islammosmar1" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 mb-12 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            github.com/islammosmar1
          </a>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Mouse className="w-6 h-6 text-muted-foreground animate-bounce" />
            <span className="text-xs text-muted-foreground">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
