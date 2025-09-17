import React from 'react'
import { motion } from 'framer-motion'
import { useEventStore } from '../store/eventStore'

const EventFilters: React.FC = () => {
  const { filter, searchTerm, setFilter, setSearchTerm } = useEventStore()

  const filters = [
    { key: 'all', label: 'ALL_EVENTS' },
    { key: 'upcoming', label: 'UPCOMING' },
    { key: 'past', label: 'ARCHIVED' }
  ] as const

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="bg-black border-4 border-ndm-secondary p-6">
        {/* Terminal Header */}
        <div className="font-mono text-ndm-secondary mb-4 text-sm">
          root@ndm:~/events$ filter_events --options
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search Input */}
          <div>
            <label className="font-mono text-ndm-secondary text-sm mb-2 block">
              SEARCH_QUERY:
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="artist, venue, style..."
                className="w-full bg-black border-2 border-white text-white font-mono p-3 focus:border-ndm-primary focus:outline-none transition-colors"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ndm-secondary font-mono text-sm">
                {searchTerm ? `[${searchTerm.length}]` : '[0]'}
              </div>
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="font-mono text-ndm-secondary text-sm mb-2 block">
              STATUS_FILTER:
            </label>
            <div className="flex gap-2">
              {filters.map(({ key, label }) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(key)}
                  className={`font-mono text-sm px-4 py-3 border-2 transition-all duration-200 ${
                    filter === key
                      ? 'bg-ndm-primary text-black border-ndm-primary'
                      : 'bg-transparent text-white border-white hover:border-ndm-secondary hover:text-ndm-secondary'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || filter !== 'all') && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-4 border-t border-ndm-secondary"
          >
            <div className="font-mono text-ndm-secondary text-sm mb-2">
              ACTIVE_FILTERS:
            </div>
            <div className="flex flex-wrap gap-2">
              {filter !== 'all' && (
                <span className="bg-ndm-primary text-black font-mono text-xs px-3 py-1 flex items-center gap-2">
                  STATUS: {filter.toUpperCase()}
                  <button
                    onClick={() => setFilter('all')}
                    className="hover:text-ndm-accent transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="bg-ndm-secondary text-white font-mono text-xs px-3 py-1 flex items-center gap-2">
                  SEARCH: {searchTerm}
                  <button
                    onClick={() => setSearchTerm('')}
                    className="hover:text-ndm-accent transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default EventFilters
