import React, { useState, useEffect } from 'react'
import SalaryFunc from './SalaryFunc'
import Hourly from './Hourly';
import Salary from './Salary';
import Calculator from './SalaryCalculator';

export default function Main() {
    const box = SalaryFunc();

    function handleToggle(id) {
        if (id != box.toggle) {
            box.resetValues()
            box.updateToggle(id)
        }
        
    }
    return (
        <div className='main'>
            <div className='main--containter'>
                <ul className='main--container-ul'>
                    <span></span>
                    <div className='tab'>
                        <li  onClick={() =>handleToggle(0)}>Hourly</li>
                    </div>
                    <div className='tab' >
                        <li onClick={()=>handleToggle(1)}>Salary</li>
                    </div>
                    <span></span>
                </ul>
                <div className="calculations">
                    <Hourly box={box}/>
                    <Salary box={box}/>
                </div>
                <div className='divider'></div>
                <Calculator box={box}/>
                <br />
                <br />
                <div className='divider lower-divider'></div>
                <div className="warning"><small className='warning'><i>Attention: These calculations are rounded. Monetary compensations might differ from whats shown</i></small></div>
            </div>
        </div>
    )
}