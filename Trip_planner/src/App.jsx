import { useState } from 'react'; 
import data from './data';
import Tours from './components/Tours';

function App() {

  const [tours, settours] = useState(data)

  function removeTourHandler(id){
    const newTours = tours.filter(tour => tour.id !== id);
    settours(newTours);
  }


  if(tours.length ===0){
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button onClick={() => settours(data)} className="btn-white">Refresh</button>
      </div>
    )
  }

  return (<div className="App">
    <Tours tours={tours} removeTour={removeTourHandler}></Tours>
  </div>)
}

export default App
