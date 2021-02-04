import React from 'react';

function FormEnquiry(props) {


    return(
        <>
            
            <form className="form" action="" method="POST">
            <div className="form-group">
            <label for="name">Your Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
            <label for="email">Your Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label for="phone_no">Your Mobile Number</label>
            <input type="text" className="form-control" name="phone_no" id="phone_no" placeholder="Phone No"/>
            </div>
            <div className="form-group">
            <label for="date_of_birth">Your Date of Birth</label>
            <input type="date" className="form-control" name="date_of_birth" id="date_of_birth" placeholder="Date of Birth"/>
            </div>
            <div className="form-group">
            <label for="pan_no">Your Pan Number</label>
            <input type="text" className="form-control" name="pan_no" id="pan_no" placeholder="PAN-No"/>
            </div>
            <button type="submit" name="submit" className="my-btn">Submit</button>
            </form>	     

            </>
    )
}


export default FormEnquiry;