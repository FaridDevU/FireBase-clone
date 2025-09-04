module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          1: "var(--global-bg-1)",
          2: "var(--global-bg-2)",
          3: "var(--global-bg-3)",
          4: "var(--global-bg-4)",
          5: "var(--global-text-5)"
        },
        button: {
          1: "var(--button-bg-1)",
          2: "var(--button-bg-2)",
          3: "var(--button-text-3)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' }
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        }
      }
    }
  },
  plugins: []
};