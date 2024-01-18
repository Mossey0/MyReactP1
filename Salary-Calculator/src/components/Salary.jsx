import React from "react";
import { useState } from "react";

export default function Salary({ box }) {
  function calculate() {
    const hourlyPay = currentAmount / (currentWeeks * currentWorked);
  }
  return (
    <div
      className={box.toggle === 1 ? "content-show salary" : "no-content salary"}
    >
      <h3>Salary</h3>
      <p>
        A fixed regular payment, typically paid on a monthly or biweekly basis
        but often expressed as an annual sum, made by an employer to an
        employee, especially a professional or white-collar worker.
      </p>
      <ul>
        <li>
          <label for="amount">Yearly Amount</label>
          <br />
          <input
            type="number"
            name="amount"
            id="amount"
            value={box.currentAmount}
            onChange={(e) => box.updateAmount(e.target.value)}
          />
        </li>
        <li>
          <label for="worked">Hours Worked Per Week</label>
          <br />
          <input
            type="number"
            name="worked"
            id="worked"
            value={box.currentWorked}
            onChange={(e) => box.updateWorked(e.target.value)}
          />
        </li>
        <li>
          <label for="weeks">Number Of Weeks Worked</label>
          <br />
          <input
            type="number"
            name="weeks"
            id="weeks"
            value={box.currentWeeks}
            onChange={(e) => box.updateWeeks(e.target.value)}
          />
        </li>
      </ul>
    </div>
  );
}
