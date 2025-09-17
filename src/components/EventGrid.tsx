import { useEventStore } from '../store/eventStore'
import EventFilters from './EventFilters'

const EventGrid: React.FC = () => {
  const { getFilteredEvents, isLoading } = useEventStore()
  const events = getFilteredEvents()

  if (isLoading) return null

  return (
    <section className="py-24 px-4" id="events">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-dubtronic text-4xl md:text-6xl text-ndm-accent mb-4">EVENEMENTS</h2>
          <p className="font-mono text-sm text-ndm-muted">{events.length} événements</p>
        </div>

        {/* Filters */}
        <EventFilters />

        {events.length > 0 && (
          <div className="font-mono text-sm border-t border-b border-ndm-primary/20">
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
                  <div key={event.id} className="grid grid-cols-12 gap-4 py-3 hover:bg-ndm-primary/5 transition-colors">
                    <div className="col-span-1 text-ndm-primary">{String(index + 1).padStart(2, '0')}</div>
                    <div className="col-span-3 text-ndm-accent truncate">{event.theme}</div>
                    <div className="col-span-2 text-ndm-secondary">{formatDate(event.date)}</div>
                    <div className="col-span-2 text-ndm-primary">{event.city}</div>
                    <div className="col-span-2 text-ndm-primary text-right">{event.price}</div>
                    <div className="col-span-2 text-ndm-secondary hidden">{event.status}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default EventGrid