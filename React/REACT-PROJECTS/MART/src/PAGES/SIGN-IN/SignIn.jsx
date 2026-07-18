import React from 'react'
import WelcomeBack from './COMPONENTS/WelcomeBack'
import SignInForm from './COMPONENTS/SignIn-Form'
import { useState } from "react";


const SignIn = () => {


  return (
    <div className="min-h-screen w-full bg-black flex flex-col lg:flex-row">
      {/* Left: Welcome back section */}
      <WelcomeBack/>

      {/* Right: Sign in form */}
      <SignInForm/>
    </div>
  )
}

export default SignIn