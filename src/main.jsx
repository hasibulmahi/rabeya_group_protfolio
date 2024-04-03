import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Router'
// import routes from './Routes/Router'
// import routes from './Routes/routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>,
)
