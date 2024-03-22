import React from "react";
import './banner.css'
import Typewriter from 'typewriter-effect';
export function Banner(){
    return(
        <>
            <div className="container-fluid backgroundd" id="home">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <h1 className="mt-5 col-lg-5 text-bold  text-white pt-5">Decades of Excellence in <Typewriter
                            options={{
                                strings: ['Education Technology Staffing and Healthcare'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 0.5,
                            }}
                            />
                        </h1>
                        <h5 className=" text-white col-lg-6">The First Step To Happiness Is Good Health but you can always control what goes on Inside!</h5>   
                    </div>
                </div>
                <div id="about"></div>
            </div>
        </>
    );
}