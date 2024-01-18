import React from "react";
import { useState, useEffect } from "react";

export default function Calculator({box}) {

    const [currentAnnualSal, setAnnualSal] = useState(0);
    const [currentWeeklySal, setCurrentWeeklySal] = useState(0);
    const [currentMonthlySal, setCurrentMonthlySal] = useState(0);
    const [currentByWeeklySal, setCurrentByWeeklySal] = useState(0);
    const [currentHourlyPay, setCurrentHourlyPay] = useState(0)

    useEffect(function () {
        let newAnnualSal =  box.currentWorked * box.currentWeeks * box.currentPay;
        if (box.currentPay == 0 || box.currentAmount == 0 || box.currentWeeks == 0){
            setCurrentHourlyPay(0)
        }
        if (box.currentAmount > 0 && box.currentWeeks > 0 && box.currentWorked > 0){
            const newCurrentPay = (box.currentAmount) / (box.currentWeeks * box.currentWorked)
            setCurrentHourlyPay(newCurrentPay)
            newAnnualSal = box.currentWorked * box.currentWeeks * newCurrentPay;
        }
        if (box.currentPay > 0) {
            setCurrentHourlyPay(box.currentPay)
        }
        
        setAnnualSal(newAnnualSal);
        setCurrentByWeeklySal(newAnnualSal/12/2);
        setCurrentMonthlySal(newAnnualSal/12);
        setCurrentWeeklySal(newAnnualSal/12/4);
        
    }, [box.currentPay,box.currentWeeks,box.currentWorked,box.currentAmount])

    return (
        <div className="calculated-salary calculations">
            <h2>Annual Salary: {Math.round(currentAnnualSal).toLocaleString('en-US')}</h2>
            <h2>Montly Income: {Math.round(currentMonthlySal).toLocaleString('en-US')}</h2>
            <h2>ByWeekly Income: {Math.round(currentByWeeklySal).toLocaleString('en-US')}</h2>
            <h2>Weekly Income: {Math.round(currentWeeklySal).toLocaleString('en-US')}</h2>
            <h2>Hourly Pay: {Math.round(currentHourlyPay).toLocaleString('en-US')}</h2>
        </div>
    )
}