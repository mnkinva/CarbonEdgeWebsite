interface Value {
  label: string;
  description: string;
}

interface ValuesListProps {
  values: Value[];
}

export default function ValuesList({ values }: ValuesListProps) {
  return (
    <ul className="space-y-3 list-none p-0 m-0" data-testid="list-values">
      {values.map((value, index) => (
        <li 
          key={index} 
          className="text-[0.95rem] pl-4 border-l-2 border-primary/40 transition-all duration-300 hover:border-primary hover:pl-5" 
          data-testid={`item-value-${index}`}
        >
          <span className="font-semibold bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent">{value.label}</span>
          <span className="text-muted-foreground"> – {value.description}</span>
        </li>
      ))}
    </ul>
  );
}
