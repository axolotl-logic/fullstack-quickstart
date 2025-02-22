import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";
import mixins from "tailwindcss-mixins";
import typography from "tailwindcss-typography";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [mixins, typography, daisyui],
} satisfies Config;
