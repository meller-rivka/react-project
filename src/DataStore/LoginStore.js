import { observable, makeObservable, action,runInAction } from 'mobx';

class LoginStore{
isLogin=false;
constructor(){

    makeObservable(this,{
        isLogin:observable,
        saveIsLogin:action
    })
}

saveIsLogin=async(name,password) => {
    console.log("isLogin: ");
    const response= await fetch("http://localhost:8787/login",
    {
    method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(response.status===200)
        runInAction(()=>{
         this.isLogin=true;
        })
      else
      runInAction(()=>{this.isLogin=false;
      } )
}

}
export default new LoginStore();