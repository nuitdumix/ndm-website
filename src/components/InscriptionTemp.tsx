// Temporary inscription landing with mysterious vibe
const InscriptionTemp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ndm-dark text-ndm-accent font-mono px-4 py-12">
      <div className="relative w-full max-w-3xl border-4 border-ndm-primary bg-black/80 shadow-[14px_14px_0_rgba(255,164,0,0.5)] p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-3 border border-ndm-primary/40 border-dashed pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-24 -right-10 w-52 h-52 bg-ndm-secondary/10 blur-3xl rounded-full" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-6 w-56 h-56 bg-ndm-primary/10 blur-3xl rounded-full" aria-hidden="true" />

        <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-4 py-2 border-2 border-ndm-primary bg-ndm-primary/10 shadow-[6px_6px_0_rgba(255,164,0,0.35)]">
          transmission // incoming
        </div>

        <div className="mt-6 mb-6">
          <div className="hero-line-brand text-ndm-accent leading-none">NDM</div>
          <p className="mt-2 text-sm md:text-base tracking-[0.25em] text-ndm-muted uppercase">NUIT DU MIX #05 incoming</p>
        </div>

        <div className="space-y-4 text-ndm-accent/90 leading-relaxed text-base md:text-lg">
          <p>Salut mon loup, on prépare quelque chose de vraiment spécial.</p>
          <p>Peu de personnes ont accès à ce lien. Un événement approche, mais seulement les plus attentifs recevront l'invitation finale.</p>
        </div>

        <div className="mt-8 border-2 border-dashed border-ndm-primary px-4 py-3 text-center text-sm tracking-[0.16em] uppercase text-ndm-primary">
          &gt;&gt;&gt; Les réponses viendront à ceux qui savent attendre... &lt;&lt;&lt;
        </div>

        <div className="mt-6 text-xs text-ndm-muted tracking-[0.12em]">
          Le signal sera envoyé sans avertissement. Reste à l'écoute.
        </div>
      </div>
    </div>
  )
}

export default InscriptionTemp
