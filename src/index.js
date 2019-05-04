import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import LineApp from './LineApp'
import './index.css'

ReactDOM.render(<LineApp />, document.getElementById('root'))
registerServiceWorker()
