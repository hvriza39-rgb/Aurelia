import React from 'react';

interface SectionLabelProps {
  label: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <span className="text-xs uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
  );
};
