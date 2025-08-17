import React from 'react'

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
        onClick={onToggle}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            {isDark ? (
              <span className="moon-icon">🌙</span>
            ) : (
              <span className="sun-icon">☀️</span>
            )}
          </div>
        </div>
        <span className="theme-label">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </button>
    </div>
  )
}

export default ThemeToggle
