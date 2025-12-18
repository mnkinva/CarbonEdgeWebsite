interface ContactSectionProps {
  email: string;
  introText?: string;
}

export default function ContactSection({ email, introText }: ContactSectionProps) {
  return (
    <div className="flex flex-col gap-1" data-testid="contact-info">
      {introText && (
        <p className="text-[0.96rem] text-muted-foreground" data-testid="text-contact-intro">
          {introText}
        </p>
      )}
      <p className="text-[0.96rem] text-foreground">
        Email:{' '}
        <a 
          href={`mailto:${email}`}
          className="text-primary hover:underline transition-all duration-200"
          data-testid="link-email"
        >
          {email}
        </a>
      </p>
    </div>
  );
}
