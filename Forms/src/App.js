import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [yourEmail, setYourEmail] = useState('');

  // const changeFirsthandler = (event) => {
  //   // console.log("first Name is");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // };
  
  // const changeLasthandler = (event) => {
  //   // console.log("last Name is");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // };
  
  // const changeEmailhandler = (event) => {
  //   // console.log("first Name is");
  //   // console.log(event.target.value);
  //   setYourEmail(event.target.value);
  // };

  const [formData, setFormData]= useState( {firstname: '', lastName: '', yourEmail: ''})
  console.log(formData.yourEmail);
  function changeHandler(event){
    setFormData( prevFormaData =>{
      return {
        ...prevFormaData,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className='App'>
      <input 
        type='text'
        placeholder={"Your First Name"} 
        onChange={changeHandler} 
        name='firstName' />
      <br />
      <br />
      <input
        type='text'
        placeholder={"Your Last Name"} 
        onChange={changeHandler}
        name='lastName' />
      <br />
      <br />
      <input type='email' 
        placeholder={"Enter your Email"} 
        onChange={changeHandler}
        name='yourEmail' />
    </div>
  );
}

export default App;
