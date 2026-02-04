import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';


const ReactElement = React.createElement(
  'a',
  {href: "https://google.com"},
  'Click To Visit Google'
)

const anotherOne = (
  <a href="https://google.com">Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  

    ReactElement
  
)
