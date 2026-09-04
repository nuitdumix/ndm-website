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
    date: '2025-12-05',
    time: '19:00',
    city: 'DIJON',
    theme: "PRESS START",
    description: " Le thème imposé de cette édition est PRESS START. Ici, les platines deviennent des manettes ! Pour cette nouvelle édition, on plonge dans l'univers pixelisé des consoles rétro",
    status: 'past',
    price: 'Prix libre',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '2026-02-20',
    time: '22:00',
    city: 'Le soleil',
    theme: "MATIERE ET ELEMENTS",
    description: "Entre matières organiques et éléments inorganiques, les DJ devront composer des sets qui évoquent la nature, les éléments et les forces fondamentales de l'univers.",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '2026-04-17',
    time: '21:00',
    city: 'Dijon',
    theme: "REVERSE",
    description: "Quand tout s'inverse...",
    status: 'past',
    price: 'Prix libre',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '2026-06-21',
    time: '16:00',
    city: 'Lyon',
    theme: "FETE DE LA MUSIQUE",
    description: "Open air sur les quais de la pecheries https://fetedelamusique.culture.gouv.fr/w/364732/evenement/19910583/quais-de-lyon-open-air",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '2026-08-28',
    time: '13:00',
    city: 'Le soleil',
    theme: "Galerie",
    description: "NDM x QDB s'associent pour présenter une exposition collaborative mettant en avant des artistes émergents.",
    status: 'past',
    price: '0€',
    ticketUrl: '#'
  },
  {
    title: 'NUIT_DU_MIX',
    date: '2026-09-18',
    time: '19:00',
    city: 'Lyon',
    theme: "Rêves",
    description: "NDM vous invite à plonger dans l'univers des rêves à travers une expérience musicale immersive.",
    status: 'upcoming',
    price: '2€',
    ticketUrl: '#'
  }
]

export const SAMPLE_EVENTS: NDMEvent[] = EVENTS_DATA.map((event, index) => ({
  ...event,
  id: (index + 1).toString().padStart(3, '0')
}))