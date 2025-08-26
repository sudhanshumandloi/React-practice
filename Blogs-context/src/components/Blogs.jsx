import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";

export default function Blogs(){

    const {loading, posts} = useContext(AppContext);

    return(
        <div>
            {
                loading ? (<div className="items-center justify-center font-bold text-xl">
                                Loading
                            </div>
                        ) : ( posts.length === 0 ? 
                                (<div>
                                    <p>No post found</p>
                                </div>) : (posts.map( (post) => (<Card />) ) )
                )
            }
        </div>
    );
}