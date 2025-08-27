import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination(){

    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return(
        <div>
            {
                page > 1 &&
                (<button onClick={() => handlePageChange(page-1)}>Previous</button>)
            }
            {
                page < totalPages && 
                (<button onClick={() => handlePageChange(page+1)}>Next</button>)
            }
        </div>
    );
}