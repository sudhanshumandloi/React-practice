import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination(){

    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return(
        <div className="w-full flex justify-center items-center border-2">
        <div className="flex justify-between w-11/12 max-w-[650px] py-2">
            <div className="flex gap-x-3">
                {
                page > 1 &&
                (<button className="rounded-md border-2 px-2 py-1"  
                    onClick={() => handlePageChange(page-1)}>Previous</button>)
            }
            {
                page < totalPages && 
                (<button className="rounded-md border-2 px-2 py-1"
                    onClick={() => handlePageChange(page+1)}>Next</button>)
            }
            </div>
            <p className="font-bold text-sm">
                page {page} of {totalPages}
            </p>
        </div>
        </div>
    );
}