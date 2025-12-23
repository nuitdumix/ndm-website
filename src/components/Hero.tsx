import React, { useMemo } from 'react'
import { useEventStore } from '../store/eventStore'

/**
 * Updated artistic direction:
 * - Chain of fullscreen manifesto blocks (desktop-first) with ultra large type
 * - Dynamic THEME wall built from upcoming event styles
 * - Maintains brutalist raw layout, terminal hints & glitch accents
 */

interface HeroBlockConfig {
  id: string
  lines: string[]
  accentIndex?: number // index of line to accent
  kicker?: string
  body?: string
  muted?: boolean
}

// No motion variants (LESS IS MORE)

const Hero: React.FC = () => {
  const { events } = useEventStore()

  // Derive unique style keywords from upcoming events for THEME block
  const themeWords = useMemo(() => {
    const upcoming = events.filter(e => e.status === 'upcoming')
    const styles = Array.from(new Set(upcoming.flatMap(e => e.theme)))
    return styles.slice(0, 9) // limit to 9 for layout
  }, [events])

  const blocks: HeroBlockConfig[] = useMemo(() => [
    {
      id: 'intro',
      lines: ['NUIT', 'DU', 'MIX'],
      accentIndex: 2,
      kicker: 'COLLECTIF AUDIOPHILE',
      body: 'SOIRÉES THÉMATIQUES — IMMERSION SONORE',
    },
    {
      id: 'principle',
      lines: ['CHAQUE', 'NUIT', '1 THEME'],
      accentIndex: 1,
      kicker: 'MANIFESTE',
      body: 'LES DJ HONORENT LE SUJET — AUCUN SET GÉNÉRIQUE — SANS COMPROMIS',
    },
    {
      id: 'themes',
      lines: ['CASINO', 'NO SHAZAM', 'USINE', 'COULEUR', 'SAISONS', 'DAFT', 'ELEMENTS', 'SAVEURS', 'SLAY', 'STORMTROOPER'],
      accentIndex: undefined,
      kicker: 'THEMES_PROCHAINS',
      body: 'MUR DE STYLES',
      muted: true
    },
    {
      id: 'cta',
      lines: ['REJOINS', 'LA', 'TRANSMISSION'],
      accentIndex: 0,
      kicker: 'NETWORK',
      body: 'ABONNE-TOI POUR RECEVOIR LES INFOS',
    }
  ], [themeWords])

  return (
    <div id="home" className="relative w-full">
      {blocks.map((block) => (
        <section
          key={block.id}
          className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center gap-6 border-b border-ndm-primary/30"
        >
          {block.kicker && (
            <div className="font-mono text-xs md:text-sm tracking-widest text-ndm-secondary">
              {block.kicker}
            </div>
          )}
          
          {/* Scrollable themes wall */}
          {block.id === 'themes' ? (
            <div className="relative w-full max-w-5xl">
              {/* Scroll indicator arrow - top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-ndm-muted/30 animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Scrollable container */}
              <div className="themes-scroll-container max-h-[60vh] overflow-y-auto px-4 py-2">
                <div className="leading-none flex flex-col gap-2">
                  {block.lines.map((line, i) => {
                    const accent = block.accentIndex === i
                    return (
                      <h2
                        key={i}
                        className={`hero-line-themes ${accent ? 'text-ndm-primary' : 'text-ndm-accent'} ${block.muted ? 'opacity-50' : ''}`}
                      >
                        {line}
                      </h2>
                    )
                  })}
                </div>
              </div>
              
              {/* Scroll indicator arrow - bottom */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-ndm-muted/30 animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="leading-none">
              {block.lines.map((line, i) => {
                const accent = block.accentIndex === i
                // Déterminer la classe CSS selon le bloc
                let fontClass = 'hero-line-readable'
                if (block.id === 'intro' || block.id == 'principle') {
                  fontClass = 'hero-line-brand' // Dubtronic-Solid pour "NUIT DU MIX"
                }
                
                return (
                  <h2
                    key={i}
                    className={`${fontClass} ${accent ? 'text-ndm-primary' : 'text-ndm-accent'} ${block.muted ? 'opacity-50' : ''}`}
                  >
                    {line}
                  </h2>
                )
              })}
            </div>
          )}
          
          {block.body && (
            <p className="max-w-3xl font-mono text-xs md:text-sm text-ndm-muted">
              {block.body}
            </p>
          )}
          {block.id === 'intro' && (
            <a 
              href="#events"
              className="mt-4 font-mono text-sm md:text-base px-8 py-4 border-2 border-ndm-accent bg-ndm-accent text-ndm-dark hover:bg-transparent hover:text-ndm-accent transition-all duration-300 font-bold shadow-[4px_4px_0px_#FFA400] hover:shadow-[2px_2px_0px_#FFA400] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              VOIR LES ÉVÉNEMENTS
            </a>
          )}
          {block.id === 'cta' && (
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.instagram.com/nuitdumix"
              className="mt-4 font-mono text-sm md:text-base px-6 py-3 border-2 border-ndm-primary text-ndm-primary hover:bg-ndm-primary hover:text-ndm-dark transition-colors"
            >
              INSCRIPTION
            </a>
          )}
        </section>
      ))}
    </div>
  )
}

export default Hero
