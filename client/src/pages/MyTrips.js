import React from 'react'
import jupiterImg from '../images/jupiter.png'
import MyTripCards from '../components/MyTripCards'

const MyTrips = () => {
    return (
        <>
            <main className="container mb-5">

                <h1 className="mb-5 text-center">My Trips</h1>


                <section className="d-flex flex-wrap justify-content-around">
                    {/* Map through all of a user's trips and create cards */}
                    <MyTripCards />
                </section>

            </main>

            <footer>

                <img className="planet" id="jupiter" src={jupiterImg} alt="jupiter" />
            </footer>
        </>
    )
}

export default MyTrips
