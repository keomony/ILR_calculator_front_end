import React, { useState, useEffect } from 'react';
import './App.css';
import { CalendarRow } from './components/calendarRow';
import { start, end } from './lib/datesStore';
import { dates } from './lib/datesStore';

const App = () => {

    const [remainingDays] = useState();
    const [calendars, setCalender] = useState([]);

    useEffect(()=>{

    }, [remainingDays])

    const handleAddCalendar = () => {
        calendars.push({});
        setCalender([...calendars]);
    }

    const removeCalendar = (calendarIndex) => {
        calendars.splice(calendarIndex, 1);
        onRemoveCalendar(calendarIndex);
        setCalender([...calendars]);
    }

    const collectRemainingDays = (calendarIndex, remainingDays) => {
      calendars[calendarIndex].remainingDays = remainingDays;
      setCalender([...calendars]);
    }

    const onRemoveCalendar = (calendarIndex) => {
      console.log("App -->dates: ", dates);
      if(dates) {
        // dates.splice(calendarIndex, 1);
        console.log("not null dates: ", dates);
        
      }
    }
    
    return (
        <div>
          <h3 align="center"> Tier 2 visa holder: Indefinite Leave to Remain </h3>

          {calendars.map((c, index) => {
              return (<div key={index}>
                        <CalendarRow updateStartDate={start} updateEndDate={end} id={index} setRemainingDays={collectRemainingDays} />
                        <button onClick={()=>{removeCalendar(index)}}>remove</button>
                      </div>)
          })}
          <div>The remaining days: {calendars.length && calendars[calendars.length - 1].remainingDays}</div>
          <div><button onClick={handleAddCalendar}>add calendar</button></div>
        </div>
    );
}

export default App;
