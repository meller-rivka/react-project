import { observable, action, makeObservable, runInAction } from 'mobx';

class ServiceStore {

    dialogOpened=false;
    serviceList = [];
    constructor() {

        makeObservable(this, {
            dialogOpened:observable,
            serviceList: observable,
            addService: action,
            setDialogOpened: action,
            setServiceList:action
        })
    }
    addService=async(id,name,description,price,duration) => {
        const response= await fetch("http://localhost:8787/service",
        {
        method: "POST",
          body: JSON.stringify({
            id,name,description,price,duration
          }),
          headers: {
            "Content-Type": "application/json"
          },
        });
        if(response.status===200)
        runInAction(()=>{
            console.log("hello");
        })
        else
        runInAction(()=>{  console.log("bey"); } )
        this.getServices();
       }

       setDialogOpened(bool){
           this.dialogOpened=bool;
       }
      
       getServices=async()=>{
       const response = await fetch("http://localhost:8787/services");
       const data= await response.json();
       console.log("data",data);
       this.setServiceList(data);
       }
       setServiceList(data){
        this.serviceList=data;
    }

}
export default new ServiceStore();