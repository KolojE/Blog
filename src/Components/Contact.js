import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <div className="mt-5">
            <div className="m-0 justify-center flex w-full">
                <span className="font-bold text-4xl">Contact</span>
            </div>
            <div className="grid grid-cols-1 mt-10 ">
                <div className="hover:-translate-y-1 w-full ">
                    <a href="tel:+601110871337">
                        <FontAwesomeIcon icon={faPhone} className="ml-5 mr-5" /> +601110871337
                    </a>
                </div>
                <div className="hover:-translate-y-1 w-full mt-5">
                    <a href="mailto:koloje0831@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="ml-5 mr-5" /> koloje0831@gmail.com
                    </a>
                </div>
                <div className="hover:-translate-y-1 w-full mt-5">
                    <a href="https://wa.me/601110871337">
                        <FontAwesomeIcon icon={faWhatsapp} className="ml-5 mr-5" /> Whtasapp Me
                    </a>
                </div>
            </div>
        </div>
    )
}