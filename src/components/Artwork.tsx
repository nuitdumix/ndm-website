import React from 'react'
import { Link } from 'react-router-dom'
import { COLLECTIONS, getArtworksByCollection } from '../constants/artworks'
import ArtworkGallery from './ArtworkGallery'

const Artwork: React.FC = () => {
  return (
    <div className="min-h-screen bg-ndm-dark">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center border-b border-ndm-primary/30">
        {/* Back navigation */}
        <Link 
          to="/"
          className="absolute top-6 left-6 font-mono text-xs text-ndm-muted hover:text-ndm-primary transition-colors"
        >
          ← RETOUR
        </Link>

        <div className="font-mono text-xs md:text-sm tracking-widest text-ndm-secondary mb-4">
          // ARCHIVES VISUELLES //
        </div>
        
        <h1 className="hero-line-brand text-ndm-accent">
          GALERIE
        </h1>
        
        <p className="font-mono text-xs md:text-sm text-ndm-muted mt-6 max-w-xl">
          Affiches, créations et visuels des soirées Nuit du Mix.<br/>
          Une collection évolutive de notre identité graphique.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-ndm-muted/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Collection Navigation */}
      <nav className="sticky top-0 z-40 bg-ndm-dark/95 backdrop-blur-sm border-b border-ndm-primary/20 py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-4 md:gap-6 justify-start md:justify-center">
          {COLLECTIONS.map((collection) => (
            <a
              key={collection.id}
              href={`#${collection.id}`}
              className="font-mono text-[10px] md:text-xs text-ndm-muted hover:text-ndm-primary transition-colors whitespace-nowrap px-2 py-1 border border-transparent hover:border-ndm-primary/30"
            >
              {collection.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Gallery Sections */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {COLLECTIONS.map((collection) => {
          const artworks = getArtworksByCollection(collection.id)
          return (
            <div key={collection.id} id={collection.id}>
              <ArtworkGallery 
                collection={collection}
                artworks={artworks}
              />
            </div>
          )
        })}
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-ndm-primary/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="font-mono text-[10px] text-ndm-muted/40 mb-4">
            root@ndm:~/galerie$ echo "collection complete"
          </div>
          
          <p className="font-mono text-xs text-ndm-muted mb-6">
            Tous les visuels sont la propriété du collectif Nuit du Mix.<br/>
            Reproduction interdite sans autorisation.
          </p>

          <Link 
            to="/"
            className="inline-block font-mono text-sm px-6 py-3 border-2 border-ndm-accent text-ndm-accent hover:bg-ndm-accent hover:text-ndm-dark transition-all duration-200 shadow-[4px_4px_0px_#FFA400] hover:shadow-[2px_2px_0px_#FFA400] hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            RETOUR À L'ACCUEIL
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Artwork
