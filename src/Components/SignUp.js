import React, {useState} from 'react'
import roomies from '../Images/roomies.jpg'
import toast,{Toaster} from 'react-hot-toast';
import '../styles/signup.css'
import {auth, db} from '../firebase'
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function SignUp () {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const value = "Please enter valid name"
    const emailPattern = /^[\w.-]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/i;
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(firstName.length <=0) {
            toast.error(value)
        }
        else if(lastName.length <= 0) {
            toast.error(value)
        }
        else if(!emailPattern.test(email)) {
            toast.error('Enter valid Email')
        }
        else if(password.length < 8) {
            toast.error("Password should be at least 8 characters long.")
        }
        else if(password !== cPassword){
            toast.error("Both password fields must match.")
        }
        else{
            try {
                createUserWithEmailAndPassword(auth, email, password)
                  .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                     
                    await setDoc(doc(db, "Users", user.uid), {
                      FirstName: firstName,
                      LastName: lastName,
                      email: email,
                    });

                    toast.success("Account created successfully")
                    await setTimeout(() =>{
                        navigate("/login");
                    },2000)
                    // ...
                    
                  })
                  .catch((error) => {
                    toast.error(error.message)
                    // ..
                  });
              } catch {}
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

                    

                            <h5 >Sign Up for Roomies</h5>
                            <label htmlFor="fname"><b>First Name</b></label>
                            <MDBInput 
                            wrapperClass='mb-3' 
                            label=''  
                            type='text'
                            value={firstName}
                            onChange ={(e)=>{setFirstName(e.target.value)}}
                            />
                            <label htmlFor="fname"><b>Last Name</b></label>
                            <MDBInput 
                            wrapperClass='mb-3' 
                            label='' 
                            type='text'
                            value={lastName}
                            onChange ={(e)=>{setLastName(e.target.value)}}
                            />
                            <label htmlFor="fname"><b>Email</b></label>
                            <MDBInput 
                            wrapperClass='mb-3' 
                            label=''  
                            type='email'
                            value={email}
                            onChange ={(e)=>{setEmail(e.target.value)}}
                            />
                            <label htmlFor="fname"><b>Password</b></label>
                            <MDBInput 
                            wrapperClass='mb-3' 
                            label=''  
                            type='password'
                            value={password}
                            onChange ={(e)=>{setPassword(e.target.value)}}
                            />
                            <label htmlFor="fname"><b>Confirm Password</b></label>
                            <MDBInput 
                            wrapperClass='mb-3' 
                            label=''  
                            type='password'
                            value={cPassword}
                            onChange ={(e)=>{setCPassword(e.target.value)}}
                            />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={(e)=>handleSubmit(e)}>Sign Up</MDBBtn>
                            <a className="small text-muted" href="/login">Back to Login </a>
                        

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>
            <Toaster />

        </MDBContainer>
    )
}
