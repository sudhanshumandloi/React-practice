import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState( 
    {firstName: '', lastName: '', yourEmail: '', comments: '', isVisible:true, mode:''})
  console.log(formData);
  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( prevFormaData => {
      return {
        ...prevFormaData,
        [name]: type === "ckeckbox" ? checked : value
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

      <br />
      <br />

      <input 
        type='radio'
        onChange={changeHandler}
        name='mode'
        id ="online-mode"
        value={'online-mode'}
        checked={formData.mode === "online-mode"}/>
      <label htmlFor='online-mode'>Online-mode</label>

      <input 
        type='radio'
        onChange={changeHandler}
        name='mode'
        id ="offline-mode"
        value={'offline-mode'}
        checked={formData.mode === "offline-mode"}/>
      <label htmlFor='offline-mode'>Offline-mode</label>

      </form>
    </div>
  );
}

export default App;
