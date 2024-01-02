import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'
import User from './components/User'
import Admin from "./components/Admin"
import Admin_Login_Page from './components/Admin_Login_Page';
import AdminMain from './components/AdminMain';
import ServiceList from './components/ServiceList';
import MeetingList from './components/MeetingList';
import { Button } from "@mui/material";

export const UserContex = createContext(null);
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<User/>}>
          </Route>

          <Route path={"admin"} element={<Admin/>}>
           <Route path={'services'} element={<ServiceList/>}></Route>
           <Route path={'meetings'} element={<MeetingList/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>)
}

export default App
           {/* <Route path={"/Main"} element={<AdminMain />}></Route> */}
