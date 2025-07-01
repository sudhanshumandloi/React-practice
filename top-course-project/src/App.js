import React from "react";
import Navebar from "./Components/Navebar";
import Cards from "./Components/Cards";   
import Filter from "./Components/Filter";
import Spinner from "./Components/Spinner"
import {apiUrl, filterData} from "./data";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
        const res = await fetch (apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
    setLoading(false);  
  }

  useEffect(() => {
    fetchData();
  },[]);

  return(
    <div className ="min-h-screen flex flex-col bg-bgDark2"> 
      <div>
        <Navebar />
      </div>
      
      <div>
        <Filter 
         filterData = {filterData}
         category = {category}
         setCategory = {setCategory}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
        loading ? (<Spinner />) : (<Cards courses={courses} category = {category}/>)
        }
      </div>
      </div>
  );
};

export default App;
