import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          purple: {
            50: {
              DEFAULT: 'hsl(var(--primary-purple-50))',
              foreground: 'hsl(var(--primary-purple-50-foreground))',
            },
            100: {
              DEFAULT: 'hsl(var(--primary-purple-100))',
              foreground: 'hsl(var(--primary-purple-100-foreground))',
            },
            200: {
              DEFAULT: 'hsl(var(--primary-purple-200))',
              foreground: 'hsl(var(--primary-purple-200-foreground))',
            },
            300: {
              DEFAULT: 'hsl(var(--primary-purple-300))',
              foreground: 'hsl(var(--primary-purple-300-foreground))',
            },
            400: {
              DEFAULT: 'hsl(var(--primary-purple-400))',
              foreground: 'hsl(var(--primary-purple-400-foreground))',
            },
            500: {
              DEFAULT: 'hsl(var(--primary-purple-500))',
              foreground: 'hsl(var(--primary-purple-500-foreground))',
            },
            600: {
              DEFAULT: 'hsl(var(--primary-purple-600))',
              foreground: 'hsl(var(--primary-purple-600-foreground))',
            },
            700: {
              DEFAULT: 'hsl(var(--primary-purple-700))',
              foreground: 'hsl(var(--primary-purple-700-foreground))',
            },
            800: {
              DEFAULT: 'hsl(var(--primary-purple-800))',
              foreground: 'hsl(var(--primary-purple-800-foreground))',
            },
            900: {
              DEFAULT: 'hsl(var(--primary-purple-900))',
              foreground: 'hsl(var(--primary-purple-900-foreground))',
            },
          },
          blue: {
            50: {
              DEFAULT: 'hsl(var(--primary-blue-50))',
              foreground: 'hsl(var(--primary-blue-50-foreground))',
            },
            100: {
              DEFAULT: 'hsl(var(--primary-blue-100))',
              foreground: 'hsl(var(--primary-blue-100-foreground))',
            },
            200: {
              DEFAULT: 'hsl(var(--primary-blue-200))',
              foreground: 'hsl(var(--primary-blue-200-foreground))',
            },
            300: {
              DEFAULT: 'hsl(var(--primary-blue-300))',
              foreground: 'hsl(var(--primary-blue-300-foreground))',
            },
            400: {
              DEFAULT: 'hsl(var(--primary-blue-400))',
              foreground: 'hsl(var(--primary-blue-400-foreground))',
            },
            500: {
              DEFAULT: 'hsl(var(--primary-blue-500))',
              foreground: 'hsl(var(--primary-blue-500-foreground))',
            },
            600: {
              DEFAULT: 'hsl(var(--primary-blue-600))',
              foreground: 'hsl(var(--primary-blue-600-foreground))',
            },
            700: {
              DEFAULT: 'hsl(var(--primary-blue-700))',
              foreground: 'hsl(var(--primary-blue-700-foreground))',
            },
            800: {
              DEFAULT: 'hsl(var(--primary-blue-800))',
              foreground: 'hsl(var(--primary-blue-800-foreground))',
            },
            900: {
              DEFAULT: 'hsl(var(--primary-blue-900))',
              foreground: 'hsl(var(--primary-blue-900-foreground))',
            },
          },
        },
        secondary: {
          purple: {
            50: {
              DEFAULT: 'hsl(var(--secondary-purple-50))',
              foreground: 'hsl(var(--secondary-purple-50-foreground))',
            },
            100: {
              DEFAULT: 'hsl(var(--secondary-purple-100))',
              foreground: 'hsl(var(--secondary-purple-100-foreground))',
            },
            200: {
              DEFAULT: 'hsl(var(--secondary-purple-200))',
              foreground: 'hsl(var(--secondary-purple-200-foreground))',
            },
            300: {
              DEFAULT: 'hsl(var(--secondary-purple-300))',
              foreground: 'hsl(var(--secondary-purple-300-foreground))',
            },
            400: {
              DEFAULT: 'hsl(var(--secondary-purple-400))',
              foreground: 'hsl(var(--secondary-purple-400-foreground))',
            },
            500: {
              DEFAULT: 'hsl(var(--secondary-purple-500))',
              foreground: 'hsl(var(--secondary-purple-500-foreground))',
            },
            600: {
              DEFAULT: 'hsl(var(--secondary-purple-600))',
              foreground: 'hsl(var(--secondary-purple-600-foreground))',
            },
            700: {
              DEFAULT: 'hsl(var(--secondary-purple-700))',
              foreground: 'hsl(var(--secondary-purple-700-foreground))',
            },
            800: {
              DEFAULT: 'hsl(var(--secondary-purple-800))',
              foreground: 'hsl(var(--secondary-purple-800-foreground))',
            },
            900: {
              DEFAULT: 'hsl(var(--secondary-purple-900))',
              foreground: 'hsl(var(--secondary-purple-900-foreground))',
            },
          },
          blue: {
            50: {
              DEFAULT: 'hsl(var(--secondary-blue-50))',
              foreground: 'hsl(var(--secondary-blue-50-foreground))',
            },
            100: {
              DEFAULT: 'hsl(var(--secondary-blue-100))',
              foreground: 'hsl(var(--secondary-blue-100-foreground))',
            },
            200: {
              DEFAULT: 'hsl(var(--secondary-blue-200))',
              foreground: 'hsl(var(--secondary-blue-200-foreground))',
            },
            300: {
              DEFAULT: 'hsl(var(--secondary-blue-300))',
              foreground: 'hsl(var(--secondary-blue-300-foreground))',
            },
            400: {
              DEFAULT: 'hsl(var(--secondary-blue-400))',
              foreground: 'hsl(var(--secondary-blue-400-foreground))',
            },
            500: {
              DEFAULT: 'hsl(var(--secondary-blue-500))',
              foreground: 'hsl(var(--secondary-blue-500-foreground))',
            },
            600: {
              DEFAULT: 'hsl(var(--secondary-blue-600))',
              foreground: 'hsl(var(--secondary-blue-600-foreground))',
            },
            700: {
              DEFAULT: 'hsl(var(--secondary-blue-700))',
              foreground: 'hsl(var(--secondary-blue-700-foreground))',
            },
            800: {
              DEFAULT: 'hsl(var(--secondary-blue-800))',
              foreground: 'hsl(var(--secondary-blue-800-foreground))',
            },
            900: {
              DEFAULT: 'hsl(var(--secondary-blue-900))',
              foreground: 'hsl(var(--secondary-blue-900-foreground))',
            },
          },
        },
        dark: {
          DEFAULT: 'hsl(var(--dark))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },

  /* eslint-disable @typescript-eslint/no-require-imports */
  plugins: [require('tailwindcss-animate')],
};
export default config;
