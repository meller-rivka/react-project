import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ServiceStore from "../DataStore/ServiceStore";
import { observer } from "mobx-react-lite";
import MeetingStore from '../DataStore/MeetingStore';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { toJS } from 'mobx';
import Alert from '@mui/material/Alert';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const NewMeeting = observer(() => {

  const [personName, setPersonName] = React.useState('');
  const [dateTime, setDateTime] = React.useState(null);
  const [clientName, setClientName] = React.useState("");
  const [clientPhone, setClientPhone] = React.useState("");
  const [clientEmail, setClientEmail] = React.useState("");
  const alertMessage = MeetingStore.getAlertMessage();
  const alertSeverity = MeetingStore.getAlertSeverity();
  const [datetimeError, setDatetimeError] = useState(false);
  useEffect(() => {
    MeetingStore.setIsWrong(false);
    setDatetimeError(false);
  }, [])
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleClose = () => {
    MeetingStore.setDialogOpened(false);
  };
  const handleSave = () => {
    MeetingStore.setCount(2);
    const services = toJS(ServiceStore.serviceList);
    const i = services?.findIndex(s => s.name === personName);
    const serviceType = services[i]?.id;
    // MeetingStore.setIsWrong(true);
    MeetingStore.addMeeting(MeetingStore.count, serviceType, dateTime, clientName, clientPhone, clientEmail);
    if (MeetingStore.isWrong)
      setDatetimeError(true);
    {
      alertMessage && (
        <Alert variant="outlined" severity={alertSeverity}>
          {alertMessage}
        </Alert>
      )
    }
  };
  const meetingList = MeetingStore.meetingList;
  const handleDatetimeChange = (newDatetime) => {
   
      setDateTime(newDatetime);
  };
  return (
    <React.Fragment>
      <Dialog open={MeetingStore.dialogOpened} onClose={handleClose}>
        <DialogTitle>הוספת פגישה</DialogTitle>
        <DialogContent>
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">בחרי את סוג הפגישה</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected && <Chip key={selected} label={selected} />}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {ServiceStore.serviceList.map((service) => (
                  <MenuItem
                    key={service.name}
                    value={service.name}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="שם הלקוח"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setClientName(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="טלפון"
            type="tel"
            fullWidth
            variant="standard"
            onChange={() => { setClientPhone(event.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" מייל"
            type="email"
            fullWidth
            variant="standard"
            onChange={() => { setClientEmail(event.target.value) }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker
                onChange={handleDatetimeChange}
                style={{ border: datetimeError ? '2px solid red' : '1px solid #ccc' }}
              />
              {datetimeError && <div style={{ color: 'red' }}>Datetime already exists in the list!</div>}
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={handleSave}>הוסף</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
});
export default NewMeeting;


