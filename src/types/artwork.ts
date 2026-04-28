// Artwork type definitions for NDM Gallery

export type ArtworkCollection = 
  | 'press-start'
  | 'no-shazam'
  | 'matieres-elements'
  | 'reverse'
  | 'artistic-assets'

export interface Artwork {
  id: string
  title: string
  collection: ArtworkCollection
  driveId: string
  description?: string
  format?: 'portrait' | 'landscape' | 'square'
  year?: number
}

export interface ArtworkCollectionInfo {
  id: ArtworkCollection
  title: string
  subtitle?: string
  description: string
  folderId?: string // Google Drive folder ID for bulk download
}

// Google Drive thumbnail URL helper
export const getDriveImageUrl = (driveId: string, size: 'thumb' | 'large' = 'thumb'): string => {
  const width = size === 'thumb' ? 800 : 2000
  return `https://drive.google.com/thumbnail?id=${driveId}&sz=w${width}`
}

// Google Drive download URL helper
export const getDriveDownloadUrl = (driveId: string): string => {
  return `https://drive.google.com/uc?export=download&id=${driveId}`
}

// Google Drive folder URL helper (for bulk download)
export const getDriveFolderUrl = (folderId: string): string => {
  return `https://drive.google.com/drive/folders/${folderId}?usp=sharing`
}
