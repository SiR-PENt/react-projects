import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//new set function used below return a set of unique properties in an object

const allCategories = ['all', ...new Set(items.map(item => item.category))];

// the map function iterates through the items array and returns each category in the object. after doing this, new set extracts them uniquely. i.e there's no two category appearing for each category

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);
  const filterItems = (category) => {
    let filtered = items.filter(item => item.category === category);
    if (category === 'all'){
      filtered = items;
    }
    setMenuItems(filtered);
  }
  return (
     <main>
     <section className='menu section'>
       <div className = 'title'>
         <h2>our menu</h2>
         <div className='underline'></div>
       </div>
       <Categories categories={categories} filterItems={filterItems}/>
       <Menu items = {menuItems}/>
     </section>
     </main>
  )
 }

export default App;
