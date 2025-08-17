import React from 'react'

const FilterBar = ({ locations, selectedLocation, onLocationChange }) => {
  const isActive = selectedLocation !== 'all'
  
  return (
    <div className={`filter-bar ${isActive ? 'active' : ''}`}>
      <label htmlFor="location-filter" className="filter-label">
        Filter by Location:
      </label>
      <select
        id="location-filter"
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className="location-select"
      >
        {locations.map(location => (
          <option key={location} value={location}>
            {location === 'all' ? 'All Locations' : location}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
