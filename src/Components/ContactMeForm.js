import React from "react";
import GraphqlService from "../Services/GraphqlService";




export default function ContactMeForm({setIsSubmittingForm}) {

    const graphqlService = GraphqlService();
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",

    });


    function onChange(event) {
        setFormData((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })

    }

    function onFormSubmit(event)
    {
        event.preventDefault();
        setIsSubmittingForm(true);
        graphqlService.insertMessage(formData).then((res)=>
        {
                console.log(res);
                setIsSubmittingForm(false);
        })
    }



    return (
        <div className="w-full">
            <span className="font-bold text-xl md:text-3xl text-center w-full block mt-10">CONTACT ME</span>
            <form onSubmit={onFormSubmit} className="relative m-10 md:m-20 lg:m-40 md:mt-8 lg:mt-12 mb-5 md:mb-10 lg:mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-5">
                    <div className="w-full">
                        <label htmlFor="fristName" className="mt-5 mr-5 mb-2 font-Bold text-lg text-zinc-200 block">First Name: </label>
                        <input id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={onChange} className="w-full appearance-none rounded-md py-2 px-3 text-black " />
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName" className="mt-5 mr-5 mb-2 font-Bold text-lg text-zinc-200 block" >Last Name: </label>
                        <input id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={onChange} className="w-full appearance-none rounded-md py-2 px-3 text-black " />
                    </div>
                </div>
                <div className="w-full">
                <label htmlFor="email" className="mt-5 mr-5 mb-2 font-Bold text-lg text-zinc-200 block" >Email: </label>
                <input id="email" name="email" placeholder="Email" value={formData.email} onChange={onChange} className="w-full appearance-none rounded-md py-2 px-3 text-black"/>
                </div>
                <div>
                <label htmlFor="message" className="mt-5 mr-5 mb-2 font-Bold text-lg text-zinc-200 block">Message :</label>
                <textarea placeholder="Leave some message to me :)" maxLength={300} id="message" name="message" value={formData.message} onChange={onChange} className="w-1/2 rounded-md resize-none text-black py-2 px-3 min-h-[100px] md:min-h-[200px]"></textarea>
                </div> 
                <button type="submit" className="absolute right-0 bottom-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Submit</button>
            </form>
        </div>
    )
}