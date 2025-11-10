import type { NDMEvent } from '../types'

const EVENTS_DATA: Omit<NDMEvent, 'id'>[] = [
  {
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
    title: 'NUIT_DU_MIX',
    date: '2025-10-25',
    time: '20:00',
    city: 'DIJON',
    theme: "NO SHAZAM",
    description: "Your set needs to be filled with songs that aren't recognised by Mr Shazam.",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '05/12/2025',
    time: '20:00',
    city: 'DIJON',
    theme: "JEUX VIDEOS",
    description: "?",
    status: 'upcoming',
    price: '2€ - 5€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '?',
    time: '?',
    city: '?',
    theme: "CASINO",
    description: "?",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '?',
    time: '?',
    city: '?',
    theme: "SAVEURS",
    description: "?",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '?',
    time: '?',
    city: '?',
    theme: "INSTRUMENTS",
    description: "?",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '?',
    time: '?',
    city: '?',
    theme: "STORMTROOPER",
    description: "?",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '?',
    time: '?',
    city: '?',
    theme: "HISTOIRE_D_UN_GENRE",
    description: "?",
    status: 'upcoming',
    price: '0€',
    ticketUrl: '#'
  }
]

export const SAMPLE_EVENTS: NDMEvent[] = EVENTS_DATA.map((event, index) => ({
  ...event,
  id: (index + 1).toString().padStart(3, '0')
}))