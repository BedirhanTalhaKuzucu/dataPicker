import React, { useEffect, useMemo, useState } from 'react'
import './style.css'
import Table from 'react-bootstrap/Table'


const DateComp = ({ value, nextMonth, prevMonth, years, tableMonths }) => {
    const [date, setdate] = useState()
    const [startdate, setstartdate] = useState()
    const [selectedDate, setselectedDate] = useState(" please select a Date")
    const [hours, setHours] = useState("please select time")
    


    //const [listDate,setListDate]=useState([])
    useEffect(() => {
        if (value) {
            const stdate = new Date(value.getFullYear(), value.getMonth(), 1)
            // console.log(stdate.getDate());
            // console.log(stdate);
            const hsayi = stdate.getDay()
            // console.log(stdate.getDate() - hsayi);
            setstartdate(new Date(stdate.setDate(stdate.getDate() - hsayi + 1)))
            setdate(value)
        }
    }, [value])

    const showHours = (e) => {
        setHours(
            e.target.textContent
        )
    }

    
   
  
    // console.log(time());

    const timeShow = useMemo(()=> {
            const hourList=[]
            for (let i = 0; i < 24; i++) {
                const hour = String(i) 
                // const minuteList= []
                let k = 0
                for (let j = 0; j < 4; j++) {
                    const minute = String(k)
                    hourList.push(hour + ":" +minute)
                    k = k +15
                }
                
            }
            return hourList
        
    }) 
    

    const listdate = useMemo(() => {

        const newList = []
        let satir = []

        let k = 0
        if (startdate) {
            for (let i = 0; i < 6; i++) {
                satir = []
                for (let j = 0; j < 7; j++) {
                    const dt = new Date(startdate)
                    satir.push(dt.setDate(dt.getDate() + k))
                    k++
                }
                newList.push(satir)

            }
        }
        return newList

    }, [startdate])
    // console.log(listdate);
    // console.log(new Date(1640473200000));



    return (
        <div className='main'>
            <div> 
                <h3>   show date : {selectedDate} ; {hours} </h3>
            </div>
            <button onClick = { prevMonth }>Prev</button>
                    { tableMonths }, {years}
            <button onClick = { nextMonth }>Next</button>
            <div className='tablePart'>
                
                {/* <table className='table table-bordered ' > */}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Pazartesi</th>
                            <th>Salı***</th>
                            <th>Çarşamba***</th>
                            <th>Perşembe***</th>
                            <th>Cuma***</th>
                            <th>Cumartesi**</th>
                            <th>Pazar**</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listdate?.map((x, i) => <Satir key={"r" + i} dates={x} years={years} tableMonths = {tableMonths}
                        setselectedDate = {setselectedDate }  />)}
                    </tbody>
                </Table>
                <div className="scroll-container">
                    {timeShow.map((item, index)=> 
                    <div className="scroll-page" id="page-1" key={index}>
                        <button className='buttonlist' onClick={(e)=> showHours(e)} >    {item}  </button> 
                    </div> )}
                </div>
            </div>
        </div>
        
    )

}

export default DateComp;


const Satir = ({ dates, years, setselectedDate, tableMonths }) => {
   
    const showDate= (e) => {
        console.log(e.target.textContent);
        const tag = e.target.textContent
        const selectedDate =  tableMonths + " " + tag + "," + years
        setselectedDate(selectedDate)
    }

    return (
        <tr>
            {dates.map((x, i) => 
            <td key={"g" + i} className="text-center">
                <button onClick={(e)=> showDate(e)}> {new Date(x).getDate()} </button>    
            </td>)}
        </tr>
    )
}