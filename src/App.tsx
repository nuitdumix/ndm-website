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

  useEffect(() => {
    // Load events data only once
    loadEvents()
  }, []) // Remove loadEvents from dependency array to prevent infinite loop

  // Handle GitHub Pages SPA redirect
  useEffect(() => {
    const handleRedirect = () => {
      const path = window.location.search.slice(1) // Get everything after '?'
      if (path.startsWith('/')) {
        // Replace the current history entry with the parsed path
        window.history.replaceState(null, '', path)
      }
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