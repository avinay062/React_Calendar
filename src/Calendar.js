import React from 'react';

function Calendar({ date }) {
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const endDay = new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const blankDaysBefore = [];
  for (let i = 0; i < startDay; i++) {
    blankDaysBefore.push('');
  }

  const blankDaysAfter = [];
  for (let i = 0; i < endDay; i++) {
    blankDaysAfter.push('');
  }

  const allDays = [...blankDaysBefore, ...days, ...blankDaysAfter];

  const weeks = [];
  while (allDays.length > 0) {
    weeks.push(allDays.splice(0, 7));
  }

  return (
    <table className="table-color">
      <thead>
        <tr>
          <th colSpan="7" className='text-color'>{date.toLocaleDateString('en-us', { month: 'long', year: 'numeric' })}</th>
        </tr>
        <tr className='text-color'>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody className='text-color'>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => (
              <td key={j} className={day === date.getDate() ? 'today' : ''}>
                {day}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;