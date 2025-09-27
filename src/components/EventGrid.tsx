import React, { useState } from 'react'
import { useEventStore } from '../store/eventStore'
import EventFilters from './EventFilters'
import type { NDMEvent } from '../types/event'

const EventGrid: React.FC = () => {
  const { getFilteredEvents, isLoading } = useEventStore()
  const events = getFilteredEvents()
  const [selectedEvent, setSelectedEvent] = useState<NDMEvent | null>(null)

  if (isLoading) return null

  const openModal = (event: NDMEvent) => {
    setSelectedEvent(event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

  return (
    <section className="py-12 md:py-24 px-4" id="events">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="hero-line-readable text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-ndm-accent mb-4">EVENEMENTS</h2>
          <p className="font-mono text-sm text-ndm-muted">{events.length} événements</p>
        </div>

        {/* Filters */}
        <EventFilters />

        {events.length > 0 && (
          <>
            {/* Desktop Table */}
            <div className="font-mono text-sm border-t border-b border-ndm-primary/20 hidden md:block">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 py-4 border-b border-ndm-primary/40 bg-ndm-primary/5">
                <div className="col-span-1 text-ndm-secondary font-bold">#</div>
                <div className="col-span-3 text-ndm-secondary font-bold">THEME</div>
                <div className="col-span-2 text-ndm-secondary font-bold">DATE</div>
                <div className="col-span-2 text-ndm-secondary font-bold">VILLE</div>
                <div className="col-span-2 text-ndm-secondary font-bold text-right">PRIX</div>
              </div>
              
              {/* Events */}
              <div className="divide-y divide-ndm-primary/20">
                {events.map((event, index) => {
                  const formatDate = (dateString: string) => {
                    const date = new Date(dateString)
                    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' })
                  }
                  return (
                    <button
                      key={event.id}
                      onClick={() => openModal(event)}
                      className="grid grid-cols-12 gap-4 py-3 hover:bg-ndm-primary/10 hover:border-l-4 hover:border-ndm-primary hover:pl-2 hover:shadow-[2px_2px_0px_#FFA400] hover:transform hover:translate-x-1 transition-all duration-200 cursor-pointer w-full text-left group relative overflow-hidden"
                    >
                      {/* Effet de brillance subtil au survol */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ndm-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      
                      <div className="col-span-1 text-ndm-primary group-hover:text-ndm-accent group-hover:font-bold transition-all duration-200 relative z-10">{String(index + 1).padStart(2, '0')}</div>
                      <div className="col-span-3 text-ndm-accent truncate group-hover:text-ndm-primary group-hover:font-semibold transition-all duration-200 relative z-10">{event.theme}</div>
                      <div className="col-span-2 text-ndm-secondary group-hover:text-ndm-accent transition-all duration-200 relative z-10">{formatDate(event.date)}</div>
                      <div className="col-span-2 text-ndm-primary group-hover:text-ndm-secondary transition-all duration-200 relative z-10">{event.city}</div>
                      <div className="col-span-2 text-ndm-primary text-right group-hover:text-ndm-accent group-hover:font-semibold transition-all duration-200 relative z-10">{event.price}</div>
                      
                      {/* Indicateur de clic subtil */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-ndm-primary/30 group-hover:text-ndm-primary group-hover:translate-x-1 transition-all duration-200 font-mono text-xs opacity-0 group-hover:opacity-100">
                        →
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-4">
              {events.map((event, index) => {
                const formatDate = (dateString: string) => {
                  const date = new Date(dateString)
                  return date.toLocaleDateString('fr-FR', { 
                    day: '2-digit', 
                    month: 'short', 
                    year: '2-digit' 
                  })
                }
                return (
                  <button
                    key={event.id}
                    onClick={() => openModal(event)}
                    className="border border-ndm-primary/30 bg-ndm-dark hover:bg-ndm-primary/5 hover:border-ndm-primary hover:shadow-[2px_2px_0px_#FFA400] p-4 transition-all duration-200 cursor-pointer w-full text-left group relative overflow-hidden"
                  >
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ndm-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    
                    {/* Header de la carte */}
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <div className="text-ndm-primary font-mono text-xs group-hover:text-ndm-accent transition-colors">
                        #{String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-ndm-primary text-right font-mono text-sm group-hover:text-ndm-accent transition-colors">
                        {event.price}
                      </div>
                    </div>
                    
                    {/* Titre principal */}
                    <h3 className="text-ndm-accent text-lg font-semibold mb-3 group-hover:text-ndm-primary transition-colors relative z-10">
                      {event.theme}
                    </h3>
                    
                    {/* Informations */}
                    <div className="flex justify-between items-center font-mono text-sm relative z-10">
                      <span className="text-ndm-secondary group-hover:text-ndm-accent transition-colors">
                        {formatDate(event.date)}
                      </span>
                      <span className="text-ndm-primary group-hover:text-ndm-secondary transition-colors">
                        {event.city}
                      </span>
                    </div>
                    
                    {/* Statut badge */}
                    <div className="mt-3 relative z-10">
                      <span className={`inline-block px-2 py-1 font-mono text-xs uppercase tracking-wide ${
                        event.status === 'upcoming' ? 'bg-ndm-primary text-black' :
                        event.status === 'live' ? 'bg-ndm-secondary text-white' :
                        'bg-ndm-muted text-ndm-accent'
                      }`}>
                        {event.status === 'upcoming' ? 'À venir' :
                         event.status === 'live' ? 'Live' : 'Passé'}
                      </span>
                    </div>
                    
                    {/* Indicateur de clic */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-ndm-primary/30 group-hover:text-ndm-primary group-hover:translate-x-1 transition-all duration-200 font-mono text-sm opacity-0 group-hover:opacity-100">
                      →
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        )}
        
        {/* Modal pour les détails de l'événement */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-ndm-dark border-2 border-ndm-primary max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header du modal */}
              <div className="border-b border-ndm-primary/30 p-6 flex justify-between items-start">
                <div>
                  <h3 className="hero-line-readable text-2xl md:text-3xl text-ndm-primary mb-2">
                    {selectedEvent.theme}
                  </h3>
                  <div className="font-mono text-sm text-ndm-secondary space-y-1">
                    <p className="flex items-center gap-2">
                      <img 
                        src="/ndm-mascot.ico" 
                        alt="Date" 
                        className="w-4 h-4 filter brightness-0 invert" 
                        style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(78%) saturate(457%) hue-rotate(21deg) brightness(95%) contrast(95%)' }}
                      />
                      {new Date(selectedEvent.date).toLocaleDateString('fr-FR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="flex items-center gap-2">
                      <img 
                        src="/ndm-mascot.ico" 
                        alt="Heure" 
                        className="w-4 h-4" 
                        style={{ filter: 'brightness(0) saturate(100%) invert(51%) sepia(98%) saturate(1480%) hue-rotate(315deg) brightness(96%) contrast(93%)' }}
                      />
                      {selectedEvent.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <img 
                        src="/ndm-mascot.ico" 
                        alt="Lieu" 
                        className="w-4 h-4" 
                        style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(2613%) hue-rotate(246deg) brightness(85%) contrast(148%)' }}
                      />
                      {selectedEvent.city}
                    </p>
                    {selectedEvent.price && 
                      <p className="flex items-center gap-2">
                        <img 
                          src="/ndm-mascot.ico" 
                          alt="Prix" 
                          className="w-4 h-4" 
                          style={{ filter: 'brightness(0) saturate(100%) invert(76%) sepia(13%) saturate(1637%) hue-rotate(21deg) brightness(103%) contrast(95%)' }}
                        />
                        {selectedEvent.price}
                      </p>
                    }
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-ndm-accent hover:text-ndm-primary text-2xl font-bold leading-none transition-colors"
                >
                  ×
                </button>
              </div>
              
              {/* Contenu du modal */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-mono text-sm text-ndm-secondary mb-3 uppercase tracking-wide">
                    Description
                  </h4>
                  <div className="text-ndm-accent font-mono text-sm leading-relaxed whitespace-pre-line">
                    {selectedEvent.description}
                  </div>
                </div>
                
                {/* Statut de l'événement */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 font-mono text-xs uppercase tracking-wide ${
                    selectedEvent.status === 'upcoming' ? 'bg-ndm-primary text-black' :
                    selectedEvent.status === 'live' ? 'bg-ndm-secondary text-white' :
                    'bg-ndm-muted text-ndm-accent'
                  }`}>
                    {selectedEvent.status === 'upcoming' ? 'À venir' :
                     selectedEvent.status === 'live' ? 'En cours' : 'Passé'}
                  </span>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex gap-4 pt-4 border-t border-ndm-primary/20">
                  {selectedEvent.ticketUrl && (
                    <a
                      href={selectedEvent.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-ndm-primary text-black font-mono text-sm hover:bg-ndm-secondary hover:text-white transition-colors"
                    >
                      BILLETS
                    </a>
                  )}
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-ndm-accent text-ndm-accent font-mono text-sm hover:bg-ndm-accent hover:text-black transition-colors"
                  >
                    FERMER
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default EventGrid