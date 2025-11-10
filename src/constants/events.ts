import type { NDMEvent } from '../types'

const EVENTS_DATA: Omit<NDMEvent, 'id'>[] = [
  {
    title: 'NUIT_DU_MIX_001',
    date: '17/10/2024',
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
    date: '17/02/2025',
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
    date: '25/10/2025',
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

// Helper function to convert DD/MM/YYYY to Date object for sorting
const parseDate = (dateStr: string): Date => {
  if (dateStr === '?') {
    return new Date('9999-12-31') // Put unknown dates at the end
  }
  const [day, month, year] = dateStr.split('/')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

// Sort events chronologically
const sortedEvents = EVENTS_DATA.sort((a, b) => {
  const dateA = parseDate(a.date)
  const dateB = parseDate(b.date)
  return dateA.getTime() - dateB.getTime()
})

export const SAMPLE_EVENTS: NDMEvent[] = sortedEvents.map((event, index) => ({
  ...event,
  id: (index + 1).toString().padStart(3, '0')
}))