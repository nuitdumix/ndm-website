import React, { useState } from 'react'
import type { Artwork } from '../types/artwork'
import { getDriveImageUrl, getDriveDownloadUrl } from '../types/artwork'

interface ArtworkCardProps {
  artwork: Artwork
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const [isZoomed, setIsZoomed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const thumbnailUrl = getDriveImageUrl(artwork.driveId, 'thumb')
  const largeUrl = getDriveImageUrl(artwork.driveId, 'large')

  const handleClick = () => {
    if (!hasError) {
      setIsZoomed(true)
    }
  }

  const handleClose = () => {
    setIsZoomed(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsZoomed(false)
    }
  }

  // Determine aspect ratio class based on format
  const aspectClass = artwork.format === 'landscape' 
    ? 'aspect-[4/3]' 
    : artwork.format === 'portrait' 
      ? 'aspect-[3/4]' 
      : 'aspect-square'

  return (
    <>
      {/* Card */}
      <div 
        className="group relative cursor-pointer"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        aria-label={`Voir ${artwork.title} en grand`}
      >
        {/* Frame with brutalist border */}
        <div className={`
          relative overflow-hidden
          border-4 border-ndm-accent
          shadow-[6px_6px_0px_#FFA400]
          group-hover:shadow-[4px_4px_0px_#F84B76]
          group-hover:translate-x-[2px] group-hover:translate-y-[2px]
          transition-all duration-200
          ${aspectClass}
        `}>
          {/* Loading skeleton */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-ndm-dark/50 animate-pulse flex items-center justify-center">
              <span className="text-ndm-muted font-mono text-xs">CHARGEMENT...</span>
            </div>
          )}

          {/* Error state */}
          {hasError && (
            <div className="absolute inset-0 bg-ndm-dark flex items-center justify-center">
              <span className="text-ndm-secondary font-mono text-xs text-center px-2">
                IMAGE NON<br/>DISPONIBLE
              </span>
            </div>
          )}

          {/* Image */}
          <img
            src={thumbnailUrl}
            alt={artwork.title}
            className={`
              w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-105
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className="
            absolute inset-0 
            bg-gradient-to-t from-black/80 via-transparent to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            flex flex-col justify-end p-3
          ">
            <span className="font-mono text-xs text-ndm-primary tracking-wider">
              {artwork.year && `${artwork.year} — `}CLIQUEZ POUR AGRANDIR
            </span>
          </div>
        </div>

        {/* Title below frame */}
        <div className="mt-2 px-1">
          <h3 className="font-mono text-xs md:text-sm text-ndm-accent truncate">
            {artwork.title}
          </h3>
          {artwork.description && (
            <p className="font-mono text-[10px] md:text-xs text-ndm-muted truncate mt-0.5">
              {artwork.description}
            </p>
          )}
        </div>
      </div>

      {/* Zoom overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={artwork.title}
          tabIndex={-1}
        >
          {/* Top buttons */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-3 z-10">
            {/* Download button */}
            <a
              href={getDriveDownloadUrl(artwork.driveId)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-3 py-2 border-2 border-ndm-primary text-ndm-primary hover:bg-ndm-primary hover:text-ndm-dark transition-colors font-mono text-xs"
              aria-label="Télécharger"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden md:inline">TÉLÉCHARGER</span>
            </a>
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="text-ndm-accent hover:text-ndm-primary transition-colors"
              aria-label="Fermer"
            >
              <span className="font-mono text-2xl md:text-3xl">×</span>
            </button>
          </div>

          {/* Image container */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={largeUrl}
              alt={artwork.title}
              className="max-w-full max-h-[85vh] object-contain border-4 border-ndm-accent shadow-[8px_8px_0px_#FFA400]"
            />
            
            {/* Caption */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <h3 className="font-mono text-sm md:text-base text-ndm-accent">
                {artwork.title}
              </h3>
              {artwork.description && (
                <p className="font-mono text-xs text-ndm-muted mt-1">
                  {artwork.description}
                </p>
              )}
            </div>
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ndm-muted/50 text-center">
            Appuyez sur ESC ou cliquez pour fermer<br/>
            Cliquez sur TÉLÉCHARGER pour sauvegarder l'image
          </div>
        </div>
      )}
    </>
  )
}

export default ArtworkCard
