import ValuesList from '../landing/ValuesList';

export default function ValuesListExample() {
  const values = [
    { label: "Gentle over frantic", description: "We design for sustainable change, not burnout." },
    { label: "Kindness first", description: "Our products aim to reduce shame, not increase it." },
  ];

  return <ValuesList values={values} />;
}
