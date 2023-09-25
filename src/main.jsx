import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Donation from './pages/Donation/Donation.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import DonationDetails from './pages/DonationDetails/DonationDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/donation",
        element: <Donation />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
