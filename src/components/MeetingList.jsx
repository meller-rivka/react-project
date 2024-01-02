import { observer } from "mobx-react-lite";
import { useState, useEffect, createContext, useContext } from 'react'
import Meeting from "./Meeting";
import MeetingStore from "../DataStore/MeetingStore";
import { isToday, isThisWeek, isAfter } from "date-fns";
import { toJS } from 'mobx';

const MeetingList = observer(()=>{
    useEffect(()=>{
        console.log("Meeting Comp")
        MeetingStore.getMeetings();
      },[])
   const meetingList = MeetingStore.meetingList;
   console.log("meetingList",toJS(meetingList));
  const sortedMeetingList = toJS(meetingList)?.slice().sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
const plainObjects = sortedMeetingList?.map(item => toJS(item));
console.log("sortedMeetingList", plainObjects);
   const getColorClass = (dateTime) => {
    const meetingDate = new Date(dateTime);

    if (isToday(meetingDate)) {
      return "today-meeting";
    } else if (isThisWeek(meetingDate)) {
      return "this-week-meeting";
    } else if (isAfter(meetingDate, new Date())) {
      return "future-meeting";
    } else {
      return "past-meeting";
    }
  };
  return (
    <>
      {plainObjects?.map(m => (
        <Meeting
          key={m.id}
          id={m.id}
          serviceType={m.serviceType}
          dateTime={m.dateTime}
          clientName={m.clientName}
          clientPhone={m.clientPhone}
          clientEmail={m.clientEmail}
          colorClass={getColorClass(m.dateTime)}
        />
      ))}
    </>
  );
});
   

export default MeetingList;
