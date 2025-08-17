import React from 'react'
import HotelCard from './HotelCard'

const HotelList = ({ hotels }) => {
  if (hotels.length === 0) {
    return (
      <div className="no-results">
        <h3>No hotels found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="hotel-list">
      <div className="hotel-grid">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div className="results-count">
        Showing {hotels.length} hotel{hotels.length !== 1 ? 's' : ''}
      </div>
    </div>
  )
}

export default HotelList
