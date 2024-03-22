import React from "react";
import './service.css'
import card1 from '../Assest/Mask group.png'
import card2 from '../Assest/card2.png'
import card3 from '../Assest/card3.png'
import card4 from '../Assest/s4.png'
import card5 from '../Assest/s5.png'
import card6 from '../Assest/s6.png'
import services from '../json/services.json'
import overseas from '../Assest/fa-solid_user-md.png'
import certificate from '../Assest/certificate.png'
import training from '../Assest/training.png'
export function Service(){
    return(
        <>
            {/* <div className="backgroundapa pt-5">

                <h1 className="text-center">Our Services</h1>
                <div className="container-fluid row mt-3"> */}
                    {/* {
                        services.map((value,index)=>(
                            
                            <div className="card col-lg-4 bg-transparent border-0">
                                <img src={value.image} className="ms-5 col-lg-8"/>
                                
                                <div className="card-body">
                                    <h3 className="ms-5">{value.topic}</h3>
                                    <p className="ms-5">The First Step To Happiness Is Good Health but you can always control what goes on Inside!</p>
                                </div>

                            </div>
                        ))
                    } */}
                    {/* <div id="flow"></div>
                    <div className="card col-lg-4 bg-transparent border-0">
                        <img src={card2} className="ms-5"/>
                        <div className="card-body">
                            <h3 className="ms-5">ICU Nursing</h3>
                            <p className="ms-5">The First Step To Happiness Is Good Health but you can always control what goes on Inside!</p>
                        </div>

                    </div>
                    <div className="card col-lg-4 bg-transparent border-0">
                        <img src={card3} className="ms-5"/>
                        <div className="card-body">
                            <h3 className="ms-5">Home Nursing</h3>
                            <p className="ms-5">The First Step To Happiness Is Good Health but you can always control what goes on Inside!</p>
                        </div>

                    </div> */}

                    
                {/* </div>
               
            </div> */}
            <section class="service-2" id="services">
                <div class="container">
                    <div class="section-title">
                        {/* <h1>Service</h1> */}
                        <h2>Our Service</h2>
                    </div>
                    <div class="row">

                        <div class="col-lg-4 col-sm-6">
                            <div class="servicebox-2">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <i class="flaticon-24-hours-phone-service"><img src={overseas}/></i>

                                        <span class="flaticon-24-hours-phone-service"></span>
                                    </div>
                                    <h3 class="title"><a href="">Overseas Recruitment</a></h3>
                                    <div class="text">
                                        Nursing Training for Prometric (Qater, Oman, Saudi, DHA, Haad, IELTS, NCLEX)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="servicebox-2">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <i class="flaticon-research"><img src={certificate}/></i>
                                        <span class="flaticon-research"></span>
                                    </div>
                                    <h3 class="title"><a href="">Licensing Process</a></h3>
                                    <div class="text">
                                        Nursing Training for Prometric (Qater, Oman, Saudi, DHA, Haad, IELTS, NCLEX)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="servicebox-2">
                                <div class="service-content">
                                <div class="service-icon">
                                        <i class="flaticon-statistics"><img src={training}/></i>
                                        <span class="flaticon-statistics"></span>
                                </div>
                                <h3 class="title"><a href="">Training </a></h3>
                                    <div class="text">
                                        Nursing Training for Prometric (Qater, Oman, Saudi, DHA, Haad, IELTS, NCLEX)<br/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                     </div> 
             </div> 
            </section> 

        </>
    );
}