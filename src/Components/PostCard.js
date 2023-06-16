import React from "react";

export default function PostCard({ post }) {

    function readMore(event) {
        console.log(post.id);
    }

    return (
        <div className="p-3 hover:shadow-2xl ease-in duration-150 hover:bg-slate-600 hover:-translate-y-3 md:flex md:justify-center lg:space-x-10 md:w-4/5 flex-wrap lg:max-h-[350px] lg:flex-nowrap min-w-[300px] rounded-lg lg:m-20 mt-5 mb-5 ">
            <div name="CoverImage" className="grid md:w-2/4 min-w-[200px] min-h-[200px]">
                <img className="object-cover rounded-lg place-self-center max-h-full " src={post.coverImage ? post.coverImage.url : ""} />
            </div>
            <div name="BriefContent" className="relative inline-block lg:w-2/4 w-full overflow-y-clip">
                <span className="w-full mr-1 mt-5 sm:text-sm block lg:text-2xl xl:text-3xl font-bold rounded-md">
                    {post.title}
                </span>
                <span className="text-xs lg:mt-5 mt-2 relative block">
                    {`Last Update : ${post.updatedAt.substring(0, post.updatedAt.indexOf('T'))} at ${post.updatedAt.substring(post.updatedAt.indexOf('T') + 1, post.updatedAt.indexOf("."))}`}
                </span>
                <span className=" mt-4 block lg:text-lg xl:text-base sm:text-xs dark:text-slate-400 text-ellipsis" >
                    {post.excerpt }
                </span>
                <div className="h-12"></div>
                <a href={`/post/${post.id}`} onClick={readMore} className="absolute block bottom-2 right-2 dark:decoration-slate-400 underline transition hover:ease-in-out duration-200 text-xs lg:text-base">Read More..</a>
            </div>
        </div>
    )
}