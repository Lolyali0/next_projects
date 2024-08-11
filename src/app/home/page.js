import React from "react";
import Image from "next/image";

export default function Page1() {

    return(
        <div className=" text-center flex flex-col items-center min-h-screen bg-white p-10">



            {/*The first div with no errors _Done_*/}
            <div className=" container p-9 bg-white text-center  ">
                <h1 className="text-5xl text-black font-bold mb-4">Get to Know V.Connct Webinar</h1>
                <p className="mb-6 text-black">CExplore the seamless flow of V.connct webinars, ensuring a smooth
                    experience for both hosts and participants.</p>
            </div>


            <div className="flex flex-row m-12 ">

                {/* Div 1*/}

                <div className="mx-4">

                    <div className="border-2 border-black p-4 mb-4 rounded-lg">
                        <h1 className="text-xl text-black font-bold mb-4">
                            Webinar Schedule
                        </h1>
                        <p className="mb-6 text-black">
                            Plan your events with precision, ensuring that your audience knows when to tune in.
                        </p>
                        <Image src="/images/Rectangle_15.png" alt="Webinar" width={300} height={300} className="mx-auto my-8 w-22 "/>
                    </div>

                    <div className="border-2 border-black p-4 rounded-lg">
                        <div className=" h-8 mb-4 ">
                            <h1 className="text-xl text-black font-bold mb-4">Brand Identity</h1>
                        </div>
                        <Image src="/next.svg" alt="Webinar" width={300} height={300} className="mx-auto my-8 w-22 "/>

                    </div>


                </div>

                {/* Div 2*/}
                <div  className="mx-4">

                    <div className="border-2 border-black p-4 mb-4 rounded-lg">
                        <h1 className="text-xl text-black font-bold mb-4">
                            Webinar Schedule
                        </h1>
                        <p className="mb-6 text-black">
                            Plan your events with precision, ensuring that your audience knows when to tune in.
                        </p>
                        <Image src="/images/thanks.png" alt="Webinar" width={300} height={300} className="mx-auto my-8 w-22 "/>
                    </div>

                    <div className="border-2 border-black p-4 rounded-lg">
                        <div className=" h-8 mb-4 ">
                            <h1 className="text-xl text-black font-bold mb-4">Brand Identity</h1>
                        </div>
                        <Image src="/images/register.png" alt="Webinar" width={300} height={300} className="mx-auto my-8 w-22 "/>

                    </div>


                </div>


                {/* Div 3*/}

                <div className="mx-4 ">

                    <div className="border-2 border-black p-4 mb-4 rounded-lg">
                        <h1 className="text-xl text-black font-bold mb-4">
                            Webinar Schedule
                        </h1>
                        <p className="mb-6 text-black">
                            Plan your events with precision, ensuring that your audience knows when to tune in.
                        </p>
                        <Image src="/images/registerName.png" alt="Webinar" width={300} height={300} className="mx-auto my-8 w-22 "/>
                    </div>

                    <div className="border-2 border-black p-4 rounded-lg">
                        <div className=" h-8 mb-4 ">
                            <h1 className="text-xl text-black font-bold mb-4">Brand Identity</h1>
                        </div>
                        <Image src="/images/registerName.png" alt="Webinar" width={300} height={300} className="mx-auto my-8 w-22 "/>

                    </div>


                </div>


            </div>

            <button
                className="bg-yellow-400 text-black py-4 px-9 rounded-lg border border-yellow-600 ">Plans
                &
                Pricing
            </button>


        </div>
    );

}