import React from "react";
import { useParams } from "react-router-dom";
import GraphqlService from "../Services/GraphqlService"
import TabBar from "../Components/TabBar";
import PostOpening from "../Components/PostOpening";
import PostContent from "../Components/PostContent";



export default function Post(props) {
    const params = useParams();
    const [post, setPost] = React.useState()

    React.useEffect(() => {
        GraphqlService().getPost(params.id).then((data) => {
            setPost(data.post);
            console.log(data)

        })
    }, [])

    if (post) {
        return (
            <div className="dark:bg-zinc-900">
                <TabBar />
                <PostOpening post={post} />
                <PostContent post={post} />
            </div>
        );
    }

    return


}
