import React from "react";
import about from '../Assest/About.jpg'
import './how_we_are.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import icon from '../Assest/icon.png'
export function Howweare(){
    return(
        <>
            <div className="container-fluid pt-5 mb-5 backgroundapa">
                <div className="row">
                    {/* <div className="col-lg-1"></div> */}
                    <div className="col-lg-5 ms-lg-5  ">
                        <div className="d-flex">

                            <img src={icon}/>
                            <h3 className="ms-lg-5 mt-3 text-center">How We Are</h3>
                        </div>
                            <p className=""> KG Genius Labs Healthcare Staffing is a division of KG Genius Labs, a leading technology solutions provider with a track record of delivering innovative and impactful solutions across various industries. With our deep understanding of technology and our commitment to excellence, we bring a fresh perspective to healthcare staffing, leveraging technology to streamline processes and deliver superior results.</p>
                    </div>
                    <div className="col-lg-1 sideboder"></div>
                    <div className="col-lg-5 ms-lg-4">
                    <div className="d-flex">

                        <img src={icon}/>
                        <h3  className=" mt-3 ms-5  text-center">What Sets Us Apart</h3>
                    </div>
                       
                        <p className=""> What sets KG Genius Labs Healthcare Staffing apart is our commitment to quality, integrity, and customer satisfaction. We take a personalized and consultative approach to staffing, working closely with our clients to understand their unique needs and requirements. By leveraging our extensive network, industry expertise, and innovative technology solutions, we deliver staffing solutions that are tailored to meet the specific needs of each client and exceed their expectations.</p>
                    
                    </div>
                    <div className="col-lg-1 "></div>
                    
                   
                </div>
               
            </div>
        </>
    );
}