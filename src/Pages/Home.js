import React from "react";
import Title from "../Components/Title";
import TabBar from "../Components/TabBar";
import Posts from "../Components/Posts";

export default function Home() {
    return (
        <div className='dark:text-white ' >
            <Title />
            <TabBar />
            <Posts />
        </div>
    )
}