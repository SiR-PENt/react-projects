import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));
   
  const handleSubmit = (e) => {
     e.preventDefault();
     try {
     let colors = new Values(color).all(10);
     setList(colors); // the list is updated here.
     } 
     //values.js throws an error on the screen if the input isnt a color. Therefore, catch is used to prevent that. It displays it simply as a console.log.(Gon' read more on it sha)
     catch (error) {
       setError(true);
       console.log(error);
     }  
  }

  return <>
  <section className='container'>
   <h3>color generator</h3>
   <form onSubmit={handleSubmit}>
    <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' className={`${error &&'error'}`}/>
    <button className='btn' type='submit'>
       submit
    </button>
   </form>

  </section>

  <section className='colors'>
    {list.map((color, index) => {   
      return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
    })}
  </section>
    {/* the list is iterated through here. on each iteration the singleColor component is returned */}
  </>
}

export default App
