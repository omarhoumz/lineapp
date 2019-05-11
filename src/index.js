import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import LineApp from './line-app'
import './index.css'

ReactDOM.render(<LineApp />, document.getElementById('root'))
registerServiceWorker()
