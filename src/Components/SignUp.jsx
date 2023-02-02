import { Form } from './Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from './LoginRedux/Store/Slices/userSlice'

import React from 'react'

const SignUp = () => {

    const dispatch = useDispatch()

    const push = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accrsToken
                }))
                push('/Home')
            })
            .catch(console.error)
    }


    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export { SignUp }