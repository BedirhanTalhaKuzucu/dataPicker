
import { useState } from 'react';
import './App.css';
import DateComp from './components/DateComp';



function App() {
  const monthsList = [
    "January",	
    "February",	
    "March",	
    "April",	
    "May",	
    "June",	
    "July",	
    "August",	
    "September",	
    "October",	
    "November",
    "December",
  ]
  const [months, setMonths] = useState(monthsList)
  
  const [dateindex, setdateIndex] = useState(5)
  const [years, setYears] = useState(2022)

  const nextMonth = () => {
    setdateIndex( dateindex + 1)
    console.log(dateindex);
    if (dateindex === 11) {
      setdateIndex(0)
      setYears(years+1)
    }
  }

  const prevMonth = () => {
    setdateIndex( dateindex - 1)
    console.log(dateindex);

    if (dateindex === 0) {
      setdateIndex(11)
      setYears(years-1)
    }
  }

  const tableMonths = months[dateindex]
  console.log(tableMonths);
  
  const dt = new Date(months[dateindex] + " 1, " + years)
  return (
    <DateComp value={dt} 
    nextMonth = { nextMonth } months = { months} dateindex={dateindex}
    prevMonth={prevMonth}
    years ={years}
    tableMonths = {tableMonths} />
  );
}
export default App;

