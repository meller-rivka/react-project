import { observer } from "mobx-react-lite";
import {  useEffect, useContext } from 'react'
import { UserContex } from "../App";
import BusinessStore from "../DataStore/BusinessStore";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';
const Business = observer(()=>{
    const userProperties = useContext(UserContex);
    useEffect(()=>{
      BusinessStore.getBussiness();
    },[])
return(<>

    <Card orientation="horizontal" variant="outlined" sx={{ width: 400 }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src={BusinessStore.bussinessData?.logo}
            srcSet={BusinessStore.bussinessData?.logo}
            loading="lazy"
            alt="logo"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent >
        { userProperties?.isMAnager && <Typography level="md">שם העסק: {BusinessStore.bussinessData?.name}</Typography>}
        <Typography level="body-sm">בעל העסק: {BusinessStore.bussinessData?.owner}</Typography>
        <Typography level="body-sm"> כתובת: {BusinessStore.bussinessData?.address}</Typography>
        <Typography level="body-sm"> טלפון: {BusinessStore.bussinessData?.phone}</Typography>
        <Typography level="body-sm"> פרטים נוספים: {BusinessStore.bussinessData?.description}</Typography>
      </CardContent>
      {userProperties?.isMAnager && <button onClick={()=>{userProperties?.setForChange(true)}}>לעריכה</button>}
    </Card>
</>)
});

export default Business;


