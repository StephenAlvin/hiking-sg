import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        'w-full mx-auto px-4 sm:px-6 md:px-8 max-w-7xl scroll-mt-20',
        className
      )}
    >
      {children}
    </div>
  );
}