import React from "react";
import { Link } from "react-router-dom";


const Error404 = () => {

    return (
        <div className="bg-primary min-h-screen flex items-center justify-center p-4">
            <div className="grid grid-cols-3">
                <div>
                </div>            
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl text-white text-center uppercase font-bold tracking-[5px] mb-8">
                        <span>404</span>
                    </h1>
                            
                    <h2 className=" text-3xl text-white text-center uppercase tracking-[5px] mb-8">
                        <span>This URL does not exist!!</span>
                    </h2>
                    <Link
                        to="/"
                        className=" transition-colors"
                        ><button className="bg-primary text-black 
                        py-2 px-6 rounded-xl text-xl bg-white hover:bg-lavanda hover:text-black">Go back</button>
                    </Link>

                </div>
                <div>
                                    
                </div>
            </div>
          </div>
      );
    };


export default Error404
