import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import EventGrid from './components/EventGrid'
import Newsletter from './components/Newsletter'
import { useEventStore } from './store/eventStore'

function App() {
  const { loadEvents } = useEventStore()

  useEffect(() => {
    // Load events data only once
    loadEvents()
  }, []) // Remove loadEvents from dependency array to prevent infinite loop

  return (
    <div className="min-h-screen bg-ndm-dark text-ndm-accent font-mono">
      <main>
        <Hero />
        <About />
        <EventGrid />
        <Newsletter />
      </main>
    </div>
  )
}

export default App
