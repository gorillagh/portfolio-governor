import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFC300", // Primary gold as per Phase 0 requirements
          foreground: "#121212",
          50: "#FFFEF7",
          100: "#FFFACD",
          200: "#FFF68F",
          300: "#FFE55C",
          400: "#FFC300",
          500: "#FFB300",
          600: "#FFA000",
          700: "#FF8F00",
          800: "#FF6F00",
          900: "#E65100",
        },
        secondary: {
          DEFAULT: "#FFD700", // Secondary gold
          foreground: "#121212",
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFD700",
          600: "#FFC107",
          700: "#FFB300",
          800: "#FFA000",
          900: "#FF8F00",
        },
        dark: {
          DEFAULT: "#121212", // Dark background as per Phase 0 requirements
          foreground: "#FFC300",
        },
        card: {
          DEFAULT: "#1E1E1E", // Card background
          foreground: "#FFC300",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'], // Body text
        heading: ['Ubuntu', 'system-ui', 'sans-serif'], // Headings
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config