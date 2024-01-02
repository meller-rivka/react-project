import { observer } from "mobx-react-lite";
import ServiceStore from "../DataStore/ServiceStore";
import dayjs from 'dayjs';
import { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { toJS } from 'mobx';
import "../App.css"
const Meeting = observer(({ id, serviceType, dateTime, clientName, clientPhone, clientEmail, colorClass }) => {
  useEffect(() => {
    ServiceStore.getServices();
  }, [])

  const services = toJS(ServiceStore.serviceList);
  const index = services.findIndex(s => s.id === serviceType);
  const serviceName = services[index]?.name;
  return (<>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 280,
          height: 200,
        },
      }}
    >
      <Paper elevation={6} className={`meeting ${colorClass}`}>
        <br />
        סוג השירות : <span className="bold-text">{serviceName}</span>
        <br />
        שם הלקוח : <span className="bold-text">{clientName}</span>
        <br />
        טלפון : <span className="bold-text">{clientPhone}</span>
        <br />
        <span className="bold-text">{clientEmail}</span> : מייל
        <br />
        תאריך : {dateTime && dayjs(dateTime).format('YYYY-MM-DD')}
        <br />
        שעה : {dateTime && dayjs(dateTime).format('HH:mm')}
      </Paper>

    </Box>
  </>)


});

export default Meeting;
