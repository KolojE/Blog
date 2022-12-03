import React from "react";
import TabBar from "../Components/TabBar";
import Intro from "../Components/Intro";
import ContactMeForm from "../Components/ContactMeForm"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
    
    const [isSubmittingForm, setIsSubmittingForm] = React.useState(false);
    return (
        <div className="w-full dark:text-white dark:bg-zinc-900">
            { 
            isSubmittingForm && 
            <div name="loadingScreen" className="w-full h-full z-50 fixed bg-gray-700 opacity-80 grid grid-cols-1 place-items-center">
            <FontAwesomeIcon icon={faCircleNotch} className="animate-spin h-16 block"/>
            </div>
            }
            <TabBar/>
            <div className="grid grid-cols-1 w-full place-items-center ">
                <div className="w-[90%] md:w-[80%] lg:w-[60%] min-h-[800px] mt-28 dark:bg-slate-800 ">
                    <Intro/>
                </div>
                <div className="mt-10 w-[90%] md:w-[80%] lg:w-[60%] min-h-[600px] mb-10 dark:bg-slate-800">
                    <ContactMeForm 
                    setIsSubmittingForm={setIsSubmittingForm}
                    />
                </div>
            </div>
        </div>
    );
}