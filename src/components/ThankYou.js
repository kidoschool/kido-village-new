import React from 'react';

function ThankYou(props) {

    

    return(
        <>
        <section className="thanku-data py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                    <h1 className="banner-head py-4">Thank You for filling out the details, we will contact you shortly!</h1>
                    <div><i>you are <b>2 steps</b> away from starting up with your pod, do you mind filling out a short assessment ? </i></div>
                    <div><i>Fill out the assessment form and get started</i></div>
                    <div className="pt-4"><a href={null} className="btn my-btn center">Get Started</a></div>
                    </div>
                </div>
            </div>
        </section>
            

        </>
    )
}


export default ThankYou;
