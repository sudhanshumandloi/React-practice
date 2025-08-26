import { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
                                </div>) : (posts.map( (post) => (
                                    <div key={post.id}>
                                        <p>{post.title}</p>
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