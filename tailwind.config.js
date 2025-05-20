module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          900: '#1B4332',
          700: '#2D6A4F',
        },
        // Previously added custom colors
        chokecherry: '#6A845C',
        fescue: '#B7C2A9',
        columbine: '#847FC1',
        salvia: '#5D5B89',
        dustymiller: '#B8B8B8',
        alyssum: '#DDE2D6',
        hosta: '#487D68',
        lambs_ear: '#9BB7A2',
        hydrangea: '#A6BBD5',
        reed_grass: '#C0B7A8',
        daylily: '#F5B179',
        ornamental_pepper: '#F97316',

        // 🌲 New colors from second image
        pine: '#225B45',               // Deep forest green
        blue_spruce: '#7FA7A1',        // Muted blue-gray
        oriental_poppy: '#EF5A24',     // Bright orange-red
        petunia: '#8B1D57',            // Bold magenta
        dahlia: '#9933A6',             // Rich purple
        elm: '#88B04B',                // Vibrant spring green
      },
    },
  },
  plugins: [],
}
