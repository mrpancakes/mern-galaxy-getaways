import React, { useEffect, useState } from 'react';
import API from './API';

const PrivateRoute = ({children}) => {
    const [authToken, setAuthToken] = useState();

    useEffect(() => {
        async function getUserData() {
            let res = await API.loadUser();
            if (res.status === 200) {
                setAuthToken(res.user)
            } 
        }
        getUserData();
    }, [localStorage.userToken]);

    return (
       children
    );
}
export default PrivateRoute;