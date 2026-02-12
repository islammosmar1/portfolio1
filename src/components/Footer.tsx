const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">IM</span>
            </div>
            <span className="text-sm text-muted-foreground">Islam Mesmar</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Islam Mesmar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
