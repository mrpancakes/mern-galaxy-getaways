import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useHistory } from "react-router-dom";
import API from '../utils/API'

const RegisterForm = () => {

    let history = useHistory();

    const [userInfo, setUserInfo] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value })
        // console.log(userInfo)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await API.createUser({
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                street: userInfo.street,
                city: userInfo.city,
                state: userInfo.state,
                zip: userInfo.zip,
                creditCard: userInfo.creditCard,
                email: userInfo.email,
                password: userInfo.password,
            })
            history.go(0)
            console.log(data);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="container register-form p-4">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <label for="firstName" className="form-label">First Name</label>
                    <input onChange={handleInputChange} name="firstName" type="text" className="form-control" id="firstName" aria-describedby="firstName" />
                </div>
                <div className="col-12 col-lg-6">
                    <label for="lastName" className="form-label">Last Name</label>
                    <input onChange={handleInputChange} name="lastName" type="text" className="form-control" id="lastName" aria-describedby="lastName" />
                </div>
            </div>
            <div>
                <label for="street" className="form-label">Street Address</label>
                <input onChange={handleInputChange} name="street" type="text" className="form-control" id="street" aria-describedby="street" />
            </div>

            <div className="row">
                <div className="col-12 col-lg-4">
                    <label for="city" className="form-label">City</label>
                    <input onChange={handleInputChange} name="city" type="text" className="form-control" id="city" aria-describedby="city" />
                </div>
                <div className="col-12 col-lg-4">
                    <label for="state" className="form-label">State</label>
                    <input onChange={handleInputChange} name="state" type="text" className="form-control" id="state" aria-describedby="state" placeholder="two-letter abbrev." maxlength="2" />
                </div>
                <div className="col-12 col-lg-4">
                    <label for="zip" className="form-label" maxlength="5">Zip</label>
                    <input onChange={handleInputChange} name="zip" type="number" className="form-control" id="zip" aria-describedby="zip" />
                </div>
            </div>

            <div className="row d-flex align-items-center">
                <div className="col-12 col-lg-6">
                    <label for="creditCard" className="form-label">Credit Card Number</label>
                    <NumberFormat onChange={handleInputChange} name="creditCard" className="creditcard" format="#### #### #### ####" mask="_" />
                </div>

                <div className="col-12 col-lg-6">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>

            <div>
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button onClick={handleFormSubmit} type="submit" className="btn btn-success mt-4">Register</button>
        </form>
    )
}

export default RegisterForm
