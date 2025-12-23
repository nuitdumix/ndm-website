export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ndm-dark text-ndm-accent font-mono px-4 py-10">
      <div className="relative w-full max-w-5xl border-4 border-ndm-accent bg-black/80 shadow-[14px_14px_0_rgba(255,164,0,0.8)] p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-3 border border-ndm-accent/40 border-dashed pointer-events-none" aria-hidden="true" />

        <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-4 py-2 border-2 border-ndm-accent bg-ndm-accent/10 shadow-[6px_6px_0_rgba(255,164,0,0.35)]">
          system // access_denied // 404
        </div>

        <div className="mt-6 mb-8">
          <div className="hero-line-brand text-ndm-accent leading-none">NDM</div>
          <p className="mt-2 text-sm md:text-base tracking-[0.25em] text-ndm-muted uppercase">· route inconnue ·</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="border-2 border-ndm-accent bg-black/60 p-5 flex flex-col gap-6">
            <div className="text-sm tracking-[0.28em]">REDIRECTION</div>
            <div className="border-2 border-dashed border-ndm-accent px-3 py-2 text-xs md:text-sm tracking-[0.18em] text-center">
              &gt;&gt;&gt; RETURN TO FLOOR_00 // MAIN EVENT &lt;&lt;&lt;
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/" className="flex-1 text-center uppercase tracking-[0.16em] px-4 py-3 border-2 border-ndm-accent bg-transparent text-ndm-accent shadow-[6px_6px_0_rgba(255,164,0,0.6)] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-ndm-accent hover:text-ndm-dark">
                Home // Floor_00
              </a>
              <a href="/links" className="flex-1 text-center uppercase tracking-[0.16em] px-4 py-3 border-2 border-ndm-accent bg-transparent text-ndm-accent shadow-[6px_6px_0_rgba(255,164,0,0.6)] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-ndm-accent hover:text-ndm-dark">
                Links // Transmission
              </a>
            </div>
            <p className="text-xs text-ndm-muted">Si rien ne se passe, utilise les boutons ci-dessus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}