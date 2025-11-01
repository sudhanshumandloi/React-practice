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
                                        <p className="font-bold text-sm">{post.title}</p>
                                        <p>
                                            By<span>{post.author}</span>on<span>{post.category}</span>
                                        </p>
                                        <p>Posted on{post.date}</p>
                                        <p>{post.content}</p>
                                        <div>
                                            {post.tags.map( (tag, index) => {
                                                return <span key={index}>{`#${tag}`}</span>
                                            })}
                                        </div>
                                    </div>
                            ) ) )
                )
            }
        </div>
    );
}