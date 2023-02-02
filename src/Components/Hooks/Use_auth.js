import { useSelector } from 'react-redux'

export function Use_auth() {
    const { email, token, id } = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    };
}