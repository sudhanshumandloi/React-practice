import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState({
    firstName: '', 
    lastName: '', 
    email: '', 
    country:'',
    city:'',
    street:'',
    state:'',
    zipcode:'',
    comment:true,
    candidate:false,
    offer:false,
    notification:''
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
            name='email'
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
            name='city'
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
            name='street'
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
            name='state'
            id='state'
            placeholder={"Enter state name"} 
            onChange={changeHandler}
            value={formData.state} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <label htmlFor='zipcode'
            className='font-medium text-sm'>ZipCode / PostalCode</label>
          <input
            type='text' 
            name='zipcode'
            id='zipcode'
            placeholder={"Enter zipcode of your area"} 
            onChange={changeHandler}
            value={formData.zipcode} 
            className='w-full border border-blue-400 rounded-md p-2 mt-1 mb-3'
          />

          <fieldset>
            <legend className='font-medium text-sm'>By Email</legend>
            <div className='flex flex-row gap-1'>
              <input 
                type='checkbox'
                name='comment'
                id='comment'
                onChange={changeHandler}
                checked={formData.comment}
              />
              <div className='m-2'>
                <label htmlFor='comment'
                className='font-medium text-sm'>Comments</label>
                <p className='text-sm text-gray-500'>Get notified when someones posts a comment on a posting.</p>
              </div> 
            </div>

            <div className='flex flex-row gap-1'>
              <input 
                type='checkbox'
                name='candidate'
                id='candidate'
                onChange={changeHandler}
                checked={formData.candidate}
              />
              <div className='m-2'>
                <label htmlFor='candidate'
                className='font-medium text-sm'>Candidates</label>
                <p className='text-sm text-gray-500'>Get notified when a candidate applies for a job.</p>
              </div> 
            </div>

            <div className='flex flex-row gap-1'>
              <input 
                type='checkbox'
                name='offer'
                id='offer'
                onChange={changeHandler}
                checked={formData.offer}
              />
              <div className='m-2'>
                <label htmlFor='offer'
                className='font-medium text-sm'>Offers</label>
                <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
              </div> 
            </div>
          </fieldset>
      

          <fieldset>
            <legend className='font-medium text-sm'>Push Notification</legend>
            <p className='text-sm text-gray-500'>These are delivered via sms to your mobile phone</p>
            <input 
              type='radio'
              name='notification'
              id ="everything"
              onChange={changeHandler}
              value={'everything'}
              checked={formData.notification === "everything"}
            />
            <label htmlFor='everything'
            className='font-medium text-sm mx-2'>Everything</label>

            <br />
            
            <input 
              type='radio'
              name='notification'
              id ="same_as_email"
              onChange={changeHandler}
              value={'same_as_email'}
              checked={formData.notification === "same_as_email"}/>
              <label htmlFor='same_as_email'
              className='font-medium text-sm mx-2'>Same as email</label>

              <br />

              
            <input 
              type='radio'
              name='notification'
              id ="no_push_notification"
              onChange={changeHandler}
              value={'no_push_notification'}
              checked={formData.notification === "no_push_notification"}/>
              <label htmlFor='no_push_notification'
              className='font-medium text-sm mx-2'>No push notification</label>

          </fieldset>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
