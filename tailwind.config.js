/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '700px'},
      'md': {'min': '701px'},
      'xl': {'min': '1500px'}
    },
    extend: {
      colors: {
        primary: "#0F2986",
        primarytext: "#ccf5f2",
        cta: "#12509B",
        ctaBtn: "#FFFFFF",
        secondarytext: "#85848e",
        lavanda: "#D5DFFF",
        indigo: "#7d7ce7",
        cool: "#8794C3",
        polinesian: "#12509B",
        moonstone: "#24A0B6",
        mint: "#CCF5F2",
        navy: "#000080",
        tiffany: "#98EAE4",
        crayola: "#577DFF",
        oxford: "#000020",  
        bizantino: "#3353C3",
        resolution: "#0F2986",
        whatsappbar: "#A4C2DE",
        yellowb2b: "#F5B501",
        greenb2b:"#005148"
      
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const lineStyles = {
        '.thread-lines': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        },
        '.thread-lines::before': {
          content: '""',
          position: 'absolute',
          top: '25%',
          left: 0,
          right: 0,
          borderTop: '1px dashed #ccc',
        },
        '.thread-lines::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          borderTop: '1px dashed #ccc',
        },
      };

      addUtilities(lineStyles, ['before', 'after']);
    },
  ],
}

