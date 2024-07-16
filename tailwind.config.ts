import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lympha-primary": "#066e79",
        "lympha-disabled": "#e8f6fa",
        "lympha-secondary": "#2b94a1",
        "lympha-tertiary": "#30ba7a",
        "lympha-dark": "#02181d",
        "neutral-white": "#fcfdfd",
        "neutral-black-1": "#e6e8e8",
        "neutral-black-2": "#c0c5c6",
        "neutral-black-4": "#4e5d61",
        "neutral-black-6": "#02181d",
        "neutral-black-5": "#283a3f",
        gray: {
          "100": "#8c9194",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(252, 253, 253, 0.7)",
          "400": "rgba(252, 253, 253, 0.6)",
          "500": "rgba(2, 24, 29, 0.05)",
        },
        darkslategray: "rgba(8, 69, 69, 0)",
        darkcyan: {
          "100": "#2b94a1",
          "200": "rgba(40, 139, 145, 0.6)",
          "300": "rgba(40, 139, 145, 0.16)",
        },
        teal: "rgba(59, 120, 120, 0.2)",
        silver: {
          "100": "rgba(192, 197, 198, 0.2)",
          "200": "rgba(192, 197, 198, 0.6)",
        },
        "state-success": "#16a160",
        "state-warning": "#ffbe00",
        "state-error": "#ef5461",
        gainsboro: "#e3e3e3",
        crimson: "#d63b47",
        mediumseagreen: "#30ba7a",
        lightgray: "rgba(204, 204, 204, 0.3)",
        orange: "rgba(255, 190, 0, 0.16)",
        cadetblue: "#7ab6b9",
        "neutral-black-21": "#ccc",
        "ketto-primary": "#288b91",
      },
      fontFamily: {
        sans: "'Source Sans Pro'",
        proxima: "var(--font-proxima)",
      },
      borderRadius: {
        "13xl": "32px",
        "11xl": "30px",
        "15xl-3": "34.3px",
      },
    },
  },
  plugins: [],
};
export default config;
