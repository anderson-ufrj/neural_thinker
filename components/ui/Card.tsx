'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';

type CardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  tags?: string[];
  className?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
};

export default function Card({
  title,
  description,
  imageSrc,
  href,
  tags,
  className = '',
  footer,
  onClick,
}: CardProps) {
  const cardContent = (
    <>
      {imageSrc && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{title}</h3>
      {description && <p className="text-muted-foreground mb-3">{description}</p>}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {footer && <div className="mt-auto pt-4">{footer}</div>}
    </>
  );

  const baseClasses = clsx(
    'group flex flex-col bg-white dark:bg-[rgb(var(--muted))] rounded-xl p-6 h-full',
    className
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.2,
      }
    },
    tap: { scale: 0.98 }
  };

  if (href) {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        className={`${baseClasses} cursor-pointer`}
      >
        <Link href={href} className="flex flex-col h-full">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={onClick ? "hover" : undefined}
      whileTap={onClick ? "tap" : undefined}
      className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {cardContent}
    </motion.div>
  );
}