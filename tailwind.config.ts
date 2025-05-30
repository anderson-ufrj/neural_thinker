import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          light: 'rgb(var(--accent-light))',
          dark: 'rgb(var(--accent-dark))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          light: 'rgb(var(--secondary-light))',
          dark: 'rgb(var(--secondary-dark))',
        },
        muted: 'rgb(var(--muted))',
        'muted-foreground': 'rgb(var(--muted-foreground))',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: 'rgb(var(--foreground))',
            a: {
              color: 'rgb(var(--accent))',
              textDecoration: 'none',
              '&:hover': {
                color: 'rgb(var(--accent-dark))',
              },
            },
            h1: {
              fontFamily: 'var(--font-playfair), serif',
              fontWeight: '700',
              color: 'rgb(var(--foreground))',
            },
            h2: {
              fontFamily: 'var(--font-playfair), serif',
              fontWeight: '600',
              color: 'rgb(var(--foreground))',
            },
            h3: {
              fontFamily: 'var(--font-playfair), serif',
              fontWeight: '500',
              color: 'rgb(var(--foreground))',
            },
            h4: {
              color: 'rgb(var(--foreground))',
            },
            h5: {
              color: 'rgb(var(--foreground))',
            },
            h6: {
              color: 'rgb(var(--foreground))',
            },
            blockquote: {
              borderLeftColor: 'rgb(var(--accent))',
            },
            code: {
              backgroundColor: 'rgb(var(--muted))',
              color: 'rgb(var(--foreground))',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            pre: {
              backgroundColor: 'rgb(var(--muted))',
              code: {
                backgroundColor: 'transparent',
              }
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;