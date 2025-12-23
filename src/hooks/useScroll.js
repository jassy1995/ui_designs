import { useEffect, useState } from 'react';

function useScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < scrollY) {
        setScrollDirection('up');
      } else {
        setScrollDirection('none');
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return { scrollY, scrollDirection };
}

export default useScroll;
