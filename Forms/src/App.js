import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState( {firstName: '', lastName: '', yourEmail: '', comments: '', isVisible:true})
  console.log(formData);
  function changeHandler(event){
    setFormData( prevFormaData => {
      return {
        ...prevFormaData,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className='App'>
      <form>
      <input 
        type='text'
        placeholder={"Your First Name"} 
        onChange={changeHandler} 
        name='firstName'
        value={formData.firstName} />

      <br />
      <br />

      <input
        type='text'
        placeholder={"Your Last Name"} 
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName} />

      <br />
      <br />

      <input type='email' 
        placeholder={"Enter your Email"} 
        onChange={changeHandler}
        name='yourEmail'
        value={formData.yourEmail} />

      <br />
      <br />

      <textarea 
        placeholder='Add coments'
        onChange={changeHandler}
        name='comments'
        value={formData.comments} />

      <br />
      <br />

      <input 
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}/>
        <label htmlFor='isVisible'>Am i Visible</label>
      </form>
    </div>
  );
}

export default App;
