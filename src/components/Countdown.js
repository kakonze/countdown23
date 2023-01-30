import React, {useEffect, useState} from 'react'
//import {Button} from 'react-bootstrap'




export default function Countdown() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() =>{
    let interval;
    if(isRunning){
      interval = setInterval(() =>{
        setTime(prevTime=>prevTime+1);
      },1000);
    }
  return ()=>clearInterval(interval); 
},[isRunning]);

  return (
   
    
  <div className="container">
    <p>Time:{time}</p>
    <div className="btn btn-primary" onClick={()=>setIsRunning(!isRunning)}>{isRunning? 'Pause':'Start'}</div>

  </div>
  )
}
