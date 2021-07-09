import React from 'react'
import NumberFormat from 'react-number-format';

const RegisterForm = () => {
    return (
        <form class="container register-form p-4">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" aria-describedby="firstName"/>
                    </div>
                    <div class="col-12 col-lg-6">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName" aria-describedby="lastName"/>
                    </div>
                </div>
                <div>
                    <label for="street" class="form-label">Street Address</label>
                    <input type="text" class="form-control" id="street" aria-describedby="street"/>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-4">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" aria-describedby="city"/>
                    </div>
                    <div class="col-12 col-lg-4">
                        <label for="state" class="form-label">State</label>
                        <input type="text" class="form-control" id="state" aria-describedby="state" placeholder="two-letter abbrev." maxlength="2"/>
                    </div>
                    <div class="col-12 col-lg-4">
                        <label for="zip" class="form-label" maxlength="5">Zip</label>
                        <input type="number" class="form-control" id="zip" aria-describedby="zip"/>
                    </div>
                </div>

                <div class="row d-flex align-items-center">
                    <div class="col-12 col-lg-6">
                        <label for="creditCard" class="form-label">Credit Card Number</label>
                        {/* <input type="number" class="form-control" id="creditCard" aria-describedby="creditCard"/> */}
                        <NumberFormat className="creditcard" format="#### #### #### ####" mask="_"/>
                    </div>
                    
                    <div class="col-12 col-lg-6">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>

                <div>
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-success mt-4">Register</button>
            </form>
    )
}

export default RegisterForm
