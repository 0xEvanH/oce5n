import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
};

export default PageTransition;
