import React from 'react'

const About: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-ndm-dark" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dubtronic text-4xl md:text-6xl text-ndm-accent mb-8">
            QU'EST-CE QUE NDM ?
          </h2>
          <div className="w-16 h-1 bg-ndm-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Main description */}
          <div className="space-y-6">
            <div className="font-mono text-ndm-secondary text-sm uppercase tracking-wider">
              MANIFESTE_COLLECTIF
            </div>
            
            <p className="font-mono text-sm md:text-base text-ndm-accent leading-relaxed">
              <span className="text-ndm-primary font-bold">NUIT DU MIX</span> est un collectif audiophile 
              né de la frustration face aux soirées génériques et commerciales. 
            </p>

            <p className="font-mono text-sm md:text-base text-ndm-muted leading-relaxed">
              Chaque événement impose un <span className="text-ndm-secondary">THÈME</span> aux DJ·Es. 
              Pas de sets formatés, pas de playlists recyclées. Seulement de la création pure 
              et de l'exploration sonore autour de ce thème.
            </p>

            <p className="font-mono text-sm md:text-base text-ndm-muted leading-relaxed">
              Des contraintes créatives aux défis impossibles, NDM pousse les artistes 
              à sortir de leur zone de confort pour créer des expériences uniques et mémorables.
            </p>
          </div>

          {/* Right column - Key points */}
          <div className="space-y-8">
            <div className="border border-ndm-primary p-6">
              <div className="font-mono text-ndm-primary text-xs mb-3">
                root@ndm:~/philosophy$ cat values.txt
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-ndm-secondary font-mono text-sm">→</span>
                  <span className="font-mono text-xs text-ndm-accent">
                    THÈMES CRÉATIFS IMPOSÉS
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-ndm-secondary font-mono text-sm">→</span>
                  <span className="font-mono text-xs text-ndm-accent">
                    ZÉRO LINEUP
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-ndm-secondary font-mono text-sm">→</span>
                  <span className="font-mono text-xs text-ndm-accent">
                    EXPLORATION SONORE RADICALE
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-ndm-secondary font-mono text-sm">→</span>
                  <span className="font-mono text-xs text-ndm-accent">
                    MADE BY DJS FOR DJS
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-ndm-primary">
                <div className="font-mono text-ndm-primary text-xs">
                  4 files found • status: ACTIVE
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="font-mono text-ndm-secondary text-xs mb-2">
                REJOINDRE_LA_RESISTANCE
              </div>
              <a target="_blank" rel="noopener noreferrer" 
                href="https://www.instagram.com/nuitdumix" 
                className="inline-block font-mono text-sm px-6 py-3 border-2 border-ndm-secondary text-ndm-secondary hover:bg-ndm-secondary hover:text-ndm-dark transition-colors"
              >
                S'INSCRIRE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 pt-8 border-t border-ndm-primary/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-dubtronic text-2xl md:text-3xl text-ndm-primary">
                5+
              </div>
              <div className="font-mono text-xs text-ndm-muted">
                ÉVÉNEMENTS
              </div>
            </div>
            <div>
              <div className="font-dubtronic text-2xl md:text-3xl text-ndm-primary">
                0€
              </div>
              <div className="font-mono text-xs text-ndm-muted">
                PRIX D'ENTRÉE
              </div>
            </div>
            <div>
              <div className="font-dubtronic text-2xl md:text-3xl text-ndm-primary">
                100%
              </div>
              <div className="font-mono text-xs text-ndm-muted">
                UNDERGROUND
              </div>
            </div>
            <div>
              <div className="font-dubtronic text-2xl md:text-3xl text-ndm-primary">
                ∞
              </div>
              <div className="font-mono text-xs text-ndm-muted">
                CRÉATIVITÉ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About