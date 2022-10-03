import React from 'react'
import {FcPrevious} from 'react-icons/fc'
import {FcNext} from 'react-icons/fc'
import {MdOutlineDateRange} from 'react-icons/md'
import {AiOutlineDown} from 'react-icons/ai'

import "../styles/header.css"
import '../styles/calender.css'

const arrayHeader = [{day:"Sun",date:10},{day:"Sun",date:11},{day:"Sun",date:12},{day:"Sun",date:13},
{day:"Sun",date:14},{day:"Sun",date:15},{day:"Sun",date:16}]

const arraySameTimeDiffDay  = ["10","11","12","13","14","15","16"];
const arrayDiffTime  = ["00:00 AM","01:00 AM","02:00 AM","03:00 AM","04:00 AM","05:00 AM","06:00 AM"];


const Calender = () => {
    let currDateNumber = Date.now();
    let currDate = new Date(currDateNumber);
    let startDateNumber = Date.now() - currDate.getDay()*86400000;
    let startDate = new Date(startDateNumber);
    let endtDateNumber = Date.now() + (6-currDate.getDay())*86400000;
    let endDate = new Date(endtDateNumber);
  return (
    <div>
        <nav id='navbar'>
            <div id="logo">TimeLine</div>
            <div id="others">
                <div className="weekMonthBox">
                    <div className="calenderIcon"><MdOutlineDateRange /></div>
                    <div className="type">Week</div>
                    <div className="down"><AiOutlineDown /></div>
                </div>
                <div className="dateRange">10 dec 2019- 16dec 2019</div>
                <div className="prevNextBtn">
                    <div className="prev"><FcPrevious /></div>
                    <div className="next"><FcNext /></div>
                </div>
            </div>
        </nav>
        <div id='calenderBox'>
            <div id="headerCalender" className='d-flex'>
                <div className='heading'></div>
                {arrayHeader.map((items)=>(
                    <div className='heading'>
                        <div className="day">{items.day}</div>
                        <div className="date">{items.date}</div>
                    </div>
                ))}
            </div>
            <div id="contentCalender">
                {arrayDiffTime.map((timesItem)=>(
                    <div className="slots">
                        <div className="time box" style={{border:'none'}}>09:00 AM</div>
                        {arraySameTimeDiffDay.map((dayItem)=>(
                            <div className='box'></div>
                        ))}
                    </div>
                ))}
            </div>        
        </div>
    </div>
  )
}

export default Calender