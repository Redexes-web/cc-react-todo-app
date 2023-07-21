const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'], // Point d'entrée pour le côté client
  outfile: 'dist/bundle.js', // Fichier de sortie pour le côté client
  bundle: true, // Active le regroupement du code côté client
  loader: { '.js': 'jsx' }, // Utilise le loader "jsx" pour les fichiers ".js"
  define: {
    'process.env.NODE_ENV': '"production"', // Définit NODE_ENV à "production" pour optimiser la construction
  },
  minify: true, // Active la minification du code côté client
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['server/server.jsx'], // Point d'entrée pour le côté serveur
  outfile: 'build/server.js', // Fichier de sortie pour le côté serveur
  platform: 'node', // Cible l'environnement Node.js pour le côté serveur
  define: {
    'process.env.NODE_ENV': '"production"', // Définit NODE_ENV à "production" pour optimiser la construction
  },
  minify: true, // Active la minification du code côté serveur
}).catch(() => process.exit(1));
