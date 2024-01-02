import { observer } from "mobx-react-lite";
import Service from "./Service";
import ServiceStore from "../DataStore/ServiceStore";
import MeetingStore from "../DataStore/MeetingStore";
import {  useEffect, useContext } from 'react'
import NewService from "./NewService";
import { UserContex } from "../App";
import * as React from 'react';
import NewMeeting from "./NewMeeting";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ServiceList = observer(()=>{
    const userProperties = useContext(UserContex);
    useEffect(()=>{
        ServiceStore.getServices();
      },[])
    let services=ServiceStore.serviceList;
    let i=0;
    return(<>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services?.map((s, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Service key={i+=1} id={s.id} name={s.name} description={s.description} price={s.price} duration={s.duration} />
          </Grid>
        ))}
      </Grid>
    {userProperties?.isMAnager ? (<button onClick={()=>{ServiceStore.setDialogOpened(true)}} >להוספת שירות</button>): (<button onClick={()=>{MeetingStore.setDialogOpened(true)}}>לקביעת פגישה</button>)}
    <NewService/>
   <NewMeeting/>
    </>);
});
export default ServiceList;
