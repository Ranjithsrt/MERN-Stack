 import { useState } from "react";
 import "./App.css";

 const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 const months = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
 ];

 const App = () => {
   const [selectedDate, setSelectedDate] = useState(new Date());

   // Get all days including empty slots for the month view
   const getDaysInMonth = () => {
     const daysArray = [];

     const year = selectedDate.getFullYear();
     const month = selectedDate.getMonth();

     const firstDay = new Date(year, month, 1);
     const lastDay = new Date(year, month + 1, 0);

     // Empty placeholders before month starts
     for (let i = 0; i < firstDay.getDay(); i++) {
       daysArray.push(null);
     }

     // Days of the month
     for (let i = 1; i <= lastDay.getDate(); i++) {
       daysArray.push(new Date(year, month, i));
     }

     return daysArray;
   };

   // Check if this day is TODAY
   const isSameDay = (d1, d2) => {
     return (
       d1 &&
       d1.getFullYear() === d2.getFullYear() &&
       d1.getMonth() === d2.getMonth() &&
       d1.getDate() === d2.getDate()
     );
   };

   // CHange Month
   const handleChangeMonth = (e) => {
     const newMonth = Number(e.target.value);
     setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
   };

   // Change Year
   const handleChangeYear = (e) => {
     const newYear = Number(e.target.value);
     setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
   };

   return (
     <div className="calender">
       <div className="header">
         {/* PREVIOUS MONTH */}
         <button
           onClick={() =>
             setSelectedDate(
               new Date(
                 selectedDate.getFullYear(),
                 selectedDate.getMonth() - 1,
                 1
               )
             )
           }
         >
           ⬅️
         </button>

         {/* MONTH SELECT */}
         <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
           {months.map((month, index) => (
             <option value={index} key={index}>
               {month}
             </option>
           ))}
         </select>

         {/* YEAR SELECT (2020–2025) */}
         <select value={selectedDate.getFullYear()} onChange={handleChangeYear}>
           {Array.from({ length: 6 }, (_, i) => 2020 + i).map((year) => (
             <option value={year} key={year}>
               {year}
             </option>
           ))}
         </select>

         {/* NEXT MONTH */}
         <button
           onClick={() =>
             setSelectedDate(
               new Date(
                 selectedDate.getFullYear(),
                 selectedDate.getMonth() + 1,
                 1
               )
             )
           }
         >
           ➡️
         </button>
       </div>

       <div className="daysofWeek">
         {daysofWeek.map((day) => (
           <div key={day}>{day}</div>
         ))}
       </div>

       <div className="days">
         {getDaysInMonth().map((day, index) => (
           <div
             key={index}
             className={
               day
                 ? isSameDay(day, new Date())
                   ? "day corrent"
                   : "day"
                 : "empty"
             }
           >
             {day ? day.getDate() : ""}
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default App;
