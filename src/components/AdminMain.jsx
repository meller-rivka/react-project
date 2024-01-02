import Business from "./Business";
import {  useEffect, useContext } from 'react'
import { UserContex } from "../App";
import { observer } from "mobx-react-lite";
import EditBusiness from "./EditBusiness";
import * as React from 'react';
import { Outlet, Link } from "react-router-dom"
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "./Scroll";
const AdminMain = observer(() => {
  const userProperties = useContext(UserContex);
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/admin');
  },[userProperties?.forChange])
  return (<>
<React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(189, 121, 180)' }}>
        <h1></h1>
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
        {userProperties?.forChange ? <EditBusiness /> : <Business />}
        </Toolbar>
        <h1></h1>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container style={{ marginTop: '400px' }}> 
      <br />
      <Button variant="outlined" disabled={userProperties?.forChange}><Link to={!userProperties?.forChange ? "./services":"admin"}>שירותי העסק  </Link></Button>
      <Button variant="outlined" disabled={userProperties?.forChange}><Link to={!userProperties?.forChange ? "./meetings":"./admin"}> פגישות  </Link></Button>
    <br />
    <br />
    <Outlet />
      </Container>
      <ScrollTop>
      <Fab size="medium" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
    </React.Fragment>
  </>)

});

export default AdminMain;
