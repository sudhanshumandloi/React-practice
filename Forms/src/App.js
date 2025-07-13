import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState( 
    {firstName: '', lastName: '', yourEmail: '', comments: '', isVisible:true, mode:'', favCar:''})
  
  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( prevFormaData => {
      return {
        ...prevFormaData,
        [name]: type === "ckeckbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finaly printing the entire data of form..");
    console.log(formData);
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
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

      <fieldset>
        <legend>Mode</legend>
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
      </fieldset>

      <label htmlFor='favcar'>Your favourite car is </label>
      <select
      onChange={changeHandler}
      value={formData.favCar}
      name='favCar'
      id='favCar' >
        <option value={'scarpio'}>Scarpio</option>
        <option value={'xuv700'}>XUV 700</option>
        <option value={'bolero'}>Bolero</option>
        <option value={'safari'}>Safari</option>
        <option value={'harrier'}>Harrier</option>
      </select>

      <br />
      <br />

      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
