import React from "react";
import GraphqlService from "../Services/GraphqlService.js";
import PostCard from "./PostCard.js";

export default function Content({ category }) {

    const graphqlService = GraphqlService();
    const [posts, setPosts] = React.useState([]);


    React.useEffect(() => {
        //when promise resolved
        graphqlService.getRecentPosts(process.env.REACT_APP_RECENT_POST_LIMIT).then((data) => {
            setPosts(data.posts);
        });

    }, [])

    var postCards = posts.map((post) => {
        return (<PostCard
            key={post.id}
            post={post}
        />)
    })

    return (
        <div >
            <div className="flex justify-center mt-10   ">
                <span className="text-3xl font-bold">{`Recent Posts`}</span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 place-content-around mt-2 ml-10 mr-10 ">
                {postCards}
            </div>
        </div>
    )
}


