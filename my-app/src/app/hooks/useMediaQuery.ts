import { useState, useEffect } from 'react';

interface MediaQueryOptions {
  maxWidth?: number;
  minWidth?: number;
}

function useMediaQuery(options: MediaQueryOptions): boolean {
  const { maxWidth, minWidth } = options;
  
  const getMatches = (): boolean => {
    // SSR check
    if (typeof window === 'undefined') return false;
    
    if (maxWidth && minWidth) {
      return window.innerWidth <= maxWidth && window.innerWidth >= minWidth;
    } else if (maxWidth) {
      return window.innerWidth <= maxWidth;
    } else if (minWidth) {
      return window.innerWidth >= minWidth;
    }
    
    return false;
  };
  
  const [matches, setMatches] = useState<boolean>(getMatches());
  
  useEffect(() => {
    const handleResize = () => {
      setMatches(getMatches());
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth, minWidth]);
  
  return matches;
}

export default useMediaQuery; 