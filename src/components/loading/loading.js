import React from 'react'

import './loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
