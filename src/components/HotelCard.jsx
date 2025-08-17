import React from 'react'

const HotelCard = ({ hotel }) => {
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>)
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">☆</span>)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>)
    }

    return stars
  }

  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
        <div className="hotel-price">
          <span>₹{hotel.price}</span>
          <small>/night</small>
        </div>
      </div>
      
      <div className="hotel-content">
        <div className="hotel-header">
          <h3 className="hotel-name">{hotel.name}</h3>
          <div className="hotel-rating">
            <div className="stars">
              {renderStars(hotel.rating)}
            </div>
            <span className="rating-text">{hotel.rating}</span>
          </div>
        </div>
        
        <div className="hotel-location">
          <span className="location-icon">📍</span>
          {hotel.location}
        </div>
        
        <p className="hotel-description">{hotel.description}</p>
        
        <button className="book-now-btn">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default HotelCard
