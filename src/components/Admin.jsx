
import { observer } from "mobx-react-lite";
import { useState} from 'react'
import { UserContex } from "../App";
import Admin_Login_Page from "./Admin_Login_Page";
import AdminMain from "./AdminMain";
import LoginStore from "../DataStore/LoginStore";
const Admin = observer(() => {
    const [isMAnager, setIsMAnager] = useState(true);
    const [forChange,setForChange]=useState(false);
   
    return (<>
    <UserContex.Provider value={{isMAnager,setIsMAnager,forChange,setForChange,userName:"manager"}}>
    {LoginStore.isLogin? <AdminMain/> :  <Admin_Login_Page/>}
    </UserContex.Provider>
    </>)

});

export default Admin;
