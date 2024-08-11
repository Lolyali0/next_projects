import React from "react";
import Image from "next/image";
import Link from 'next/link';

function Navbar() {
     // const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
    return (

        <navbar className=" text-center text-black shadow max-w-screen  items-center flex flex-wrap justify-between px-7 p-4 sticky top-0 bg-white ">
            <Image src="/images/logo.png" width={100} height={100} alt="Here is a Logo"/>
                <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                    <li><a href="/" className="lex items-center space-x-3 rtl:space-x-reverse">Home</a>
                    </li>
                    <li><a href="/home">Features</a>  </li>
                    <li><a href="/Page-2">Info</a>

                    </li>
                    <li><a href="/"> Plans & Pricing</a></li>
                </ul>

                <div className=" ">
                    <button className="border-2  px-4  py-2 mx-3 rounded-lg bg-amber-400 text-amber-950  ">Login</button>
                    <button className="border-2 border-black  px-4 py-2  rounded-lg text-amber-950 hover:bg-amber-400 hover:border-amber-300 ">Sign up Free</button>
                </div>

        </navbar>
    );
}

export default Navbar;
