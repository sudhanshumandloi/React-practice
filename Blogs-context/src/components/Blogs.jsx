import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Blogs(){

    const {loading} = useContext(AppContext);

    return(
        <div>
            {
                loading ? (<div className="items-center justify-center font-bold text-xl">Loading</div>) : ()
            }
        </div>
    );
}