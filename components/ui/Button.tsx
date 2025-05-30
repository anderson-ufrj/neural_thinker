'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
    {
      // Variants
      'bg-accent text-white hover:bg-accent-dark focus:ring-accent': variant === 'primary',
      'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary': variant === 'secondary',
      'border border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent': variant === 'outline',
      'bg-transparent text-accent hover:bg-muted focus:ring-accent': variant === 'ghost',
      
      // Sizes
      'text-sm px-3 py-1.5 space-x-1.5': size === 'sm',
      'text-base px-4 py-2 space-x-2': size === 'md',
      'text-lg px-6 py-3 space-x-3': size === 'lg',
      
      // Disabled state
      'opacity-50 cursor-not-allowed pointer-events-none': disabled,
    },
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  const buttonAnimation = {
    tap: { scale: 0.98 },
    hover: { 
      y: -2,
      transition: { duration: 0.2 } 
    }
  };

  if (href) {
    return (
      <motion.div
        whileTap="tap"
        whileHover="hover"
        variants={buttonAnimation}
      >
        <Link 
          href={href} 
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileTap="tap"
      whileHover="hover"
      variants={buttonAnimation}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}