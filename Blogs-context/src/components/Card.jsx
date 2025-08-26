
export default function Card(post){
    return (
        <div>
            <div key={post.id}>
                <p>{post.title}</p>
                <p>
                    By<span>{post.author}</span>on<span>{post.category}</span>
                </p>
                <p>Posted on{post.date}</p>
                <p>{post.content}</p>
                <div>
                    {post.tag.map( (tag, index) => {
                        return <span key={index}>{`#${tag}`}</span>
                    })}
                </div>
            </div>
        </div>
    );
}