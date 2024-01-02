import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ServiceStore from "../DataStore/ServiceStore";
import { observer } from "mobx-react-lite";

const NewService = observer(()=>{
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const handleClose = () => {
    {ServiceStore.setDialogOpened(false)}
  };
const handleSave=()=>{
    ServiceStore.addService(id,name,description,price,duration);
    {ServiceStore.setDialogOpened(false)}
};
  return (
    <React.Fragment>
      <Dialog open={ServiceStore.dialogOpened} onClose={handleClose}>
        <DialogTitle>הוספת שירות</DialogTitle>
        <DialogContent>
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="קוד שירות"
            type="text"
            fullWidth
            variant="standard"
            onChange={()=>{setId(event.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="סוג השירות"
            type="text"
            fullWidth
            variant="standard"
            onChange={()=>{setName(event.target.value)}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" תיאור"
            type="text"
            fullWidth
            variant="standard"
            onChange={()=>{setDescription(event.target.value)}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" מחיר"
            type="number"
            fullWidth
            variant="standard"
            onChange={()=>{setPrice(event.target.value)}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" משך זמן השירות"
            type="number"
            fullWidth
            variant="standard"
            onChange={()=>{setDuration(event.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={handleSave}>הוסף</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
});
export default NewService;
 