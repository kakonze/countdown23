import React, {useEffect, useState} from 'react'
//import {Button} from 'react-bootstrap'




export default function Countdown() {
  //useState let us store the number of seconds remaining
  const [seconds, setSeconds] = useState(10);
 
  //useEffect hook to update the seconds
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setSeconds(seconds-1);
    },1000);

 return ()=>{
  clearInterval(intervalId);
 };
  },[seconds]);

 return(
  <div className="container-mt-5">
  <h1 className="display-4">{seconds}</h1>
 </div>
 )
 
  
}
