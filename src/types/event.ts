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

export interface EventState {
  events: NDMEvent[]
  filter: 'all' | 'upcoming' | 'past'
  searchTerm: string
  isLoading: boolean
  setFilter: (filter: 'all' | 'upcoming' | 'past') => void
  setSearchTerm: (term: string) => void
  loadEvents: () => void
  getFilteredEvents: () => NDMEvent[]
}