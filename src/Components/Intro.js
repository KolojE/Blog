import React from "react";



export default function Intro()
{

const skills = {
    
}
    
        
    


return(
    <div className="grid grid-cols-1 md:grid-cols-2 md:m-14 md:gap-10">
        <div name="profileImg" className="relative mt-10 md:mt-0 grid grid-cols-1 place-items-center">
            <img src="./img/profile.jpg" className="w-32 h-32 lg:w-64 lg:h-64 object-cover rounded-full"/>
            <span className="mt-5 font-bold text-2xl">Ng Wen Sing</span>
            <span className="text-slate-400 mt-2 md:text-base">Software Enginner</span>
        </div>
        <div name="Brief" className="m-5 lg:ml-0">
            <span className="block p-5 pl-0 font-bold text-xl">Hello ! welcome to my personal website :)</span>
            <p>I'm Ng Wen Sing a malaysian who currently study in MMU Cyberjaya in Software Enginnering. I'm a person who love tech and programming ! </p>
        </div>
    </div>
);
}