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

  // Normalize GitHub Pages SPA redirect BEFORE Router mounts (replaceState doesn't trigger popstate)
  if (typeof window !== 'undefined') {
    const search = window.location.search
    if (search.startsWith('?/')) {
      const target = search.slice(1).replace(/~and~/g, '&') + window.location.hash
      window.history.replaceState(null, '', target)
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