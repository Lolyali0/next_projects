import Image from "next/image";
import {next} from "sucrase/dist/types/parser/tokenizer";
import React from "react";

export default function Home() {

  return (

    // <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full min-h-screen bg-white text-center pt-12 ">
            <h1 className="text-5xl text-black font-bold m-4">All-in-one Solution For Effortless Webinar Hosting</h1>
            <p className="m-6 text-black">Create immersive live Webinar experiences with everything you need. Join
                industry experts for a
                transformative learning experience and gain the audience you need.</p>
            <div className="flex justify-center space-x-4">
                <button
                    className="bg-yellow-400 text-black py-4 px-6 rounded-lg border border-yellow-600 hover:border-yellow-300">Plans
                    &
                    Pricing
                </button>
                <button
                    className="bg-white text-black py-4 px-6 rounded-lg border border-black hover:bg-yellow-400 hover:border-yellow-300">Contact
                    Us
                </button>
            </div>
            <Image src="/images/hero%20section%20one%20web.png" width={1000} height={400} alt="Webinar" className="mx-auto mb-6 rounded-lg max-h-400"/>
        </div>
    // </div>

  );
}
