import { create } from 'zustand'

export interface NDMEvent {
  id: string
  title: string
  date: string
  time: string
  city: string
  theme: string
  description: string
  status: 'upcoming' | 'past' | 'live'
  price?: string
  image?: string
  ticketUrl?: string
}

interface EventState {
  events: NDMEvent[]
  filter: 'all' | 'upcoming' | 'past'
  searchTerm: string
  isLoading: boolean
  setFilter: (filter: 'all' | 'upcoming' | 'past') => void
  setSearchTerm: (term: string) => void
  loadEvents: () => void
  getFilteredEvents: () => NDMEvent[]
}

// Sample events data - inspired by underground rave culture
const sampleEvents: NDMEvent[] = [
  {
    id: '001',
    title: 'NUIT_DU_MIX_001',
    date: '2024-10-17',
    time: '22:00',
    city: 'DIJON',
    theme: "VILLES",
    description: "Find song that can match \"VILLES\" theme",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    id: '002',
    title: 'ANNIV_DU_MIX',
    date: '2025-02-17',
    time: '21:00',
    city: 'DIJON',
    theme: "BIRTHDAY",
    description: "No description needed",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    id: '003',
    title: 'NUIT_DU_MIX',
    date: '2025-05-03',
    time: '22:00',
    city: 'DIJON',
    theme: "ORANGE",
    description: "Ur songs need to match the orange color",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    id: '004',
    title: 'NUIT_DU_MIX',
    date: '2025-10-02',
    time: '22:00',
    city: 'DIJON',
    theme: "NO SHAZAM",
    description: "In your set you need to find song that shazam didn't know",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  },
  {
    id: '005',
    title: 'NUIT_DU_MIX',
    date: '2025-12-08',
    time: '22:00',
    city: '?',
    theme: "SAISONS",
    description: "Ur songs need to match feelings of seasons",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  }
]

export const useEventStore = create<EventState>((set, get) => ({
  events: [],
  filter: 'all',
  searchTerm: '',
  isLoading: false,

  setFilter: (filter) => set({ filter }),
  
  setSearchTerm: (searchTerm) => set({ searchTerm }),

  loadEvents: () => {
    set({ isLoading: true })
    
    // Simulate API call delay
    setTimeout(() => {
      set({ 
        events: sampleEvents,
        isLoading: false 
      })
    }, 500)
  },

  getFilteredEvents: () => {
    const { events, filter, searchTerm } = get()
    let filtered = events

    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(event => event.status === filter)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(event =>
        event.city.toLowerCase().includes(term) ||
        event.time.toLowerCase().includes(term) ||
        event.theme.toLowerCase().includes(term) ||
        event.price?.toLowerCase().includes(term)
      )
    }

    // Sort by date
    return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }
}))
