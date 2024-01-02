import { observable, action, computed, makeObservable, runInAction } from 'mobx';

class MeetingStore {
  dialogOpened = false;
  isWrong = false;
  count=1;
  alertMessage = '';
  alertSeverity = 'success';
  meetingList = [];
  constructor() {
    this.setIsWrong(false)
    makeObservable(this, {
      meetingList: observable,
      addMeeting: action,
      count:observable,
      setCount:action,
      dialogOpened: observable,
      setDialogOpened: action,
      setIsWrong: action,
      setMeetingList: action,
      getMeetings: action
    })
  }
  addMeeting = async (id, serviceType, dateTime, clientName, clientPhone, clientEmail) => {
    const response = await fetch("http://localhost:8787/appointment",
      {
        method: "POST",
        body: JSON.stringify({//הופך את האוביקט לstring וככה האוביקט נשלח נכון בfetch
          id, serviceType, dateTime, clientName, clientPhone, clientEmail// ==={name:name,password:password}
        }),
        headers: {
          "Content-Type": "application/json"//כותרת שתשלח כחלק מהרקווסט ותגדיר שהמשתנים נשלחים וחוזרים במבנה של json
        },
      });
    if (response.status === 200)
      runInAction(() => {
         this.setIsWrong(false);
        this.setDialogOpened(false);
        this.setAlertMessage('Meeting added successfully!');
        this.setAlertSeverity('success');
       
      })
    else
    runInAction(() => {
      this.setIsWrong(true);
      this.setAlertMessage('Error adding meeting!');
      this.setAlertSeverity('error');
    })
  
    this.getMeetings();
  }

  setDialogOpened(bool) {
    this.dialogOpened = bool;
  }
  setCount(num){
    this.count=this.count*num;
  }
  setIsWrong(bool) {
    this.isWrong = bool;
  }
  getMeetings = async () => {
    const response = await fetch("http://localhost:8787/appointments");
    const data = await response.json();
    console.log("data", data);
    this.setMeetingList(data);
  }
  setMeetingList(data) {
    this.meetingList = data;
  }
  setAlertMessage(message) {
    this.alertMessage = message;
  }
  
  setAlertSeverity(severity) {
    this.alertSeverity = severity;
  }
  
  getAlertMessage() {
    return this.alertMessage;
  }
  
  getAlertSeverity() {
    return this.alertSeverity;
  }
}
export default new MeetingStore();