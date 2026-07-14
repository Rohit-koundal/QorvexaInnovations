import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        brand: "#4F46E5",
        cyan: "#06B6D4",
        canvas: "#F8FAFC",
      },
    },
  },
};

export default config;
