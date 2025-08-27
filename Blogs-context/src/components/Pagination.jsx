import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination(){

    const {page, handlePageChange} = useContext(AppContext);

    return(
        <div>
            {
                page > 1 &&
                (<button onClick={handlePageChange(page-1)}>Previous</button>)
            }
        </div>
    );
}