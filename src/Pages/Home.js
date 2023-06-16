import React from "react";
import Title from "../Components/Title";
import TabBar from "../Components/TabBar";
import Posts from "../Components/Posts";
import { useParams } from "react-router";

export default function Home() {
    const params = useParams()
    return (
        <div className='dark:text-white h-full bg-zinc-900' >
            <Title />
            <TabBar />
            <Posts category={params.cat}/>
        </div>
    )
}