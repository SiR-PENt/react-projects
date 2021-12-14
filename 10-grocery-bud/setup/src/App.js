import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){//if list is not empty
    return JSON.parse(localStorage.getItem('list'));// the JSON data received from the server is in string format. Therefore, we have to parse it to return an object.
  }
  return []
}
function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({show:false, msg:'', type:''});

  const showAlert = (show,msg,type) => {
      setAlert({show,msg,type});
  }
  const clearItems = () => {
    showAlert(true,'empty list','danger');
    setList([]);
  }
  const removeItem = (id) => {
    showAlert(true,'item deleted','danger')
    const filtered = list.filter(item => item.id !== id );
    setList(filtered);//the array returned by the filter method contains a list of items that do not contain the same id as that which was clicked
  }

  const editItem = (id) => {
     const specificItem = list.find(item => item.id === id);
     setIsEditing(true);
     setEditID(id);
     setName(specificItem.title);
     // this function finds the item that has the same id as the one that was clicked.
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      //diplay alert
      showAlert(true,'please input a value','danger')
    }
    else if(name && isEditing){
      // display alert
      setList(
        list.map(item =>{
          if(item.id === editID){
            return {...item, title:name}
          }
          return item;
        })//loop through the array and return each item normally. But when the item is the sane as the id return a neew value for the name
      )
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true,'item editted successfully','success')

    }
    else {
      // when inputing a new value
      showAlert(true,'items added successfully','success')
      const newItem = {title:name, id:new Date().getTime().toString()};
      setList([...list,newItem]);
      setName('');
    }
  }
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  },[list])// the browser's localStorage stores data in a key, value pair. Data sent to  a server has to be a string hence JSON.stringify(). UseEffect stores the data in the localStorage as the list changes.
  
      return <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
         {/* if alert.show is true, display the alert component */}

         <h3>grocery bud</h3>

         <div className='form-control'>
           <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)
           }/>

           <button type='submit' className='submit-btn'>
             {isEditing ? 'edit':'submit'}
           </button>
         </div>
        </form>
        {list.length > 0 && (
         <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button onClick={clearItems} className='clear-btn'>
            clear items
          </button>
        </div>
        )
        }
       
        </section>
}

export default App
