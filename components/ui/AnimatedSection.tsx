'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  animation?: 'fadeIn' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'none';
  threshold?: number;
};

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  animation = 'fadeUp',
  threshold = 0.1,
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing
      }}
    >
      {children}
    </motion.div>
  );
}