import { useState } from "react";

export default function SalaryFunc() {
  const [toggle, setToggle] = useState(0);
  const [currentAmount, setAmount] = useState("");
  const [currentWorked, setWorked] = useState("");
  const [currentWeeks, setWeeks] = useState("");
  const [currentPay, setPay] = useState("");

  function updateToggle(id) {
    setToggle(id);
  }

  function updateAmount(number) {
    setAmount(number);
  }
  function updateWorked(number) {
    setWorked(number);
  }
  function updateWeeks(number) {
    setWeeks(number);
  }
  function updatePay(number) {
    setPay(number)
  }
  function resetValues() {
    updateAmount("");
    updateWeeks("");
    updateWorked("");
    updatePay("")
  }

  let box = {
    toggle,
    currentAmount,
    currentWorked,
    currentWeeks,
    currentPay,
    updateToggle,
    updateAmount,
    updateWorked,
    updateWeeks,
    updatePay,
    resetValues
  };
  return box;
}
