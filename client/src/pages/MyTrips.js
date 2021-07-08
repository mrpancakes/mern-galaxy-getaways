import React from 'react'
import jupiterImg from '../images/jupiter.png'
import MyTripCards from '../components/MyTripCards'

const MyTrips = () => {
    return (
        <>
            <main className="container mb-5">

            <header>
                <h1 className="mb-3">My Trips</h1>
                <h6>All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>

                </header>


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
