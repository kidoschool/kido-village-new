import React from 'react';

function ThankYou(props) {

    

    return(
        <>
        <section className="thanku-data py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                    <h1 className="banner-head py-4">Thank you for filling out the details, we will contact you shortly!</h1>
                    <div><i className="than-text">You are <b>2 steps</b> away from starting up with your pod</i></div>
                    <div className="row pt-5 pb-3">
                        <div className="col-lg-4">
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
                        </div>
                    </div>
                    <div className="pt-3 than-text"><i>For step 2 fill out the assessment form</i></div>
                    <div className="pt-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdivlDQfWcHLjNS-j_agj3abUaAmwSqi6dbGGgCXYrqpxqIgg/viewform" className="btn my-btn center">Get Started</a></div>
                    </div>
                </div>
            </div>
        </section>
            

        </>
    )
}


export default ThankYou;
