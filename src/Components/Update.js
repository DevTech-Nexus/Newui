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
    currentpassword: '',
    newpassword: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState({
    currentpassword: '',
    newpassword: '',
    confirmpassword: '',
  });




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const push = async (username, password, newPassword) => {
    try {
      const validationErrors = {};
      const response = await fetch("https://localhost:8082/users/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: `{
          "username" : "${username}",
          "password" : "${password}",
          "newPassword" : "${newPassword}"
        }`
      });
      const reply = await response.text();
      if (reply === "success") {
        sessionStorage.setItem("user", username);
        window.location.href = "/home";
      }
      else {
        console.log(reply)
        validationErrors.password = 'Your current password seems wrong';
        setErrors(validationErrors);
      }

    }


    catch (err) {
      console.log(err)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password fields
    const validationErrors = {};

    if (formData.newpassword !== formData.confirmpassword) {
      validationErrors.password = 'Passwords do not match';
    }


    // Set validation errors if any
    setErrors(validationErrors);

    // If no validation errors, you can proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      // Add your logic here, e.g., send the form data to a server
      push(sessionStorage.getItem("user"), formData.currentpassword, formData.newpassword)

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
              <br />

              <MDBInput
                wrapperClass='mb-4'
                label='Current Password'
                id='formControlLg'
                type='password'
                size="lg"
                name="currentpassword"
                required={true}
                value={formData.currentpassword}
                onChange={handleInputChange}
              />

              <MDBInput
                wrapperClass='mb-4'
                label='New Password'
                id='formControlLg'
                type='password'
                size="lg"
                name="newpassword"
                required={true}
                value={formData.newpassword}
                onChange={handleInputChange}
              />




              <MDBInput
                wrapperClass='mb-4'
                label='Repeat Password'
                id='formControlLg'
                type='password'
                size="lg"
                name="confirmpassword"
                required={true}
                value={formData.confirmpassword}
                onChange={handleInputChange}
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}




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

