import React from 'react'
import type { ArtworkCollectionInfo, Artwork } from '../types/artwork'
import { getDriveFolderUrl } from '../types/artwork'
import ArtworkCard from './ArtworkCard'

interface ArtworkGalleryProps {
  collection: ArtworkCollectionInfo
  artworks: Artwork[]
}

const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ collection, artworks }) => {
  if (artworks.length === 0) return null

  return (
    <section className="py-16 md:py-24 border-b border-ndm-primary/20">
      {/* Terminal-style header */}
      <div className="mb-8 md:mb-12">
        <div className="font-mono text-[10px] md:text-xs text-ndm-secondary mb-2 tracking-wider">
          root@ndm:~/galerie/{collection.id}$
        </div>
        
        <h2 className="hero-line-readable text-ndm-accent text-3xl md:text-5xl lg:text-6xl">
          {collection.title}
        </h2>
        
        {collection.subtitle && (
          <div className="font-mono text-sm md:text-base text-ndm-primary mt-2 tracking-widest">
            // {collection.subtitle}
          </div>
        )}
        
        <p className="font-mono text-xs md:text-sm text-ndm-muted mt-4 max-w-2xl">
          {collection.description}
        </p>

        {/* Download all button */}
        {collection.folderId && (
          <a
            href={getDriveFolderUrl(collection.folderId)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 border-2 border-ndm-primary text-ndm-primary hover:bg-ndm-primary hover:text-ndm-dark transition-colors font-mono text-xs md:text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            TÉLÉCHARGER TOUT (ZIP)
            <span className="text-[10px] opacity-70">↗ Google Drive</span>
          </a>
        )}
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>

      {/* Collection footer */}
      <div className="mt-8 font-mono text-[10px] text-ndm-muted/40 text-right">
        {artworks.length} œuvre{artworks.length > 1 ? 's' : ''} — collection {collection.id}
      </div>
    </section>
  )
}

export default ArtworkGallery
