import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Tag(){
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    const [tag, setTag] = useState("Car");
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState('');

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () =>{
        fetchData();
    }, [] )

    function clickHandler() {
        fetchData();
    }

    return(
        <div className="bg-blue-500 w-1/2 rounded-md  border border-black 
        flex flex-col mt-[15px] items-center gap-y-5">
            <h1 className="text-2xl underline font-bold mt-[20px]">RANDOM {tag} GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="gif" width={450}/>)
            }

            <input className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
                onChange={(event) => setTag(event.target.value) }
                value={tag}
            />

            <button onClick={clickHandler}
                className="w-10/12 text-lg py-2 rounded-lg bg-white opacity-60 mb-[20px]"
            >
                GENERATE
            </button>
        </div>
    );
}