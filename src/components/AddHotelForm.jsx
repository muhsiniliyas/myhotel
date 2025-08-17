import React, { useState } from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import HotelCard from './HotelCard'

const AddHotelForm = ({ 
  onAddHotel, 
  existingHotels, 
  searchTerm, 
  onSearchChange, 
  filterLocation, 
  onFilterChange, 
  locations 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    rating: '',
    image: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.location || !formData.price || !formData.rating) {
      alert('Please fill in all required fields')
      return
    }

    // Validate rating
    const rating = parseFloat(formData.rating)
    if (rating < 0 || rating > 5) {
      alert('Rating must be between 0 and 5')
      return
    }

    // Validate price
    const price = parseFloat(formData.price)
    if (price <= 0) {
      alert('Price must be greater than 0')
      return
    }

    // Create new hotel object
    const newHotel = {
      name: formData.name,
      location: formData.location,
      price: price,
      rating: rating,
      image: formData.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      description: formData.description || 'A wonderful hotel for your stay.'
    }

    onAddHotel(newHotel)
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      price: '',
      rating: '',
      image: '',
      description: ''
    })
  }

  return (
    <div className="add-hotel-form">
      <h3>Add New Hotel</h3>
      
      {/* Search and Filter Section */}
      <div className="add-form-search-section">
        <h4>🔍 Search Existing Hotels</h4>
        <p>Check existing hotels to avoid duplicates or get inspiration</p>
        
        <div className="add-form-search-controls">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={onSearchChange} 
          />
          <FilterBar 
            locations={locations}
            selectedLocation={filterLocation}
            onLocationChange={onFilterChange}
          />
        </div>
        
        {/* Existing Hotels Preview */}
        <div className="existing-hotels-preview">
          <h5>Existing Hotels ({existingHotels.length})</h5>
          {existingHotels.length > 0 ? (
            <div className="existing-hotels-grid">
              {existingHotels.slice(0, 6).map(hotel => (
                <div key={hotel.id} className="existing-hotel-mini-card">
                  <img src={hotel.image} alt={hotel.name} />
                  <div className="mini-card-content">
                    <h6>{hotel.name}</h6>
                    <p>📍 {hotel.location}</p>
                    <p>₹{hotel.price}/night</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-existing-hotels">
              <p>No existing hotels found with current search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Add New Hotel Form */}
      <div className="add-new-hotel-section">
        <h4>➕ Add New Hotel</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Hotel Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter hotel name..."
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter location..."
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price per Night (₹) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="1"
                required
                placeholder="Enter price..."
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="rating">Rating (0-5) *</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
                required
                placeholder="Enter rating..."
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Describe the hotel..."
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddHotelForm
