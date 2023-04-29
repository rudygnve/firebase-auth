import React, { useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext'


const Home = () => {

  const {user} = useUserAuth();
  const { logOut } = useUserAuth();
  const [error, setError] = useState("")
  console.log(user)

  const handleLogOut = async (e) => {
    try {
      setError("")
      await logOut();
    }catch(err) {
      setError(err.message)
    }
  }

  return (
    <Container>
        <div className='user-container d-flex align-items-center flex-direction-column gap-15 p-4 box mb-3 text-center'>
          Hello, welcome to your account<br/>
          <div className="user">
            <img className='avatar' src={user && user.photoURL} alt="" />
            <strong>{user && user.displayName}</strong>
          </div>

        </div>
        <div className="d-grid gap-2">
            <Button onClick={handleLogOut} variant='primary'>Log Out</Button>
        </div>
        <div>
        {error && <Alert variant='danger'>{ error }</Alert>}
        </div>
    </Container>
  )
}

export default Home
