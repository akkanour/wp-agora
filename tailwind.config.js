
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Configuration des breakpoints responsives par défaut
    screens: {
      sm: '640px',   // Petits écrans (smartphones en mode paysage)
      md: '768px',   // Tablettes
      lg: '1024px',  // Ordinateurs portables
      xl: '1280px',  // Grands écrans
      '2xl': '1536px'// Très grands écrans
    },
    container: {
      center: true, // Centre le container par défaut
      padding: '1rem', // Padding horizontal par défaut du container
    },
    extend: {
      // Palette de couleurs
      colors: {
        primary: {
          darkBlue: '#051565',
          lightBlue: '#0D35BD',
          yellow: '#FFCD00',
          orange: '#FFA03B',
          dark: '#050302',
        },
        secondary: {
          violet: '#7742CB',
          green: '#52AE3F',
          lightYellow: '#FFE500',
          lightOrange: '#DC6B05',
          lightGray: '#B9B9B8',
        },
        additional: {
          // Couleurs pastelles, idéales en background de sections
          purple: '#AB86F3',    // Violet pâle
          softGreen: '#A7D799', // Vert clair pâle
          paleYellow: '#FFF087',// Jaune pâle
          peach: '#FFAD6C',     // Pêche pâle
          white: '#FFFFFF',
        },
      },
      // Grille spécifique
      gridTemplateRows: {
        layout: 'auto 2fr auto', // Header, contenu, footer
      },
      // Ajout d'échelles typographiques supplémentaires
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      // Espacements supplémentaires
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      // Ombres et arrondis supplémentaires
      boxShadow: {
        'soft': '0 4px 6px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      // Gestion du line-height, letter-spacing
      lineHeight: {
        'extra-relaxed': '2.5',
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
    fontFamily: {
      uniqueTitle: ['Marker Felt', 'cursive'], // Pour les titres uniques
      title: ['Minion Variable', 'serif'],     // Pour les autres titres
      body: ['Montserrat', 'sans-serif'],      // Pour le texte général
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Pour des styles de texte avancés
    require('@tailwindcss/aspect-ratio'),// Pour des ratios d'images/vidéos pratiques 
  ],
};
