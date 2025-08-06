import Spinner from "./Spinner";
import { useState} from "react";
import useGif from "../hooks/useGif";

export default function Tag(){

    const [tag, setTag] = useState("Car");
    const {gif, loading, fetchData} = useGif(tag);

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

            <button onClick={() => fetchData(tag)}
                className="w-10/12 text-lg py-2 rounded-lg bg-white opacity-60 mb-[20px]"
            >
                GENERATE
            </button>
        </div>
    );
}