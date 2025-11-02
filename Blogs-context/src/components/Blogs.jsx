import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Blogs(){

    const {loading, posts} = useContext(AppContext);

    return(
        <div className=" w-11/12 py-4 max-w-[650px] flex flex-col gap-y-7 mt-[50px] ">
            {
                loading ? (<div className=" ">
                                Loading
                            </div>
                        ) : ( posts.length === 0 ? 
                                (<div>
                                    <p>No post found</p>
                                </div>) : (posts.map( (post) => (
                                    <div key={post.id}>
                                        <p className="font-bold text-lg">{post.title}</p>
                                        <p className="text-[12px]">
                                            By<span className="italic">{post.author}</span>on<span className="underline font-bold">{post.category}</span>
                                        </p>
                                        <p className="text-[12px] ">Posted on{post.date}</p>
                                        <p className="text-[14px] mt-[10px]">{post.content}</p>
                                        <div className="flex gap-x-3">
                                            {post.tags.map( (tag, index) => {
                                                return <span key={index} className="text-blue-500 underline font-bold text-[14px]">{`#${tag}`}</span>
                                            })}
                                        </div>
                                    </div>
                            ) ) )
                )
            }
        </div>
    );
}