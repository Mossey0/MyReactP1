import React from "react";

export default function Hourly({ box }) {
  return (
    <div
      className={box.toggle === 0 ? "content-show salary" : "no-content salary"}
    >
      <h3>Hourly</h3>
      <p>
        A role that's paid hourly doesn't come with a set or target annual pay.
        Instead, an employer pays an employee based on how many hours they work
        each pay period, which might be a week, two weeks, half a month or a
        month.
      </p>
      <ul>
        <li>
          <label for="hourPay">Hour Rate($)</label>
          <br />
          <input
            type="number"
            name="hourPay"
            id="hourPay"
            value={box.currentPay}
            onChange={(e) => box.updatePay(e.target.value)}
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
          <label for="weeks">Number of weeks worked</label>
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
