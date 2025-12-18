import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionCard({ title, subtitle, children }: SectionCardProps) {
  return (
    <section 
      className="rounded-[14px] p-[1px] transition-all duration-300 hover:shadow-xl"
      style={{
        background: 'linear-gradient(135deg, rgba(56, 139, 253, 0.25), rgba(56, 139, 253, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 14px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(56, 139, 253, 0.08)',
      }}
      data-testid={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div 
        className="rounded-[13px] p-6 md:p-7"
        style={{
          background: 'linear-gradient(145deg, hsl(220 14% 15%), hsl(220 14% 12%))',
        }}
      >
        <h2 
          className="text-primary text-[1.1rem] tracking-[0.18em] uppercase font-semibold mb-2 text-center"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm text-center mb-4">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
