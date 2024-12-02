export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Ajout de la palette de couleurs
      colors: {
        primary: {
          darkBlue: '#040C3D',
          lightBlue: '#024CAA',
          yellow: '#FFC107',
          orange: '#FFA500',
        },
        secondary: {
          violet: '#7C4DFF',
          green: '#00C853',
          lightYellow: '#FFD600',
          lightOrange: '#FFAB40',
          lightGray: '#F5F5F5',
          white: '#FFFFFF',
        },
      },
      // Ajout d'une grille spécifique
      gridTemplateRows: {
        layout: 'auto 2fr auto', // Header, contenu extensible, Footer
      },
    },
    fontFamily: {
      uniqueTitle: ['Marker Felt', 'cursive'], // Pour les titres uniques
      title: ['Minion Variable', 'serif'], // Pour les autres titres
      body: ['Montserrat', 'sans-serif'], // Pour le texte général
    },
  },
  plugins: [],
};
