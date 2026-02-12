import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    category: 'Productivity',
    title: 'BloomTime',
    description: 'A gamified productivity and time management app where tasks grow like a garden. Track focus time, earn points, and level up your productivity.',
    features: [
      'Gamified task management',
      'Focus mode timer',
      'Streak & rewards system',
      'Calendar view',
    ],
    tags: ['TypeScript', 'React', 'CSS'],
    color: 'from-green-500/20 to-lime-500/20',
    github: 'https://github.com/islammosmar1/BloomTime1',
    demo: 'https://bloomtime1.netlify.app/',
    stars: 3,
  },
  {
    category: 'Emergency Response',
    title: 'ResQ Me',
    description: 'AI-enhanced digital emergency response system that optimizes ambulance dispatch using real-time GPS location tracking and intelligent decision-making.',
    features: [
      'Real-time GPS tracking',
      'Role-based access control',
      'AI-powered dispatch optimization',
      'Emergency response coordination',
    ],
    tags: ['TypeScript', 'React', 'AI/ML', 'GPS'],
    color: 'from-red-500/20 to-orange-500/20',
    github: 'https://github.com/islammosmar1/ResQ-me',
    stars: 5,
  },
  {
    category: 'Education',
    title: 'KiddoCode',
    description: 'Interactive educational platform designed for children to learn coding fundamentals through engaging and fun activities.',
    features: [
      'Kid-friendly interface',
      'Interactive lessons',
      'Progress tracking',
      'Gamified learning',
    ],
    tags: ['SCSS', 'JavaScript', 'Education'],
    color: 'from-yellow-500/20 to-amber-500/20',
    github: 'https://github.com/islammosmar1/KiddoCode',
    stars: 2,
  },
  {
    category: 'HR Management',
    title: 'Dynamic HR Website',
    description: 'Comprehensive HR management platform with dynamic features for employee management and organizational workflows.',
    features: [
      'Employee management',
      'Dynamic data handling',
      'User-friendly dashboard',
      'Responsive design',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    color: 'from-blue-500/20 to-cyan-500/20',
    github: 'https://github.com/islammosmar1/dynamic-HR-website',
    stars: 1,
  },
  {
    category: 'Metaverse',
    title: 'Meta-versus',
    description: 'Modern metaverse concept website showcasing virtual reality experiences and immersive digital environments.',
    features: [
      'VR/AR concepts',
      'Immersive UI design',
      'Modern animations',
      'Responsive layout',
    ],
    tags: ['JavaScript', 'CSS', 'Web3'],
    color: 'from-violet-500/20 to-purple-500/20',
    github: 'https://github.com/islammosmar1/Meta-versus',
    stars: 1,
  },
  {
    category: 'Travel',
    title: 'Udacity Travel App',
    description: 'Full-featured travel application built as part of Udacity nanodegree, integrating multiple APIs for weather and destination info.',
    features: [
      'Weather API integration',
      'Destination search',
      'Trip planning',
      'Image galleries',
    ],
    tags: ['JavaScript', 'Webpack', 'APIs', 'Node.js'],
    color: 'from-green-500/20 to-emerald-500/20',
    github: 'https://github.com/islammosmar1/udacity-Travel-App',
    stars: 0,
  },
  {
    category: 'Library',
    title: 'GSG Book Library',
    description: 'Final project for Gaza Sky Geeks bootcamp - a comprehensive book library management system with CRUD operations.',
    features: [
      'Book catalog management',
      'Search functionality',
      'User favorites',
      'Responsive UI',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-purple-500/20 to-violet-500/20',
    github: 'https://github.com/islammosmar1/GSG-BookLibrary-FinalProject',
    stars: 2,
  },
  {
    category: 'E-Commerce',
    title: 'E-Book Website',
    description: 'Digital bookstore platform for browsing and purchasing e-books with modern UI and smooth user experience.',
    features: [
      'Book catalog',
      'Category filtering',
      'Responsive design',
      'User-friendly checkout',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-teal-500/20 to-cyan-500/20',
    github: 'https://github.com/islammosmar1/E-book-website',
    stars: 1,
  },
  {
    category: 'Entertainment',
    title: 'Movies Website',
    description: 'Dynamic movies browsing website with modern UI, movie details, and search functionality.',
    features: [
      'Movie catalog',
      'Search & filter',
      'Movie details',
      'Responsive design',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    color: 'from-pink-500/20 to-rose-500/20',
    github: 'https://github.com/islammosmar1/Islam-Movies-website',
    stars: 1,
  },
  {
    category: 'NLP',
    title: 'Evaluate News NLP',
    description: 'Udacity project for evaluating news articles using Natural Language Processing for sentiment analysis.',
    features: [
      'NLP integration',
      'Sentiment analysis',
      'Article evaluation',
      'API consumption',
    ],
    tags: ['JavaScript', 'NLP', 'Webpack', 'APIs'],
    color: 'from-indigo-500/20 to-blue-500/20',
    github: 'https://github.com/islammosmar1/Evaluate-News-NLP-Udacity-Project',
    stars: 0,
  },
  {
    category: 'Weather',
    title: 'Weather Journal App',
    description: 'Asynchronous web application that uses Web API and user data to dynamically update the UI with weather information.',
    features: [
      'Real-time weather data',
      'User journal entries',
      'Async/Await patterns',
      'Dynamic UI updates',
    ],
    tags: ['JavaScript', 'Node.js', 'Express', 'API'],
    color: 'from-cyan-500/20 to-teal-500/20',
    github: 'https://github.com/islammosmar1/Weather-Journal-App',
    stars: 0,
  },
  {
    category: 'Real Estate',
    title: 'HomeUp',
    description: 'Modern real estate platform for property listings, search, and management with elegant user interface.',
    features: [
      'Property listings',
      'Search filters',
      'Property details',
      'Contact forms',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    color: 'from-amber-500/20 to-yellow-500/20',
    github: 'https://github.com/islammosmar1/homeUp',
    stars: 2,
  },
  {
    category: 'QA Automation',
    title: 'ITG QA Selenium',
    description: 'Automated testing suite built during ITG Software training, implementing Selenium WebDriver for web application testing.',
    features: [
      'Selenium WebDriver',
      'Test automation',
      'Cross-browser testing',
      'Test reporting',
    ],
    tags: ['Java', 'Selenium', 'QA', 'Automation'],
    color: 'from-emerald-500/20 to-green-500/20',
    github: 'https://github.com/islammosmar1/itg-QA-sele2',
    stars: 1,
  },
  {
    category: 'University Management',
    title: 'Software Project - Housing',
    description: 'University Housing Management Software for managing student accommodations, room assignments, and housing operations.',
    features: [
      'Student housing management',
      'Room assignment system',
      'Administrative dashboard',
      'Reporting tools',
    ],
    tags: ['CSS', 'JavaScript', 'HTML'],
    color: 'from-sky-500/20 to-blue-500/20',
    github: 'https://github.com/islammosmar1/software_project',
    stars: 2,
  },
  {
    category: 'University Management',
    title: 'University Housing',
    description: 'Comprehensive university housing platform for managing dormitories, student applications, and facility operations.',
    features: [
      'Dormitory management',
      'Student applications',
      'Facility tracking',
      'User management',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    color: 'from-orange-500/20 to-red-500/20',
    github: 'https://github.com/islammosmar1/University_housing',
    stars: 0,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my development work, from emergency response systems to educational platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card group">
              {/* Category badge & Stars */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {project.category}
                </span>
                {project.stars > 0 && (
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-medium">{project.stars}</span>
                  </div>
                )}
              </div>
              
              {/* Project preview placeholder */}
              <div className={`h-40 rounded-xl bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center border border-border/30 group-hover:border-primary/30 transition-colors`}>
                <span className="text-muted-foreground text-sm">{project.title}</span>
              </div>
              
              {/* Title & Description */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-muted-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
                {(project as any).demo && (
                  <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                    <a href={(project as any).demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
                {!(project as any).demo && (
                  <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
