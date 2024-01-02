import { useState } from 'react';
import { observer } from "mobx-react-lite";
import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import LoginStore from '../DataStore/LoginStore';
import AdminMain from './AdminMain';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ServiceStore from '../DataStore/ServiceStore';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
const Admin_Login_Page = observer(()=>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
return(<>

    <h1>Admin_Login_Page</h1>
    
    <TextField id="outlined-basic" label="שם משתמש" variant="outlined" value={name} onChange={()=>setName(event.target.value)}/>
    <label>שם משתמש  </label>
    <br/>
    <br/>
    
    <TextField id="outlined-basic" label=" סיסמא" variant="outlined" value={password} onChange={()=>setPassword(event.target.value)} />
    <label>סיסמא  </label>
    <br/>
    <br/>
    <Button variant="contained" endIcon={<SendIcon />}  onClick={()=>{LoginStore.saveIsLogin(name,password); setError(true)}}>לשמור</Button>
  {!LoginStore.isLogin && error && <Alert severity="error">name or password is invalid</Alert>}
</>)

});

export default Admin_Login_Page;
