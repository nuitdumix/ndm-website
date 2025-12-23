import React from 'react'

/**
 * Links page - Centralized link hub for all NDM social/platform links
 * Brutalist design with minimal styling
 */

interface LinkItem {
  label: string
  url: string
  icon: string
}

const links: LinkItem[] = [
  {
    label: 'YOUTUBE',
    url: 'https://www.youtube.com/@nuit-du-mix',
    icon: '▶'
  },
  {
    label: 'TWITCH',
    url: 'https://www.twitch.tv/nuitdumix',
    icon: '◉'
  },
  {
    label: 'INSTAGRAM',
    url: 'https://www.instagram.com/nuitdumix',
    icon: '◈'
  },
  {
    label: 'INSCRIPTION',
    url: 'https://www.instagram.com/nuitdumix',
    icon: '✉'
  }
]

const Links: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-ndm-dark">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="hero-line-brand text-ndm-accent mb-4">
          NUIT DU MIX
        </h1>
        <p className="font-mono text-xs md:text-sm text-ndm-secondary tracking-widest">
          TOUS NOS LIENS
        </p>
      </div>

      {/* Links Grid */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full px-6 py-4 border-2 border-ndm-accent bg-transparent text-ndm-accent hover:bg-ndm-accent hover:text-ndm-dark transition-all duration-300 font-mono text-sm md:text-base font-bold shadow-[4px_4px_0px_#FFA400] hover:shadow-[2px_2px_0px_#FFA400] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-between"
          >
            <span className="text-2xl mr-4">{link.icon}</span>
            <span className="flex-1 text-center">{link.label}</span>
            <span className="text-sm opacity-50 group-hover:opacity-100">→</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12">
        <a
          href="/"
          className="font-mono text-xs text-ndm-muted hover:text-ndm-primary transition-colors underline"
        >
          ← RETOUR AU SITE
        </a>
      </div>
    </div>
  )
}

export default Links
