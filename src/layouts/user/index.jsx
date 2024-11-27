import LoginSignupForm from 'components/user/login/LoginSignupForm'
import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import HomePage from 'views/user/HomePage'

function User() {
  return (
    <>
   
    {/* <LoginSignupForm /> */}
    <HomePage />
    {/* <Routes>
      <Route to ='/user' element={ <HomePage />} />

    </Routes> */}
    </>
  )
}

export default User