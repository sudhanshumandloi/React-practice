import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

export default function Random(){

    const {gif, loading, fetchData} = useGif();

    return(
        <div className="bg-green-500 w-1/2 rounded-md  border border-black 
        flex flex-col mt-[15px] items-center gap-y-5">
            <h1 className="text-2xl underline font-bold mt-[20px]">A RANDOM GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="gif" width={450}/>)
            }
            <button onClick={() => fetchData()}
                className="w-10/12 text-lg py-2 rounded-lg bg-white opacity-60 mb-[20px]"
            >
                GENERATE
            </button>
        </div>
    );
}