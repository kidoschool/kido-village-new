import React from 'react';
import $ from 'jquery';
import HubspotForm from 'react-hubspot-form';


function ThankYou(props) {

    const RegisterTeachersData = JSON.parse(localStorage.getItem("RegisterTeachersData"));

    var name = RegisterTeachersData.name;
    var email = RegisterTeachersData.email;
    var contact = RegisterTeachersData.contact;

    var hubiframe = $("#reactHubspotForm1").find("iframe").contents();
    var hubid = "ba33ae05-f89d-4f20-ba77-595aee8277c6";
  
    hubiframe.find("#firstname-"+hubid).val(name);
    hubiframe.find("#email-"+hubid).val(email);
    hubiframe.find("#contact-"+hubid).val(contact);


    return(
        <>
        <section className="thanku-data py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                    <h1 className="banner-head py-4">Thank you for filling out the details, we will contact you shortly!</h1>
                    <div><i className="than-text">You are <b>2 steps</b> away from starting up with your pod do fill out below form and get started</i></div>
                    <div className="row justify-content-center pt-5 pb-3">
                        {/* <div className="col-lg-4">
                            <div className="steps-details border shadow p-4">
                                <p><i class="far fa-check-circle text-primary"></i> step 1</p>
                                <div className="text-primary pb-2"><i class="fas fa-file-alt fa-3x"></i></div>
                                <i>Details Form</i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="steps-details border shadow p-4">
                                <p>step 2</p>
                                <div className="text-primary pb-2"><i class="fas fa-file-import fa-3x"></i></div>
                                <i>Assessment Form</i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="steps-details border shadow p-4">
                                <p>step 3</p>
                                <div className="text-primary pb-2"><i class="fas fa-laptop fa-3x"></i></div>
                                <i>Training</i>
                            </div>
                        </div> */}
                        <div className="col-lg-10">
                            <div className="hub-form border p-4 shadow">
                        <HubspotForm
                            portalId='9397213'
                            formId='ba33ae05-f89d-4f20-ba77-595aee8277c6'
                            onSubmit={() => console.log('Submit!')}
                            onReady={(form) => console.log('Form ready!')}
                            loading={<div>Loading...</div>}
                        />
                        </div>
                        </div>
                    </div>
                    {/* <div className="pt-3 than-text"><i>For step 2 fill out the assessment form</i></div> */}
                    {/* <div className="pt-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdivlDQfWcHLjNS-j_agj3abUaAmwSqi6dbGGgCXYrqpxqIgg/viewform" className="btn my-btn center">Get Started</a></div> */}
                    </div>
                </div>
            </div>
        </section>
            

        </>
    )
}


export default ThankYou;
