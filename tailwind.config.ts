import { colors, nextui } from '@nextui-org/theme'
import { Config } from "tailwindcss"

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        default: {
          DEFAULT: "hsl(var(--color-default-900))",
          foreground: "hsl(var(--color-foreground-50))",
        },
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "color",
    themes:{
      light: {
        extend: "light",
        colors:{
          background: '#EAEEF3',
        }
      },
      dark: {
        extend: "dark",
        colors:{
          background: '#0F0F0F',
          foreground: {
            "50": "#1B1B1B",
            "100": "#27272A",
            "200": "#2E2E2E",
            "300": "#404040",
            "400": "#525252",
            "500": "#646464",
            "600": "#898989",
            "700": "#ADADAD",
            "800": "#D1D1D1",
            "900": "#F6F6F6",
          }
        }
      }
    },
  })],
}

export default config 