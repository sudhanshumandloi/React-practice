import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [yourEmail, setYourEmail] = useState('');

  const changeFirsthandler = (event) => {
    // console.log("first Name is");
    // console.log(event.target.value);
    setFirstName(event.target.value);
  };
  
  const changeLasthandler = (event) => {
    // console.log("last Name is");
    // console.log(event.target.value);
    setLastName(event.target.value);
  };
  
  const changeEmailhandler = (event) => {
    // console.log("first Name is");
    // console.log(event.target.value);
    setYourEmail(event.target.value);
  };

  return (
    <div className='App'>
      <input type='text' placeholder={"Your First Name"} onChange={changeFirsthandler} />
      <br />
      <br />
      <input type='text' placeholder={"Your Last Name"} onChange={changeLasthandler} />
      <br />
      <br />
      <input type='email' placeholder={"Enter your Email"} onChange={changeEmailhandler} />
    </div>
  );
}

export default App;
