import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:islammosmar2@gmail.com" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  islammosmar2@gmail.com
                </a>
                
                <a href="tel:+972598188707" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  +972598188707
                </a>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  Jenin, Palestine
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a href="https://github.com/islammosmar1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/islam-mosmar-8a3a60266" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-secondary/50 border-border/50" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-secondary/50 border-border/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                <Input placeholder="Project inquiry" className="bg-secondary/50 border-border/50" />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="bg-secondary/50 border-border/50 resize-none"
                />
              </div>
              
              <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
