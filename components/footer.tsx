export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">{'A'}</span>
            </div>
            <span className="font-bold tracking-tight">{'aldeia.group'}</span>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {'About'}
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {'Portfolio'}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {'Contact'}
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            {'© 2025 Aldeia Group. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
