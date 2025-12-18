export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-10 text-center border-t"
      style={{
        borderColor: 'hsl(220 12% 18%)',
        background: 'linear-gradient(to top, hsl(220 15% 8%), transparent)',
      }}
      data-testid="footer"
    >
      <p className="text-[0.85rem] text-muted-foreground tracking-wide">
        &copy; {currentYear} <span className="font-medium text-foreground/80">CarbonEdge, LLC</span>. All rights reserved.
      </p>
      <p className="text-[0.75rem] text-muted-foreground/60 mt-1 italic">
        Site built by{" "}
        <a 
          href="https://www.quietcurrent.life" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
        >
          QuietCurrent, LLC
        </a>
      </p>
    </footer>
  );
}
