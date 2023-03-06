import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import css from 'styled-jsx/css';
import { PropagateLoader } from 'react-spinners';

interface PageLoaderProps {
  color?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ color = '#000' }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.children;

      gsap.set(letters, { opacity: 0, y: 50 });
      gsap.to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    tl.to(textRef.current, { opacity: 0, duration: 0.5, delay: 1.5 }).set(
      document.body,
      { overflow: 'auto' },
    ); // Add overflow to body when animation is end.
  }, []);

  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to(loaderRef.current, { backgroundColor: '#f1ca89' })
      .to(loaderRef.current, { width: '100%', duration: 0.5 })
      .to(loaderRef.current, { backgroundColor: '#fff', duration: 0.5 })
      .to(loaderRef.current, { width: '0%', duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className='page-loader' ref={loaderRef}>
      <h1 ref={textRef}>
        <span>I</span>
        <span>g</span>
        <span>o</span>
        <span>r</span>
        &nbsp;
        <span>S</span>
        <span>w</span>
        <span>a</span>
        <span>t</span>
        <span>o</span>
        <span>w</span>
        <span>s</span>
        <span>k</span>
        <span>i</span>
        <span
          style={{ width: '1.4em', height: '1em', backgroundColor: 'white' }}
        ></span>
      </h1>
    </div>
  );
};

export default PageLoader;
