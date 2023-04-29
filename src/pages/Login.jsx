import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await logIn(email, password)
            navigate("/home")
        }
        catch(err) {
            setError(err.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await googleSignIn();
            navigate("/home")
        }catch(err){
            setError(err.message)
        }
    }

  return (
    <>
    
        <div className="p-4 mb-2 box">

            <h2 className="mb-3">Firebase Auth Sign In</h2>

            {error && <Alert variant='danger'>{ error }</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Control onChange={(e) => {setEmail(e.target.value)}} type='email' placeholder='Email Address' required/>
                </Form.Group>

                <Form.Group className='mb-4'>
                    <Form.Control onChange={(e) => {setPassword(e.target.value)}} type='password' placeholder='Password' required/>
                </Form.Group>

                <div className="d-grid gap-2 mb-4">
                    <Button variant='primary' type='submit'>Log In</Button>
                </div>
            </Form>

            <hr />

            <div className='d-flex w-100 mt-4'>
                <GoogleButton onClick={handleGoogleSignIn} className='w-100' />
            </div>

        </div>

        <div className="p-4 box text-center">
            Already have an account? <Link className='text-decoration-none' to='/signup'>Sign Up</Link>
        </div>
    
    </>
  )
}

export default Login
