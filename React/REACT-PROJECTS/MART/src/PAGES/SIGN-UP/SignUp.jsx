import React from 'react'
import { Zap } from 'lucide-react'
import SignUpForm from './SignUp-Form'

const SignUp = () => {
    return (
        <div className='h-screen bg-[#0d0d0d] flex flex-col justify-center items-center'>
            <div className="flex items-center justify-center gap-2.5 mb-7">
                <div className="w-8 h-8 bg-[#c8f400] rounded-lg flex items-center justify-center">
                    <Zap size={18} className="text-neutral-900" fill="currentColor" />
                </div>
                <span className="text-xl font-medium text-white">
                    Sky <span className="text-[#c8f400]">Mart</span>
                </span>
            </div>
            <SignUpForm/>
        </div>
    )
}

export default SignUp