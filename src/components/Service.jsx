import { observer } from "mobx-react-lite";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "../App.css"

const Service = observer(({id,name,description,price,duration})=>{
return (<>
 <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 228,
          height: 128,
        },
      }}
    >
      <Paper elevation={6}> {<br/>} סוג השירות : <span className="bold-text">{name}</span> {<br/>} 
      תיאור : <span className="bold-text">{description}</span></Paper>
    </Box>
</>)

});

export default Service;