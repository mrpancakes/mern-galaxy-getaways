import React, { useState, useEffect } from 'react'
import earthImg from '../images/earth.png'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const Login = () => {

    const [login, setLogin] = useState(true);

    useEffect(() => {
        console.log(login);
    })

    const switchForms = () => {
        setLogin(!login);
        console.log(login);
    }

    return (
        <>
            <main className="container mb-5">
                {login ?
                    <h3 className="mb-2 text-center">Login or&nbsp;
                    <span className="login-form-link" onClick={switchForms}>
                            <u>sign up here</u>
                        </span>
                    </h3>
                    :
                    <h3 className="mb-2 text-center">Return to&nbsp;
                    <span className="login-form-link" onClick={switchForms}>
                            <u>login screen</u>
                        </span>
                    </h3>}

                <section className="d-flex flex-wrap justify-content-around">
                    {login ? <LoginForm /> : <RegisterForm />}
                </section>

            </main>

            <footer>

                <img className="planet" id="jupiter" src={earthImg} alt="jupiter" />
            </footer>
        </>
    )
}

export default Login
