import React, { useState } from "react";
import styles from "./Calendar.module.css"; // Importing CSS Module

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const periodDays = [23, 26, 27, 28]; // Example period dates
  const ovulationDays = [30, 31]; // Example ovulation days

  // Get first day and number of days in the month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Handle month navigation
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  // Generate calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className={styles.emptyCell}></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div key={i} className={styles.calendarCell}>
        {i}
        {periodDays.includes(i) && <span className={styles.periodDot}></span>}
        {ovulationDays.includes(i) && <span className={styles.ovulationDot}></span>}
      </div>
    );
  }

  return (
    <div className={styles.calendarContainer}>
      <h2 className={styles.calendarTitle}>When was your last period?</h2>
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarHeader}>
          <button onClick={() => changeMonth(-1)} className={styles.navButton}>&#9665;</button>
          <span className={styles.monthText}>
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </span>
          <button onClick={() => changeMonth(1)} className={styles.navButton}>&#9655;</button>
        </div>
        <div className={styles.weekdays}>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <div key={day} className={styles.weekday}>{day[0]}</div>
          ))}
        </div>
        <div className={styles.daysGrid}>{days}</div>
      </div>
    </div>
  );
};

export default CustomCalendar;


