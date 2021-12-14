import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  return (
  <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}> clear all </button>
      </section>
  </main>
  );
}

export default App;


// people is given the data array in useState

// here we give list to be rendered a prop of the object #people which is then destuctured in the list.js file. 

// P.S the list.js file is rendered here.
