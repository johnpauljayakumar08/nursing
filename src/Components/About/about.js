import React from "react";
import about from '../Assest/About.jpg'
import './about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
export function About(){
    return(
        <>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-lg-6 mt-3 mb-5 p-5">
                        <img src={about} className="col-lg-10 col-10 sizee ms-5"/>
                    </div>
                    <div className="col-lg-6">
                        <button  className="ms-3 mt-3 backhead text-white text-center">About Us</button>
                        <h6 className="ms-3 mt-3 text-center  col-lg-10">"Empowering Healthcare Excellence, Every Step of the Way."</h6>
                        <p className="ms-3  col-lg-10"> KG Genius Labs Healthcare Staffing is  your trusted partner in providing top-quality staffing solutions for the healthcare industry. At KG Genius Labs, we are committed to delivering excellence in healthcare staffing by connecting healthcare organizations with highly qualified professionals who are passionate about making a difference in patient care.</p>
                        <p className="ms-3  col-lg-10">Our mission at KG Genius Labs Healthcare Staffing is to revolutionize the healthcare staffing industry by providing superior staffing solutions that meet the unique needs and challenges of healthcare organizations. We are dedicated to enhancing patient care, improving healthcare outcomes, and supporting the success of our clients and candidates.</p>
                        {/* <div className="container-fluid row mt-5">
                            <div className="col-lg-4 d-flex mb-4 ">
                                <FontAwesomeIcon icon={faAddressCard}className="mt-1 me-2" />
                                <h5>Our Work</h5>
                            </div>
                            <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faAddressCard}className="mt-1 me-2" />
                                <h5>Our Work</h5>
                            </div>
                            <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faAddressCard}className="mt-1 me-2" />
                                <h5>Our Work</h5>
                            </div>
                            <hr/>
                            <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faAddressCard}className="mt-1 me-2" />
                                <h5>Our Work</h5>
                            </div>
                            <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faAddressCard}className="mt-1 me-2" />
                                <h5>Our Work</h5>
                            </div>
                            <div className="col-lg-4 d-flex">
                            <FontAwesomeIcon icon={faAddressCard}className="mt-1 me-2" />
                                <h5>Our Work</h5>
                            </div>
                        </div> */}
                        <div id="service">
                    </div>

                </div>

                </div>
            </div>
        </>
    );
}