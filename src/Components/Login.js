import React, { useState } from 'react'
import roomies from '../Images/roomies.jpg'
import Button from 'react-bootstrap/Button';
import { auth, db } from '../firebase'
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
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const emailPattern = /^[\w.-]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/i;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password.length);
    if (!emailPattern.test(email)) {
      toast.error("Please enter valid email");
    }
 
    else if (password.length < 8) {
      toast.error("Password should be at least 8 characters long");
    }
    else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        if (user) {
          toast.success("Login Successful")
          await setTimeout(() =>{
            toast.success("Home demo")
          },2000)
        }

      }
      catch (error) {

        toast.error(error.message)
      }
    }

  }
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={roomies} alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Roomies</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <label htmlFor="fname"><b>Email</b></label>
              <MDBInput
                wrapperClass='mb-4'
                id='formControlLg' type='email'
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="error-notify">

              </div>

              <label htmlFor="fname"><b>Password</b></label>
              <MDBInput 
              wrapperClass='mb-4' 
              id='formControlLg' 
              type='password' 
              size="lg" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={(e) => handleSubmit(e)}>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/" style={{ color: '#393f81' }}>Register here</a></p>




            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>
      <Toaster />

    </MDBContainer>
  )
}
