import React from 'react'

import './loading.css'

export const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
