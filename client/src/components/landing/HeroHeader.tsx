interface HeroHeaderProps {
  phone: string;
  services: string;
}

export default function HeroHeader({ phone, services }: HeroHeaderProps) {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <header 
      className="w-full pt-8 md:pt-10 pb-12 md:pb-16 px-6 md:px-10 relative overflow-hidden"
      style={{
        borderBottom: '1px solid hsl(220 12% 20%)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 -1px 0 rgba(56, 139, 253, 0.15)',
        background: 'linear-gradient(135deg, hsl(220 15% 14%) 0%, hsl(220 15% 10%) 100%)',
      }}
      data-testid="hero-header"
    >
      {/* Semi-transparent background image layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${baseUrl}BackgroundHeader.png')`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
        }}
      />
      
      {/* Decorative corner accents - blue glow */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(circle at top left, rgba(56, 139, 253, 0.3), transparent 70%)',
      }} />
      <div className="absolute top-0 right-0 w-40 h-40 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(circle at top right, rgba(56, 139, 253, 0.25), transparent 70%)',
      }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none" style={{
        background: 'radial-gradient(circle at bottom left, rgba(56, 139, 253, 0.2), transparent 70%)',
      }} />
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none" style={{
        background: 'radial-gradient(circle at bottom right, rgba(56, 139, 253, 0.2), transparent 70%)',
      }} />
      
      <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 1 }}>
        {/* Content backdrop */}
        <div 
          className="w-[90%] mx-auto rounded-xl p-6 md:p-8"
          style={{ 
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Main Logo - Hero Focus */}
          <img 
            src={`${baseUrl}9.png`}
            alt="CarbonEdge LLC"
            className="mx-auto mb-4 w-[280px] md:w-[360px] lg:w-[420px] h-auto"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}
          />
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" style={{ boxShadow: '0 0 8px rgba(56, 139, 253, 0.6)' }} />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          {/* Services line */}
          <p 
            className="text-primary text-sm md:text-base font-semibold mb-4 tracking-wide"
          >
            {services}
          </p>
          
          {/* Phone Number */}
          <a 
            href={`tel:${phone.replace(/[^0-9]/g, '')}`}
            className="block text-[clamp(1.5rem,4vw,2.2rem)] font-bold text-white tracking-wide hover:text-primary transition-colors"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            {phone}
          </a>
        </div>
      </div>
    </header>
  );
}
