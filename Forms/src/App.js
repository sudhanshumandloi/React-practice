import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');

  const changehandler = (event) => {
    console.log("first Name is");
    console.log(event.target.value);
  };

  return (
    <div className='App'>
      <input type='text' placeholder={"firstName"} onChange={changehandler} />
    </div>
  );
}

export default App;
