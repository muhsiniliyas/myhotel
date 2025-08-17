import React from 'react'

const BackToTop = ({ show, onClick }) => {
  return (
    <button
      className={`back-to-top ${show ? 'show' : ''}`}
      onClick={onClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <div className="back-to-top-icon">
        <span className="arrow-up">↑</span>
      </div>
      <span className="back-to-top-text">Top</span>
    </button>
  )
}

export default BackToTop
