import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import TripContext from '../utils/TripContext'
import API from '../utils/API'

const LoginForm = () => {

    const history = useHistory();

    const { setLoggedIn } = useContext(TripContext);

    const [loginInfo, setLoginInfo] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data: {token}} = await API.loginUser({
                email: loginInfo.email,
                password: loginInfo.password,
            })
            localStorage.setItem('userToken', token);
            setLoggedIn(true);
            history.push('/');
        } catch(err) {
            console.log(err)
        }
        
    }

    return (
        <form className="login-form">
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input onChange={handleInputChange} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input onChange={handleInputChange} type="password" name="password"  className="form-control" id="password" />
            </div>
            <button onClick={handleFormSubmit} type="submit" className="btn btn-success">Login</button>
        </form>
    )
}

export default LoginForm
