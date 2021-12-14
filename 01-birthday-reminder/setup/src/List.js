import React from 'react';
// the object people is then destructured directly in the function argument. N.B we can also access it as props.people

// Props is an object. Any props added to the component becomes a key of the props object. Make sense?
const List = ({people}) => {
  return (
    <>
    {people.map(person => {
      const {id, name, age, image} = person;
      return (
        <article key={id} className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      );
      })} 
    </>
    //in the return, the people keys are being added to the html dynamically as argument 

    // Question: Why doesnt map return an array we have to join later here. It does that when you use vanilla js.
  );
};

export default List;
