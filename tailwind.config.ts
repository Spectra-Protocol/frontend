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
          foreground: {
            "50" :"#FFFFFF",
            "100": "#F4F5F7",
            "200": "#EEEFF3",
            "300" : "#CDD0DC",
            "400": "#8991AE",
            "500": "#687197",
            "600": "#515875",
            "700": "#3A3F54",
            "800": "#232632",
            "900": "#0C0D11",
          }
        }
      },
      dark: {
        extend: "dark",
        colors:{
          primary: {
            DEFAULT: colors.blue[400],
          },
          background: '#0F0F0F',
        }
      }
    },
  })],
}

export default config 