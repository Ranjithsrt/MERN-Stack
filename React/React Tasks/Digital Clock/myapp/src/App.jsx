import "./App.css";
 import { useState, useEffect } from "react";

 const App = () => {
   const [currentTime, setTime] = useState(new Date());

   useEffect(() => {
     const timer = setInterval(() => {
       setTime(new Date());
     }, 1000);

     return () => {
       clearInterval(timer);
     };
   }, []);

   const formatTimeWithLeadingZero = (num) => {
     return num < 10 ? `0${num}` : num;
   };

   const formatHours = (hours) => {
     return hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
   };

   const formatData = (data) => {
     const options = {
       weekday: "long",
       day: "numeric",
       month: "long",
       year: "numeric",
     };
     return data.toLocaleDateString(undefined, options);
   };

   return (
     <div className="digital-clock">
       <h1>Digital Clock</h1>

       <div className="time">
         {formatTimeWithLeadingZero(formatHours(currentTime.getHours()))}:
         {formatTimeWithLeadingZero(currentTime.getMinutes())}:
         {formatTimeWithLeadingZero(currentTime.getSeconds())}{" "}
         {currentTime.getHours() >= 12 ? "PM" : "AM"}
       </div>

       <div className="date">{formatData(currentTime)}</div>
     </div>
   );
 };

 export default App;
