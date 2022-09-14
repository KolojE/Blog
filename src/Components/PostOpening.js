import React from "react";


export default function PostOpening({ post }) {

    return (
        <div className="lg:flex lg:justify-center mt-16 lg:mt-28 lg:ml-28">
            <div className="relative w-2/3 lg:w-2/4 ml-10">
                <span className="font-bold text-2xl lg:text-4xl block text-white">{post.title}</span>
                <span className="text-sm  lg:text-lg mt-5 block text-black dark:text-zinc-200">{post.excerpt}</span>
                <div className="h-10"></div>
                <span className="absolute dark:text-zinc-400 text-zinc-700 bottom-0 block mt-auto bottom-0 left-0 font-bold text-xs lg:text-base">Last update : {post.updatedAt.slice(0, post.updatedAt.indexOf("T"))} {post.updatedAt.slice(post.updatedAt.indexOf("T") + 1, post.updatedAt.indexOf("."))}</span>
            </div>
            <div name="coverImage" className="mt-10 lg:mt-0 max-h-[400px] w-full pl-10 pr-10 flex justify-center">
                <img src={post.coverImage.url} className="" />
            </div>
        </div>
    )
}