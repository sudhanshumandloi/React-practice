import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState( 
    {firstName: '', lastName: '', yourEmail: '', isVisible:true, mode:'', favCar:''})
  
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
    <div className='w-full mx-auto'>
    <div className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto shadow-md">
      <form onSubmit={submitHandler}
      className=' flex flex-col gap-2'>
      <label htmlFor='firstname'
      className='font-medium text-sm'>First Name</label>
      <input 
        type='text' 
        name='firstName'
        id='firstname'
        placeholder={"Your First Name"} 
        onChange={changeHandler}
        value={formData.firstName} 
        className='w-full border border-blue-400 rounded-md p-2 mt-1'/>

      <input
        type='text'
        placeholder={"Your Last Name"} 
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName} />

      <input type='email' 
        placeholder={"Enter your Email"} 
        onChange={changeHandler}
        name='yourEmail'
        value={formData.yourEmail} />

      <input 
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}/>
      <label htmlFor='isVisible'>Am i Visible</label>

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
    </div>
  );
}

export default App;
