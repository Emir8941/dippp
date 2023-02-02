import React from 'react'
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from './LoginRedux/Store/Slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const push = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
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

    const dispatch = useDispatch()

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />

    )
}

export { Login }