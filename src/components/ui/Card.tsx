import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Card = ({
  children,
  variant = 'default',
  hover = false,
  className = '',
  onClick,
  style
}: CardProps) => {
  const baseClasses = 'rounded-xl overflow-hidden';
  
  const variantClasses = {
    default: 'bg-surface border border-border-dark',
    glass: 'glass',
    gradient: 'gradient-border bg-surface'
  };

  const hoverClass = hover ? 'card-hover cursor-pointer' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClass} ${clickableClass} ${className}`;

  return (
    <div className={combinedClasses} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export const CardBody = ({ children, className = '' }: CardBodyProps) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

export default Card;