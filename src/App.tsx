// filepath: src/App.tsx
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import EventGrid from './components/EventGrid'
import NotFound from './components/NotFound'
import Links from './components/Links'
import { useEventStore } from './store/eventStore'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventGrid />
    </>
  )
}

function App() {
  const { loadEvents } = useEventStore()

  // Normalize incoming URLs (GH Pages redirect + Instagram wrapped links) BEFORE Router mounts.
  if (typeof window !== 'undefined') {
    const { search, hash, origin } = window.location

    const urlParams = new URLSearchParams(search)

    // 1) Instagram (and similar) wrap links inside a query param like u= or link=
    const candidateKeys = ['u', 'link', 'url', 'target', 'redirect', 'r']
    let rewritten = ''

    for (const key of candidateKeys) {
      const raw = urlParams.get(key)
      if (!raw) continue

      try {
        // Many services double-encode, decode twice safely
        const decodedOnce = decodeURIComponent(raw)
        const decoded = decodedOnce.startsWith('http') ? decodedOnce : raw
        const asUrl = new URL(decoded)

        // If the wrapped URL points to our domain, extract the path/query/hash
        if (asUrl.origin === origin || asUrl.hostname.endsWith('nuit.dumix.live')) {
          rewritten = asUrl.pathname + asUrl.search + asUrl.hash
          break
        }
      } catch {
        // Fallback: accept a leading-slash path directly
        if (raw.startsWith('/')) {
          rewritten = raw
          break
        }
      }
    }

    // 2) GH Pages spa-github-pages redirect format: ?/path&query
    if (!rewritten && search.startsWith('?/')) {
      rewritten = search.slice(1).replace(/~and~/g, '&') + hash
    }

    if (rewritten) {
      window.history.replaceState(null, '', rewritten)
    }
  }

  useEffect(() => {
    // Load events data only once
    loadEvents()
  }, []) // Remove loadEvents from dependency array to prevent infinite loop

  // Handle GitHub Pages SPA redirect
  useEffect(() => {
    const handleRedirect = () => {
      const search = window.location.search
      if (!search || search === '?') return

      // Remove the leading '?'
      const redirectData = search.slice(1)

      // The 404.html script encodes the path and query string as:
      //   encodedPath & encodedQuery
      // and replaces '&' within each part with '~and~'.
      const [encodedPath, encodedQuery] = redirectData.split('&')

      if (!encodedPath) return

      const decodePart = (part?: string) => {
        if (!part) return ''
        const restored = part.replace(/~and~/g, '&')
        try {
          return decodeURIComponent(restored)
        } catch {
          // If decoding fails, fall back to the restored string
          return restored
        }
      }

      const path = decodePart(encodedPath)
      const query = decodePart(encodedQuery)

      if (!path.startsWith('/')) return

      const newUrl = path + (query ? `?${query}` : '') + window.location.hash

      // Replace the current history entry with the parsed path and query
      window.history.replaceState(null, '', newUrl)
    }
    handleRedirect()
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-ndm-dark text-ndm-accent font-mono">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App