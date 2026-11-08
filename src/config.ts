export const me = {
  name: 'Alexandre Bourdonneau',
  tagline: 'Étudiant en biologie quantitative · code, science & jeux vidéo',
  discord: 'TON_TAG_DISCORD', // à remplacer
  socials: [
    { label: 'GitHub', icon: '🐙', url: 'https://github.com/alex-brjr' },
    { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/TON-PROFIL' },
    { label: 'Bluesky', icon: '🦋', url: 'https://bsky.app/profile/TON-HANDLE' },
    { label: 'X', icon: '✖️', url: 'https://x.com/TON-HANDLE' },
    { label: 'Spotify', icon: '🎵', url: 'https://open.spotify.com/user/TON-ID' },
  ],
};
export const academy = [
  { title: 'Fiches de révision', desc: 'Biochimie, génétique, biophysique : fiches en PDF.', tags: ['Cours', 'PDF'], url: '#' },
  { title: 'TP Python — analyse de données', desc: 'Notebooks et scripts pour analyser des données biologiques.', tags: ['Python', 'Data'], url: '#' },
  { title: 'Projet perso (exemple)', desc: 'Remplace cette carte par un de tes vrais projets.', tags: ['C++', 'Web'], url: '#' },
];
export const readTime = (t = '') => Math.max(1, Math.round(t.split(/\s+/).length / 200));
