import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* slate-600 */
        input: 'var(--color-input)', /* slate-800 */
        ring: 'var(--color-ring)', /* neon-green */
        background: 'var(--color-background)', /* slate-950 */
        foreground: 'var(--color-foreground)', /* slate-50 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* neon-green */
          foreground: 'var(--color-primary-foreground)', /* slate-950 */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-800 */
          foreground: 'var(--color-secondary-foreground)', /* slate-50 */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-600 */
          foreground: 'var(--color-muted-foreground)', /* slate-400 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* electric-blue */
          foreground: 'var(--color-accent-foreground)', /* slate-950 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* slate-800 */
          foreground: 'var(--color-popover-foreground)', /* slate-50 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* slate-900 */
          foreground: 'var(--color-card-foreground)', /* slate-50 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        /* Brand Specific Colors */
        surface: 'var(--color-surface)', /* slate-600 */
        'text-primary': 'var(--color-text-primary)', /* slate-50 */
        'text-secondary': 'var(--color-text-secondary)', /* slate-400 */
        'neon-green': 'var(--color-neon-green)', /* neon-green */
        'electric-blue': 'var(--color-electric-blue)', /* electric-blue */
        'coral-red': 'var(--color-coral-red)', /* coral-red */
        'purple-accent': 'var(--color-purple-accent)', /* purple-500 */
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'micro': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particle-float': 'particleFloat 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseNeon: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(50, 255, 126, 0.4), 0 0 40px rgba(50, 255, 126, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(50, 255, 126, 0.6), 0 0 60px rgba(50, 255, 126, 0.3)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': {
            filter: 'drop-shadow(0 0 5px rgba(50, 255, 126, 0.5))'
          },
          '100%': {
            filter: 'drop-shadow(0 0 20px rgba(50, 255, 126, 0.8))'
          },
        },
        particleFloat: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.7'
          },
          '25%': {
            transform: 'translateY(-15px) translateX(5px)',
            opacity: '1'
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-5px)',
            opacity: '0.8'
          },
          '75%': {
            transform: 'translateY(-20px) translateX(3px)',
            opacity: '0.9'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(50, 255, 126, 0.4), 0 0 40px rgba(50, 255, 126, 0.2)',
        'neon-blue': '0 0 20px rgba(0, 201, 255, 0.4), 0 0 40px rgba(0, 201, 255, 0.2)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
        'glassmorphism': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(50, 255, 126, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    typography,
    animate,
    // Custom scrollbar utilities
    function ({ addUtilities }) {
      const scrollbarUtilities = {
        '.scrollbar-dark': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#374151 #0f172a',
        },
        '.scrollbar-dark::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.scrollbar-dark::-webkit-scrollbar-track': {
          'background-color': '#0f172a',
          'border-radius': '4px',
        },
        '.scrollbar-dark::-webkit-scrollbar-thumb': {
          'background-color': '#374151',
          'border-radius': '4px',
          border: '1px solid #4b5563',
        },
        '.scrollbar-dark::-webkit-scrollbar-thumb:hover': {
          'background-color': '#4b5563',
        },
        '.scrollbar-dark::-webkit-scrollbar-thumb:active': {
          'background-color': '#6b7280',
        },
        '.scrollbar-dark::-webkit-scrollbar-corner': {
          'background-color': '#0f172a',
        },
      };
      addUtilities(scrollbarUtilities);
    },
  ],
}