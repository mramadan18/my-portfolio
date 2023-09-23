import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      Kaushan: ['Kaushan Script']
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260"
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#14181d",
          300: "#14181d",
          500: "#0f1115",
          700: "#202125"
        }
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      boxShadow: ["dark"]
    }
  }
}
export default config
