import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search hotels by name or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => onSearchChange('')}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      
      <div className="search-help">
        <strong>Search Tips:</strong>
        <ul>
          <li>🔍 Try hotel names like "Grand Plaza" or "Ocean View"</li>
          <li>📍 Search by location keywords like "beach", "mountain", "city"</li>
          <li>⭐ Look for amenities like "pool", "spa", "luxury"</li>
          <li>💰 Search by price range or "budget", "premium" (₹)</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
