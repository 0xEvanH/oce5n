import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('rv-active')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
};

export default useReveal;
