import { useState, useEffect } from 'react'
import './App.css'
import HotelList from './components/HotelList'
import SearchBar from './components/SearchBar'
import AddHotelForm from './components/AddHotelForm'
import FilterBar from './components/FilterBar'
import ThemeToggle from './components/ThemeToggle'
import BackToTop from './components/BackToTop'

function App() {
  const [hotels, setHotels] = useState([])
  const [filteredHotels, setFilteredHotels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [showAddForm, setShowAddForm] = useState(false)
  const [addFormSearchTerm, setAddFormSearchTerm] = useState('')
  const [addFormFilterLocation, setAddFormFilterLocation] = useState('all')
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Initial hotel data
  const initialHotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New York",
      price: 24999,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      description: "Luxury hotel in the heart of Manhattan with stunning city views."
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Miami",
      price: 16599,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      description: "Beachfront resort with private beach access and tropical gardens."
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Denver",
      price: 13299,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
      description: "Cozy mountain retreat with panoramic views and hiking trails."
    },
    {
      id: 4,
      name: "Urban Boutique Hotel",
      location: "Los Angeles",
      price: 20799,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      description: "Modern boutique hotel in downtown LA with rooftop pool."
    },
    {
      id: 5,
      name: "Historic Inn",
      location: "Boston",
      price: 14999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      description: "Charming historic inn with period architecture and modern amenities."
    },
    {
      id: 6,
      name: "Desert Oasis Resort",
      location: "Phoenix",
      price: 15799,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
      description: "Luxury desert resort with spa facilities and golf course."
    },
    {
      id: 7,
      name: "Harbor View Hotel",
      location: "Seattle",
      price: 19199,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      description: "Waterfront hotel with stunning harbor views and fresh seafood."
    },
    {
      id: 8,
      name: "Countryside Manor",
      location: "Nashville",
      price: 12499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      description: "Elegant manor house with rolling hills and southern hospitality."
    },
    {
      id: 9,
      name: "Tech Hub Hotel",
      location: "San Francisco",
      price: 23299,
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      description: "Modern hotel designed for tech professionals with coworking spaces."
    },
    {
      id: 10,
      name: "Lakeside Retreat",
      location: "Chicago",
      price: 17499,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
      description: "Peaceful lakeside hotel with beautiful views of Lake Michigan."
    }
  ]

  useEffect(() => {
    setHotels(initialHotels)
    setFilteredHotels(initialHotels)
  }, [])

  useEffect(() => {
    let filtered = hotels

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(hotel =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by location
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(hotel => hotel.location === selectedLocation)
    }

    setFilteredHotels(filtered)
  }, [hotels, searchTerm, selectedLocation])

  // Theme effect
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isDarkTheme])

  // Scroll effect for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowBackToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const addHotel = (newHotel) => {
    const hotelWithId = {
      ...newHotel,
      id: Math.max(...hotels.map(h => h.id)) + 1
    }
    setHotels([...hotels, hotelWithId])
    setShowAddForm(false)
    // Clear add form search when closing
    setAddFormSearchTerm('')
    setAddFormFilterLocation('all')
  }

  const getUniqueLocations = () => {
    return ['all', ...new Set(hotels.map(hotel => hotel.location))]
  }

  // Filter hotels for add form display
  const getAddFormFilteredHotels = () => {
    let filtered = hotels

    if (addFormSearchTerm) {
      filtered = filtered.filter(hotel =>
        hotel.name.toLowerCase().includes(addFormSearchTerm.toLowerCase()) ||
        hotel.description.toLowerCase().includes(addFormSearchTerm.toLowerCase())
      )
    }

    if (addFormFilterLocation !== 'all') {
      filtered = filtered.filter(hotel => hotel.location === addFormFilterLocation)
    }

    return filtered
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <header className="app-header">
        <div className="header-content">
          <div className="header-text">
            <h1>🏨 Hotel Explorer</h1>
            <p>Discover amazing hotels around the world</p>
          </div>
          <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
        </div>
      </header>

      <div className="app-container">
        <div className="controls-section">
          <div className="search-filter-row">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
            <FilterBar 
              locations={getUniqueLocations()}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
      </div>
          
          <button 
            className="add-hotel-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Cancel' : '+ Add New Hotel'}
        </button>
        </div>

        {showAddForm && (
          <AddHotelForm 
            onAddHotel={addHotel}
            existingHotels={getAddFormFilteredHotels()}
            searchTerm={addFormSearchTerm}
            onSearchChange={setAddFormSearchTerm}
            filterLocation={addFormFilterLocation}
            onFilterChange={setAddFormFilterLocation}
            locations={getUniqueLocations()}
          />
        )}

        <HotelList hotels={filteredHotels} />
      </div>

      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </div>
  )
}

export default App
