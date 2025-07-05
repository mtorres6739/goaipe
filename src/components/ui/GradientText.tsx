import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  animate?: boolean;
}

const GradientText = ({
  children,
  as: Component = 'span',
  className = '',
  animate = false
}: GradientTextProps) => {
  const animateClass = animate ? 'animate-gradient bg-[length:200%_auto]' : '';
  
  const combinedClasses = `gradient-text ${animateClass} ${className}`;

  return (
    <Component className={combinedClasses}>
      {children}
    </Component>
  );
};

export default GradientText;