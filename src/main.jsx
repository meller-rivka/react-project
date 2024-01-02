import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import User from './components/User'
import Admin from "./components/Admin"
import ServiceList from './components/ServiceList';
import MeetingList from './components/MeetingList';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <User />,
//     errorElement: <div></div>

//   },
//   {
//     path: '/admin',
//     element: <Admin />,
//     errorElement:  <div>error contact</div>,
//     children: [
//       {
//         path: '',
//         element: <div>ddddd</div>,
//         exact: true,
//       },
//       {
//         path: '/admin/services',
//         element: <ServiceList/>,
//         errorElement:  <div>error contact</div>,
//         exact: true,
//       },
//       {
//         path: '/admin/meeting',
//         element:<MeetingList/>,
//         errorElement:  <div>error contact</div>,
//         exact: true,
//       }
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} > */}
    <App />
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
