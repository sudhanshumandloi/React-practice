import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Blogs(){

    const {loading, posts} = useContext(AppContext);

    return(
        <div className=" w-11/12 py-4 max-w-[550px] flex flex-col gap-y-7">
            {
                loading ? (<div className=" ">
                                Loading
                            </div>
                        ) : ( posts.length === 0 ? 
                                (<div>
                                    <p>No post found</p>
                                </div>) : (posts.map( (post) => (
                                    <div key={post.id}>
                                        <p className="font-bold text-xs">{post.title}</p>
                                        <p className="text-[11px]">
                                            By<span className="italic">{post.author}</span>on<span className="underline font-bold">{post.category}</span>
                                        </p>
                                        <p className="text-[11px] ">Posted on{post.date}</p>
                                        <p className="text-[12px] mt-[10px]">{post.content}</p>
                                        <div className="flex gap-x-3">
                                            {post.tags.map( (tag, index) => {
                                                return <span key={index} className="text-blue-500 underline font-bold text-[11px]">{`#${tag}`}</span>
                                            })}
                                        </div>
                                    </div>
                            ) ) )
                )
            }
        </div>
    );
}