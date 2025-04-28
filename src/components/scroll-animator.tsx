'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(':scope > section'); // Target direct children sections
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      // Trigger animation when the top of the element is within ~85% of the viewport height
      if (elementTop < windowHeight * 0.85) {
        el.classList.add('fade-in-scroll');
        // Optional: Remove the class once animation is done if needed
        // setTimeout(() => el.classList.remove('opacity-0'), 600); // Match animation duration
      } else {
        // Optional: Reset if element scrolls out of view from the top
         // el.classList.remove('fade-in-scroll');
         // el.classList.add('opacity-0'); // Ensure it starts hidden if scrolled back up quickly
      }
    });
  }, []);

  useEffect(() => {
    // Initial check in case elements are already in view
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Re-check on resize

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef} className={cn(className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === React.Fragment) {
           // Handle fragments by applying opacity-0 to their children if they are sections
           return React.Children.map(child.props.children, (fragChild) => {
             if (React.isValidElement(fragChild) && typeof fragChild.type === 'function' && fragChild.type.name?.includes('Section')) {
               return React.cloneElement(fragChild, {
                 // Add opacity-0 initially to hide before animation triggers
                 className: cn(fragChild.props.className, 'opacity-0'),
               });
             }
             return fragChild;
           });
        } else if (React.isValidElement(child) && typeof child.type === 'function' && child.type.name?.includes('Section')) {
          // Apply opacity-0 to direct section children
          return React.cloneElement(child, {
            className: cn(child.props.className, 'opacity-0'),
          });
        }
        return child;
      })}
    </div>
  );
};
