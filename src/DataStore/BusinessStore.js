import { observable, action, computed, makeObservable, runInAction } from 'mobx';

class BusinessStore {
    bussinessData={
    name:"",
    address:"",
    phone:"",
    owner:"",
    logo:"",
    description:"",
  }
    constructor() {
      this.getBussiness();
        makeObservable(this, {
          bussinessData:observable,
            updateBussiness:action,
            setBussinessData:action,
        })
    }
   updateBussiness=async(business) => {
    const response= await fetch("http://localhost:8787/businessData",
    {
    method: "POST",
      body: JSON.stringify({
        business
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(response.status===200)
    runInAction(()=>{
        console.log("response",response);
    })
    else
    runInAction(()=>{  console.log("faild-update-bussiness"); } )
    this.getBussiness();
   }
   getBussiness=async()=>{
   const response = await fetch("http://localhost:8787/businessData");
   const data= await response.json();
   this.setBussinessData(data.business);
   }  
   setBussinessData(value){
     this.bussinessData=value;
   }
}
export default new BusinessStore();


