import { create } from 'zustand'
import type { EventState } from '../types'
import { SAMPLE_EVENTS } from '../constants'

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
        events: SAMPLE_EVENTS,
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
