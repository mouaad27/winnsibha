module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors : {
                gry: "#B3BBBC",
                pink: "#E4DCD1",
                col : "#23414B",
                pink2: "#DFB4A3",
                gr:"#D1D5DB",
                
            },

            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
                'poppins': ['Poppins','sans-serif' ],
            },




        },
    },
    plugins: [],
    important: true,
};