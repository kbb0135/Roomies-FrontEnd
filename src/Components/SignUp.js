import React from 'react'
import roomies from '../Images/roomies.jpg'
import Button from 'react-bootstrap/Button';
import '../styles/signup.css'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
export default function SignUp
    () {
    return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                        <MDBCardImage src={roomies} alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                    

                            <h5 >Sign Up for Roomies</h5>
                            <label for="fname"><b>First Name</b></label>
                            <MDBInput wrapperClass='mb-3' label='' id='formControlLg' type='text' />
                            <label for="fname"><b>Last Name</b></label>
                            <MDBInput wrapperClass='mb-3' label='' id='formControlLg' type='text'/>
                            <label for="fname"><b>Email</b></label>
                            <MDBInput wrapperClass='mb-3' label='' id='formControlLg' type='email'/>
                            <label for="fname"><b>Password</b></label>
                            <MDBInput wrapperClass='mb-3' label='' id='formControlLg' type='password'/>

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Sign Up</MDBBtn>
                            <a className="small text-muted" href="#!">Back to Login </a>
                        

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    )
}
