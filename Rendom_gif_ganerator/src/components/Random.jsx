import { useState } from "react";

export default function Random(){

    const [gif, setGif] = useState("");

    function clickHandler() {

    }
    

    return(
        <div className="bg-green-500 w-1/2 rounded-md h-[450px] border border-black 
        flex flex-col mt-[15px] items-center gap-y-5">
            <h1 className="text-2xl underline font-bold mt-[20px]">A RANDOM GIF</h1>
            <img src={gif} alt="gif" />
            <button onClick={clickHandler}
                className="w-10/12 text-lg py-2 rounded-lg bg-white opacity-60"
            >
                GENERATE
            </button>
        </div>
    );
}