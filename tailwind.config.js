export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Ajout de la palette de couleurs
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
          purple: '#AB86F3', // Couleur violette ajoutée
          softGreen: '#A7D799', // Couleur vert clair ajoutée
          paleYellow: '#FFF087', // Couleur jaune pâle ajoutée
          peach: '#FFAD6C', // Couleur pêche ajoutée
          white: '#FFFFFF', //Couleur blanc
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
