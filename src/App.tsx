// filepath: src/App.tsx
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import EventGrid from './components/EventGrid'
import NotFound from './components/NotFound'
import Links from './components/Links'
import InscriptionTemp from './components/InscriptionTemp'
import Artwork from './components/Artwork'
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

  // Normalize incoming URLs (GH Pages redirect + Instagram-wrapped + naked UTM paths) BEFORE Router mounts.
  if (typeof window !== 'undefined') {
    const { search, hash, origin, pathname } = window.location

    const decodeTilde = (value: string) => value.replace(/~and~/g, '&')
    const safeDecode = (value: string) => {
      try { return decodeURIComponent(value) } catch { return value }
    }

    const urlParams = new URLSearchParams(search)
    const candidateKeys = ['u', 'link', 'url', 'target', 'redirect', 'r']
    let rewritten = ''

    // 1) Unwrap Instagram-like redirections contained in query params
    for (const key of candidateKeys) {
      const raw = urlParams.get(key)
      if (!raw) continue

      const cleaned = decodeTilde(raw)
      const decoded1 = safeDecode(cleaned)
      const decoded2 = safeDecode(decoded1)
      const candidate = decoded2.startsWith('http') ? decoded2 : decoded1.startsWith('http') ? decoded1 : cleaned

      try {
        const asUrl = new URL(candidate)
        if (asUrl.origin === origin || asUrl.hostname.endsWith('nuit.dumix.live')) {
          rewritten = asUrl.pathname + asUrl.search + asUrl.hash
          break
        }
      } catch {
        if (candidate.startsWith('/')) {
          rewritten = candidate
          break
        }
      }
    }

    // 2) GH Pages spa-github-pages redirect format: ?/path&query
    if (!rewritten && search.startsWith('?/')) {
      const payload = decodeTilde(search.slice(2)) // remove '?/'
      const [rawPath, ...rest] = payload.split('&')
      const pathPart = safeDecode(rawPath || '/')
      const queryRaw = rest.join('&')
      const queryPart = queryRaw ? safeDecode(queryRaw) : ''
      const normalizedPath = pathPart.startsWith('/') ? pathPart : `/${pathPart}`
      rewritten = normalizedPath + (queryPart ? `?${queryPart}` : '') + hash
    }

    // 3) Instagram-style naked query appended to path (no '?', only '&utm...')
    if (!rewritten && !search && pathname.includes('&')) {
      const [rawPath, ...rest] = pathname.split('&')
      if (rest.length) {
        const pathPart = safeDecode(rawPath || '/')
        const queryRaw = decodeTilde(rest.join('&'))
        const queryPart = safeDecode(queryRaw)
        const normalizedPath = pathPart.startsWith('/') ? pathPart : `/${pathPart}`
        rewritten = `${normalizedPath}?${queryPart}${hash}`
      }
    }

    if (rewritten && rewritten !== (pathname + search + hash)) {
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
            <Route path="/inscription" element={<InscriptionTemp />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App