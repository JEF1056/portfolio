/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gentle-float': 'gentle-float 4s ease-in-out infinite',
        'soft-sway': 'soft-sway 3.5s ease-in-out infinite',
        'slow-drift': 'slow-drift 5s ease-in-out infinite',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)' 
          },
          '25%': { 
            transform: 'translateY(-8px) rotate(2deg) scale(1.01)' 
          },
          '50%': { 
            transform: 'translateY(-12px) rotate(4deg) scale(1.02)' 
          },
          '75%': { 
            transform: 'translateY(-6px) rotate(2deg) scale(1.01)' 
          },
        },
        'soft-sway': {
          '0%, 100%': { 
            transform: 'translateX(0px) translateY(0px) rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateX(4px) translateY(-6px) rotate(1deg)' 
          },
          '50%': { 
            transform: 'translateX(0px) translateY(-10px) rotate(0deg)' 
          },
          '75%': { 
            transform: 'translateX(-4px) translateY(-6px) rotate(-1deg)' 
          },
        },
        'slow-drift': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)' 
          },
          '33%': { 
            transform: 'translateY(-15px) scale(1.03)' 
          },
          '66%': { 
            transform: 'translateY(-8px) scale(1.01)' 
          },
        },
      },
    },
  },
  plugins: [],
}
