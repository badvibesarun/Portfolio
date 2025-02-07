import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};