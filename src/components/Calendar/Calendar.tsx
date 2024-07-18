import React, { useState } from "react";
import './index.css'

export interface CalendarProps {
    Date: Date
}

export const Calendar = (props: CalendarProps) => {

    const [date, setDate] = useState(props.Date);

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }

    const monthName = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];



    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <div>{date.getFullYear()}年{monthName[date.getMonth()]}</div>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="days">
                <div className="day">日</div>
                <div className="day">一</div>
                <div className="day">二</div>
                <div className="day">三</div>
                <div className="day">四</div>
                <div className="day">五</div>
                <div className="day">六</div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="day">1</div>
                <div className="day">2</div>
                <div className="day">3</div>
                <div className="day">4</div>
                <div className="day">5</div>
                <div className="day">6</div>
                <div className="day">7</div>
                <div className="day">8</div>
                <div className="day">9</div>
                <div className="day">10</div>
                <div className="day">11</div>
                <div className="day">12</div>
                <div className="day">13</div>
                <div className="day">14</div>
                <div className="day">15</div>
                <div className="day">16</div>
                <div className="day">17</div>
                <div className="day">18</div>
                <div className="day">19</div>
                <div className="day">20</div>
                <div className="day">21</div>
                <div className="day">22</div>
                <div className="day">23</div>
                <div className="day">24</div>
                <div className="day">25</div>
                <div className="day">26</div>
                <div className="day">27</div>
                <div className="day">28</div>
                <div className="day">29</div>
                <div className="day">30</div>
                <div className="day">31</div>
            </div>
        </div>
    )
}