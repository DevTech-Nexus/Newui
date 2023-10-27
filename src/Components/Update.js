import {
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './Styles.css';



export default function Update() {




  const [formData, setFormData] = useState({
    email: '',
    password: '',
    user: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    user: '',
  });




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password fields
    const validationErrors = {};

    if (!formData.user) {
      validationErrors.user = 'username is required';
    }


    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if(formData.password !== formData.confirmpassword) {
      validationErrors.password = 'Passwords do not match';
    }


    // Set validation errors if any
    setErrors(validationErrors);

    // If no validation errors, you can proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      // Add your logic here, e.g., send the form data to a server


    }
  };




  return (


    <div>
      <MDBContainer fluid className="p-3 my-5">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid"
              alt="Phone imagefd" />
          </MDBCol>

          <MDBCol col='4' md='6'>


            <form onSubmit={handleSubmit}>

              {errors.password && <div className="text-danger">{errors.password}</div>}
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='formControlLg'
                type='password'
                size="lg"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              
              <MDBInput
                wrapperClass='mb-4'
                label='Repeat Password'
                id='formControlLg'
                type='password'
                size="lg"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleInputChange}
              />



              <a href='/Register'><Button
                variant="primary"
                size="lg"
                type="submit"

                style={{
                  marginRight: '10px',
                  background:
                    'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))',
                }}

                className="custom-button2"
              // Add type="submit" to the button
              >
                Update
              </Button></a>
            </form>



            {/* <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div> */}



          </MDBCol>

        </MDBRow>
        {/* <Routes>
       
        <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
       
       
        </Routes> */}
      </MDBContainer></div>
  );
}

