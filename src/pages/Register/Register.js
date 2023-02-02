import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from '../../Components/SignUp'

const Register = () => {
    return (
        <div>
            <h1>register</h1>

            <SignUp />

            <p>
                Already have an account? <Link to="/loginPage">Sign In</Link>
            </p>
        </div>
    )
}

export default Register