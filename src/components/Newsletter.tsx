import React, { useState } from 'react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return

    const subject = encodeURIComponent("Inscription newsletter Nuit du Mix")
    const body = encodeURIComponent(
      `Salut,\n\nJe souhaite rejoindre la newsletter Nuit du Mix !\n\nMon email : ${email}\n\nMerci !`
    )
    window.location.href = `mailto:nuit@dumix.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-24 px-4" id="newsletter">
      <div className="max-w-xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="font-dubtronic text-4xl md:text-6xl text-ndm-accent">NEWSLETTER</h2>
          <p className="font-mono text-xs md:text-sm text-ndm-muted">Reçois les thèmes & dates à venir.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-left">
            <label className="font-mono text-xs text-ndm-secondary">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="toi@exemple.com"
              className="w-full bg-transparent border border-ndm-primary px-4 py-3 font-mono text-sm text-ndm-accent focus:outline-none focus:border-ndm-secondary"
            />
          </div>
          <button
            type="submit"
            disabled={!email.includes('@')}
            className="w-full font-mono text-sm px-6 py-3 border border-ndm-secondary text-ndm-secondary hover:bg-ndm-secondary hover:text-ndm-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            S’INSCRIRE
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter