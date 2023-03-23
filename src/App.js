import './App.css';

import React from 'react';
import Calendar from './Calendar';

function App() {
  const someDate = new Date('2023-03-15');
  return (
    <div>
      <Calendar date={someDate} />
    </div>
  );
}

export default App;
