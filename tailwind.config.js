/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                liHeader:
                    "0 5px 5px 3px rgb(126 87 194 / 0.1), 0 4px 4px 0px rgb(126 87 194 / 0.1)",
            },
        },
    },
    plugins: [],
};
