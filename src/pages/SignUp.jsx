import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signUp(email, password)
            navigate("/")
        }
        catch(err) {
            setError(err.message)
        }
    }

  return (
    <>
    
        <div className="p-4 mb-2 box">

            <h2 className="mb-3">Firebase Auth Sign Up</h2>

            {error && <Alert variant='danger'>{ error }</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Control onChange={(e) => {setEmail(e.target.value)}} type='email' placeholder='Email Address' required/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Control onChange={(e) => {setPassword(e.target.value)}} type='password' placeholder='Password' required/>
                </Form.Group>

                <div className="d-grid gap 2 mb-3">
                    <Button variant='primary' type='submit'>Sign Up</Button>
                </div>
            </Form>
        </div>

        <div className="p-4 box text-center">
            Already have an account? <Link className='text-decoration-none' to='/'>Log In</Link>
        </div>
    
    </>
  )
}

export default SignUp
