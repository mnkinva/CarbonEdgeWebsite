import { ReactNode } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AppCardProps {
  name: string;
  subtitle?: string;
  description: ReactNode;
  pricing?: string[];
  note?: string;
}

export default function AppCard({ name, subtitle, description, pricing, note }: AppCardProps) {
  return (
    <div
      className="p-[1px] rounded-[14px] h-full transition-all duration-500 hover:scale-[1.02] group"
      style={{
        background: 'linear-gradient(135deg, rgba(56, 139, 253, 0.3), rgba(56, 139, 253, 0.15), rgba(255, 255, 255, 0.08))',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(56, 139, 253, 0.1)',
      }}
      data-testid={`card-service-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className="p-5 rounded-[13px] h-full flex flex-col transition-all duration-500"
        style={{
          background: 'linear-gradient(145deg, hsl(220 14% 16%), hsl(220 14% 13%))',
        }}
      >
        <h3 className="text-[1.1rem] font-semibold mb-1 tracking-wide text-foreground" data-testid="text-service-name">
          {name}
        </h3>
        {subtitle && (
          <p className="text-primary/90 text-sm font-medium mb-2" data-testid="text-service-subtitle">
            {subtitle}
          </p>
        )}
        <p className="text-muted-foreground text-[0.92rem] leading-relaxed mb-3 font-medium" data-testid="text-service-description">
          {description}
        </p>
        
        {pricing && (
          <div className="mt-auto pt-3 border-t border-border/30">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">Pricing</p>
            <ul className="space-y-1">
              {pricing.map((item, i) => (
                <li key={i} className="text-muted-foreground text-[0.82rem] leading-snug font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {note && (
          <p className="mt-auto pt-3 text-primary/80 text-[0.87rem] italic font-medium">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}