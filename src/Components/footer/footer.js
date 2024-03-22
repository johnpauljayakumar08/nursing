import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import kgisllogo from '../Assest/kgisl-logo.png'
import { Link as Sclink } from "react-scroll";
export function Footer(){
    return(
        <>
            <div className="container-fluid zindex bgcolor text-white p-5" id="footer">
                <div className="row">

                    <div className="col-lg-4">
                        <h2 className="ms-5">Quick View</h2>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li class="nav-item me-5 ">
                        <Sclink activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink>
                        </li>
                        <li class="nav-item me-5">
                        <Sclink to="about" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About US</Sclink>
                        {/* <a class="nav-link text-white " href="#">About US</a> */}
                        </li>
                        <li class="nav-item me-5">
                        <Sclink to="service" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">What Sets Us Apart</Sclink>
                        {/* <a class="nav-link text-white " href="#">About US</a> */}
                        </li>
                        <li class="nav-item dropdown me-5">
                        <Sclink to="services" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Services</Sclink>

                        {/* <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a> */}
                        {/* <ul class="dropdown-menu">
                            <li><Sclink to="itites" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Software Services and Automation</Sclink></li>
                            <li><Sclink to="E-Commerce" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">E-Commerce Solutions</Sclink></li>
                            <li><Sclink to="Corporate" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Corporate Training</Sclink></li>
                            <li><Sclink to="K-TAG" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">K-TAG</Sclink></li>
                            <li><Sclink to="kpo" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">KPO</Sclink></li>
                            <li><Sclink to="Intelligent" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Intelligent Platform for K12 Education</Sclink></li>
                        </ul> */}
                        </li>
                        {/* <li class="nav-item me-5">
                        <Sclink to="flow" spy={true} smooth={true} duration={500} className="nav-link text-white"   href="#">Flow</Sclink>
                        </li> */}
                        <li class="nav-item me-5">
                        <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact US</Sclink>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="ms-5">Services</h2>
                        <ul >
                            <li><Sclink to="itites" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Overseas Recruitment</Sclink></li>
                            <li><Sclink to="E-Commerce" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Licensing Process</Sclink></li>
                            <li><Sclink to="Corporate" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Training</Sclink></li>
                        </ul>
                    </div>                                                                                                                                                                                          
                    <div className="col-lg-4 ">
                        <h2 className="ms-2 mb-4">Contact</h2>
                        <p>
                                <span class="city">
                                    Coimbatore 
                                    <a href="https://goo.gl/maps/6JQxuVPJFvKYu7e7A" target="_blank" title="Google Map Location for Coimbatore Address">
                                        <i class="fas fa-map-marker-alt location-color" aria-hidden="true"></i>
                                    </a>
                                </span>
                               
                                KGISL Campus, <br/>
                                365 Thudiyalur Road, Saravanampatti,<br/>
                                Coimbatore – 641035, <br/>Tamil Nadu, India.
        
                        </p>
                        <div className="col-lg-4 pt-5">

                            <p>Prowered By</p>
                            {/* <a href="https://www.kgisl.com/"><img src={kgisllogo} /></a> */}
                        </div>
                    </div>
                </div>
                <hr/>
                <p className="text-center">Copyright © 2024  KGGL. All Right Reserved.</p>
            </div>
        </>
    );
}