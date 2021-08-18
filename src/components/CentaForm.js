import React, {useState, useEffect} from 'react';
import $ from "jquery";
import HubspotForm from 'react-hubspot-form';


function FormEnquiry(props) {


    return(
        <>
  
            <HubspotForm
                portalId='9397213'
                formId='ba33ae05-f89d-4f20-ba77-595aee8277c6'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
      
            </>
    )
}


export default FormEnquiry;