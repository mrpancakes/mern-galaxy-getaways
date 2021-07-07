import React from 'react';
import HomeForm from '../components/HomeForm/HomeForm'
import marsImg from '../images/marsglobe.png'

const Home = () => {

    // Need state and conditionals to show/hide form if user is logged in

    return (
        <>
            <main className="container">
                <h1>Where is your next adventure?</h1>

                <h5 className="mb-5">Must be logged in to book a trip</h5>
                <button className="btn btn-success login-btn">Log In / Sign Up</button>

                <HomeForm />
            </main>

            <footer>

                <img className="planet" src={marsImg} alt="mars" />
            </footer>
        </>
    )
}

export default Home
