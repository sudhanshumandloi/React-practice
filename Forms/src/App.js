import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState({
    firstName: '', 
    lastName: '', 
    yourEmail: '', 
    country:'',
    city:'',
    street:'',
    isVisible:true, 
    mode:''
  });
  
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
      <div className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto shadow-md my-5">
        <form onSubmit={submitHandler}
          className=' flex flex-col'>

          <label htmlFor='firstname'
            className='font-medium text-sm'>First Name</label>
          <input 
            type='text' 
            name='firstName'
            id='firstname'
            placeholder={"Your First Name"} 
            onChange={changeHandler}
            value={formData.firstName} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <label htmlFor='lastname'
            className='font-medium text-sm'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastname'
            placeholder={"Your Last Name"} 
            onChange={changeHandler}
            value={formData.lastName} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <label htmlFor='email'
            className='font-medium text-sm'>Email Address</label>
          <input
            type='email' 
            name='yourEmail'
            id='email'
            placeholder={"Enter your Email"} 
            onChange={changeHandler}
            value={formData.yourEmail} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <label htmlFor='country'
            className='font-medium text-sm'>Country</label>
          <select
            name='country'
            id='country'
            onChange={changeHandler}
            value={formData.country}
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3' >

            <option value={'india'}>India</option>
            <option value={'pakistan'}>Pakistan</option>
            <option value={'usa'}>USA</option>
            <option value={'shrilamka'}>Shri Lanka</option>
            <option value={'uae'}>UAE</option>
          </select>

          <label htmlFor='city'
            className='font-medium text-sm'>City</label>
          <input
            type='text' 
            name='yourcity'
            id='city'
            placeholder={"Enter your city"} 
            onChange={changeHandler}
            value={formData.city} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <label htmlFor='street'
            className='font-medium text-sm'>Street Address</label>
          <input
            type='text' 
            name='yourstreet'
            id='street'
            placeholder={"street address"} 
            onChange={changeHandler}
            value={formData.street} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <label htmlFor='state'
            className='font-medium text-sm'>State / Province</label>
          <input
            type='text' 
            name='yourstate'
            id='state'
            placeholder={"Enter state name"} 
            onChange={changeHandler}
            value={formData.street} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

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

      <br />
      <br />

      <button>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
