import React from 'react';
import Begin from './Begin/Begin'
import Collection from "./Collection/Collection";
import Obrende from './Obrende/Obrende';
import Primerka from './Primerka/Primerka';
import Shouroom from './Shouroom/Shouroom';
import Star from './Star/Star'
import Otziv from './Otziv/Otziv'
import Instagram from './Instagram/Instagram';
import { Navigate } from 'react-router-dom';
import { Use_auth } from '../../Components/Hooks/Use_auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../Components/LoginRedux/Store/Slices/userSlice';

const Home = () => {

    const dispatch = useDispatch();

    const { isAuth, email } = Use_auth();

    return isAuth ? (
        <>
            <Begin />
            <Collection />
            <Obrende />
            <Shouroom />
            <Primerka />
            <Star />
            <Otziv />
            <Instagram />
            <button
                onClick={() => dispatch(removeUser())}
            >
                Log Out from {email}
            </button>
        </>
    ) : (
        <Navigate
            to="loginPage"
            replace={true}
        >
        </Navigate>
    );
};
export default Home;