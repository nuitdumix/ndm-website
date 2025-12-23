import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import EventGrid from './components/EventGrid'
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

  return (
    <Router>
      <div className="min-h-screen bg-ndm-dark text-ndm-accent font-mono">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
