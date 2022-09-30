import React,{ useState,useEffect } from 'react';

function D_T() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
      setDate(new Date().toLocaleDateString())
    },1000)
  })
  return (
    <>
      {date} {" "} {time}
    </>
  )
}

export default D_T