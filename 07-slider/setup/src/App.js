import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);
  

  useEffect(() => {
    const lastIndex = people.length -1;
    if (index < 0 ){
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  },[index,people]);

  useEffect(() => {
    let slider = setInterval(() => {setIndex(index + 1)}, 3000);
    return () => clearInterval(slider);
  },[index]);

  // What I think is happening with the second useEffect.
  
    // 1. WHY IT WILL WORK WITHOUT THE CLEANUP FUNCTION
            // The useEffect hook works perfectly fine without the cleanup func if the buttons werent clicked at all.

    // 2. WHY IT WONT WORK WHEN THE BUTTONS ARE CLICKED MULTIPLE TIMES WITHOUT THE CLEANUP FUNC.
           //On multiple clicks, the useEffect is invoked (because according to its func it should be called when the index changes). Therfore, causing multiple setInterval calls which then piles up and causes pandemonium(hahaha) in the browser!


    return (
  <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className='section-center'>
      {people.map((person,personIndex) =>{
        const {id,image,name,title,quote} = person;
        // more stuff coming up here
     let position = 'nextSlide';

     if(personIndex === index) {
       position = 'activeSlide'
     }
     if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
       position = 'lastSlide';
     }

     //explanation of the if conditionals above:
      
       // 1. if the index of the first item in the array is equal to the index value in the useState, it sshould have a class of activeSlide. i.e it should show on the screen.

       // 2. when the index of item in the array is less than the current index. It should have a class of lastSlide. i.e as the index increases, the lessser ones should have a class of lastSlide. Or when on the initial load the last item in the array, i.e people.legth - 1, should have a class of lastSlide

        return (
        <article className={position} key={id}>
          <img src={image} alt={name} className='person-img'/>
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon' />
        </article>
        );
      })}
      <button className='prev' onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
       <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  </section>
  );
}

export default App;
