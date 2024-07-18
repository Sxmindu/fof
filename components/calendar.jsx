'use client'

import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {

    const timestamp = new Date();

    const today = timestamp.getDate();
    const current_month = timestamp.getMonth();
    const current_year = timestamp.getFullYear();

    const [toggle, setToggle] = useState({state: false, id: Infinity});
    const [month, setMonth] = useState(current_month);
    const [year, setYear] = useState(current_year);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    //get the current date in Sri Lanka
    const week = [0, 1, 2, 3, 4, 5];
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];


    //check the first day of the month and add null values to the array
    const [dates, setDates] = useState([]);

    useEffect(() => {

        let firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const array = [];

        if (firstDay === 0) {firstDay = 7}

        for (let i = 1; i < firstDay; i++) {
            array.push(null);
        }

        //add the dates of the month to the array
        for (let i = 1; i <= lastDate; i++) {
            array.push(i);
        }

        //check the last day of the month and add null values to the array
        for (let i = 1; i <= 7 - new Date(year, month, lastDate).getDay(); i++) {
            array.push(null);
        }

        console.log(months[month] , "|", array)

        setDates(array)

    }, [month, year]);

    const Schedule = (props) => {

        const {id, children} = props;

        if (!children) {
            return null;
        } else {
            return (
                <div id={id}
                     className={`${toggle.state && toggle.id === id ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-300 absolute ${id % 7 === 0 ? "left-[90%]" : id % 7 === 6 ? "left-[10%]" : "left-[50%]"} translate-x-[-50%] translate-y-0 bg-white mt-2 border-[1px] rounded-lg p-[0.4rem] w-[10rem] z-[1000]`}>
                    {
                        children.map((child, index) => (
                            <p key={index}>{child}</p>
                        ))
                    }
                </div>
            );
        }
    }

    const flag = year === current_year && month === current_month;

    return (
        <div className="flex items-center justify-center py-8 px-4 w-[40%]">
            {/*<div className="2xl:w-[40%] xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full">*/}
            <div className="w-full">
                <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t">
                    <div className="px-4 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-primary">{months[month]} {year}</h1>
                        <div className="flex items-center text-gray-800 dark:text-gray-100">
                            {
                                flag ?
                                <></> : <FontAwesomeIcon icon={faChevronLeft} width={24} height={24} className={`cursor-pointer`} onClick={() => {
                                        setMonth(month === 0 ? 11 : month - 1)
                                        month === 0 ? setYear(year - 1) : null
                                    }}/>
                            }
                            <FontAwesomeIcon icon={faChevronRight} width={24} height={24} className={`cursor-pointer`} onClick={() => {
                                setMonth((month + 1) % 12)
                                month === 11 ? setYear(year + 1) : null
                            }}/>
                        </div>
                    </div>
                    <div className={"flex items-center justify-between pt-12 overflow-x-auto"}>
                        <table className="w-full">
                            <thead>
                            <tr>
                                {
                                    days.map((day, index) => (
                                        <th key={index}>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-bold text-center text-primary">{day}</p>
                                            </div>
                                        </th>
                                    ))
                                }
                            </tr>
                            </thead>
                            <tbody>
                            {
                                week.map((week, index) => (
                                    <tr key={index}>
                                        {
                                            dates.slice(week * 7, (week + 1) * 7).map((date, index) => (
                                                <td
                                                    key={index}
                                                    className={`pt-6`}
                                                >
                                                    {/*{*/}
                                                    {/*    date !== today ?*/}
                                                            <div
                                                                className={`px-4 py-4 ${ date < today && flag ? "cursor-default" : "cursor-pointer"} flex w-full justify-center `}
                                                                onMouseEnter={() => setToggle({state: true, id: date})}
                                                                onMouseLeave={() => setToggle({
                                                                    state: false,
                                                                    id: date
                                                                })}>
                                                                <p className={`text-2xl ${ date < today && flag ? "text-lightGray" : "text-primary"} font-medium`}>{date}</p>
                                                            </div>
                                                    {/*//         :*/}
                                                    {/*//         <div className="w-full h-full">*/}
                                                    {/*//             <div*/}
                                                    {/*//                 className="flex items-center justify-center w-full rounded-full cursor-pointer">*/}
                                                    {/*//                 <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium bg-secondary hover:bg-darkcream text-white rounded-full">{date}</p>*/}
                                                    {/*//             </div>*/}
                                                    {/*//         </div>*/}
                                                    {/*// }*/}
                                                    {/*<Schedule id={date}>{value[date]}</Schedule> /!* Use date as the id *!/*/}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Calendar;