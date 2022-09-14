import React from "react";
import Contact from "../Components/Contact";
import Intro from "../Components/Intro";
import TabBar from "../Components/TabBar";

export default function AboutMe() {
    return (
        <div className="w-full dark:text-white">
            <TabBar/>
            <div className="grid grid-cols-1 w-full place-items-center ">
                <div className="w-[90%] md:w-[60%] min-h-[800px] mt-28 dark:bg-slate-800 ">
                    <Intro/>
                </div>
                <div className="mt-10 w-[90%] md:w-[60%] min-h-[400px] mb-10 dark:bg-slate-800">
                    <Contact/>
                </div>
            </div>
        </div>
    );
}