import Business from "./Business"
import ServiceList from "./ServiceList"
import { useState} from 'react'
import { UserContex } from "../App";
import { observer } from "mobx-react-lite";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BusinessStore from "../DataStore/BusinessStore";
import ScrollTop from "./Scroll";
const User = observer(()=>{
    const [isMAnager, setIsMAnager] = useState(false);
    
return(<>
<UserContex.Provider value={{isMAnager,setIsMAnager,userName:"user"}}>
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(189, 121, 180)' }}>
        <h1>{BusinessStore.bussinessData?.name}</h1>
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
         <Business/>
        </Toolbar>
        <h1></h1>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container style={{ marginTop: '400px' }}> 
      <ServiceList/>
      </Container>
     
      <ScrollTop>
      <Fab size="medium" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
    </React.Fragment>

    </UserContex.Provider>
</>)

});

export default User;





