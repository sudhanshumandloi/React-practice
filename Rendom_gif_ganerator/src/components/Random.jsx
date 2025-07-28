import { useState } from "react";

export default function Random(){

    const [gif, setGif] = useState("");

    return(
        <div className="bg-green-500 w-1/2 rounded-md h-[450px] border border-black 
        flex flex-col mt-[15px] items-center gap-y-5">
            <h1>A RANDOM GIF</h1>
            <img src={gif} alt="gif" />
            <button>GENERATE</button>
        </div>
    );
}