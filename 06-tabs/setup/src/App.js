import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading,setLoading] = useState(true);//this shows up before the useEffect fetches the API. i.e to check if we fetched the data successfully.

  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }
  useEffect(() => {
    fetchJobs();
  },[]);
 
  if(loading) {
    return (
      <section className = 'section loading'>
        <h1>loading...</h1>
      </section>
    )
  }
  const {company, dates, duties, title} = jobs[value];//the index of array destructured here depends on the value of the index on the button clicked. On loading the page, it's oing to be 0(the first value)
  return (   
  <section className='section'>
  <div className='title'>
    <h2>experience</h2>
    <div className='underline'></div>
    </div>
    <div className='job-center'>
      {/* btn container */} 
     {jobs.map((item,index) =>{// here you map throught the whole jobs and return a button for a particular key in each obj.
      return (
        <button key={item.id} onClick={() => setValue(index)} className={`job-btn ${ index=== value && 'active-btn'}`}>{item.company}</button>
        )
     })};
     {/*at the end value is changes to the index of the btn that was clicked */}
          {/*job info */}
     <article className='job-info'>
       <h3>{title}</h3>
       <h4>{company}</h4>
       <p className='job-date'>{dates}</p>
       {duties.map((duty,index) => {//the duties of that particular jobs whose value is now the index is destructured here 
         return (
         <div key={index} className='job-desc'>
          <FaAngleDoubleRight className='job-icon'/> 
          <p>{duty}</p>
         </div>
         )
       })}
       </article> 
    </div>  
  </section>
  )
}

export default App
