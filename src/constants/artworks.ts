import type { Artwork, ArtworkCollection, ArtworkCollectionInfo } from '../types/artwork'

// Collection metadata
export const COLLECTIONS: ArtworkCollectionInfo[] = [
  {
    id: 'press-start',
    title: 'PRESS START',
    subtitle: 'JEUX VIDÉO RÉTRO',
    description: 'Archives visuelles et affiches officielles de la soirée Press Start — hommage aux jeux vidéo old school.',
    folderId: '18Po47_yBsvjQ05mRgpjZHekxHR5PV8QY'
  },
  {
    id: 'no-shazam',
    title: 'NO SHAZAM',
    subtitle: 'MYSTÈRE SONORE',
    description: 'Visuels de la soirée où Shazam est interdit — laisse tes oreilles deviner.',
    folderId: '1ZUe4-_g-EDttfUS_WBN9cQKG03gt8Mp6'
  },
  {
    id: 'matieres-elements',
    title: 'MATIÈRES & ÉLÉMENTS',
    subtitle: 'EXPLORATION SENSORIELLE',
    description: 'Fusion des textures et des éléments — une immersion dans la matière.',
    folderId: '1l1wz8r-QpUEOfokAW04vJubSJ3Ki6w40'
  },
  {
    id: 'reverse',
    title: 'REVERSE',
    subtitle: 'INVERSION CRÉATIVE',
    description: 'Quand tout s\'inverse — poster conceptuel de la soirée Reverse.'
    // No folder - single file only
  },
  {
    id: 'artistic-assets',
    title: 'ASSETS ARTISTIQUES',
    subtitle: 'POSTS INSTAGRAM',
    description: 'Créations visuelles partagées sur nos réseaux — art digital et compositions graphiques.',
    folderId: '1FPssUAkc0DZc6qazYJHt7IuxtJONuop1'
  }
]

// Artwork data with Google Drive file IDs
// To update IDs: Open file in Drive → Share → Copy link → Extract ID from /d/{ID}/view
export const ARTWORKS: Artwork[] = [
  // === NO SHAZAM ===
  {
    id: 'ns-visual-1',
    title: 'No Shazam — Visuel',
    collection: 'no-shazam',
    driveId: '1Q8xe-y4K5dfdK4Wbl2VmCT-XCb72ts0g',
    description: 'Visuel officiel de la soirée No Shazam',
    format: 'square',
    year: 2025
  },
  // === PRESS START ===
  {
    id: 'ps-affiche-main',
    title: 'Affiche Press Start',
    collection: 'press-start',
    driveId: '1sELUCzURDfZumtA7wqO11kKpKebdOZyD',
    description: 'Affiche principale de la soirée Press Start',
    format: 'portrait',
    year: 2025
  },
  {
    id: 'ps-affiche-1',
    title: 'Press Start — Affiche A3 #1',
    collection: 'press-start',
    driveId: '1I3aTI22-G_ytSrvPOx1gGS12TrxiTWWU',
    description: 'Post artistique format instagram',
    format: 'portrait',
    year: 2025
  },
  {
    id: 'ps-affiche-2',
    title: 'Press Start — Affiche A3 #2',
    collection: 'press-start',
    driveId: '1hVdqt0HGLZyk0gZQ6lqAlNph2ezAbNdu',
    description: 'Post artistique format instagram',
    format: 'portrait',
    year: 2025
  },
  {
    id: 'ps-affiche-3',
    title: 'Press Start — Affiche A3 #3',
    collection: 'press-start',
    driveId: '1IeCo0FZsnVu2X1-09L4XgKlH74WqzGta',
    description: 'Post artistique format instagram',
    format: 'portrait',
    year: 2025
  },

  // === MATIÈRES & ÉLÉMENTS (Placeholders) ===
  {
    id: 'me-placeholder-1',
    title: 'Matières #1',
    collection: 'matieres-elements',
    driveId: 'PLACEHOLDER_MATIERES_1',
    description: 'Exploration des textures — Concept 1',
    format: 'square'
  },
  {
    id: 'me-placeholder-2',
    title: 'Éléments #2',
    collection: 'matieres-elements',
    driveId: 'PLACEHOLDER_MATIERES_2',
    description: 'Fusion des éléments — Concept 2',
    format: 'portrait'
  },
  {
    id: 'me-placeholder-3',
    title: 'Matières & Éléments #3',
    collection: 'matieres-elements',
    driveId: 'PLACEHOLDER_MATIERES_3',
    description: 'Synthèse sensorielle — Concept 3',
    format: 'landscape'
  },

  // === REVERSE ===
  {
    id: 'rv-poster',
    title: 'Reverse Poster',
    collection: 'reverse',
    driveId: '14oOOUwx2AHllUTfV78W3Zuq3EU3TXwiP',
    description: 'Affiche soirée Reverse — quand tout s\'inverse',
    format: 'portrait',
    year: 2025
  },

  // === ARTISTIC ASSETS ===
  {
    id: 'art-post-1',
    title: 'Art Post #1',
    collection: 'artistic-assets',
    driveId: '1FmwDrswV9uG6VH16JD9ayI5-eTXX59IY',
    description: 'Création visuelle Instagram',
    format: 'square'
  },
  {
    id: 'art-post-3',
    title: 'Art Post #3',
    collection: 'artistic-assets',
    driveId: '1_i3uA3TxbTFmg1VDwf_Ndn9qFPY0Knn-',
    description: 'Création visuelle Instagram',
    format: 'square'
  },
  {
    id: 'art-post-4',
    title: 'Art Post #4',
    collection: 'artistic-assets',
    driveId: '1Y7LvmR1jVaHBHjxBdAaIJ11C_euoVHhT',
    description: 'Création visuelle Instagram',
    format: 'square'
  },
  {
    id: 'art-post-main',
    title: 'Art Post Principal',
    collection: 'artistic-assets',
    driveId: '1yyI6656QYRYwcGOXRE9WAwPZuIQKxu-E',
    description: 'Création visuelle principale',
    format: 'square'
  }
]

// Helper to get artworks by collection
export const getArtworksByCollection = (collection: ArtworkCollection): Artwork[] => {
  return ARTWORKS.filter(artwork => artwork.collection === collection)
}

// Helper to get collection info
export const getCollectionInfo = (collection: ArtworkCollection): ArtworkCollectionInfo | undefined => {
  return COLLECTIONS.find(c => c.id === collection)
}
