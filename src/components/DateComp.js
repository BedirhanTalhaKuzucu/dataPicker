import React, { useEffect, useMemo, useState } from 'react'
import './style.css'


const DateComp = ({ value, nextMonth, months, dateindex, prevMonth }) => {
    const [date, setdate] = useState()
    const [startdate, setstartdate] = useState()
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
   
    const time = () => {
        
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
    }
    // console.log(time());

    const timeShow = time()
        
  


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
        <div>
            <table className='table table-bordered '>
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
                    {listdate?.map((x, i) => <Satir key={"r" + i} dates={x} />)}
                </tbody>
            </table>
        <button onClick = { prevMonth }>Prev</button>
        { months[dateindex] }
        <button onClick = { nextMonth }>Next</button>
        <br /><br />
            <div className="scroll-container">
                {timeShow.map((item, index)=> 
                <div className="scroll-page" id="page-1" key={index}> 
                {item}  
                </div> )}
                
            </div>
        </div>
        
    )

}

export default DateComp;


const Satir = ({ dates }) => {
    // const handleClick = (x) => {
    //     console.log(x)
    // }
    // console.log(dates);

    return (
        <tr>
            {dates.map((x, i) => <td key={"g" + i} className="text-center">{new Date(x).getDate()}</td>)}
        </tr>
    )
}