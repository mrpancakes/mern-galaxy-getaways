import React from 'react'
import saturnMoonImg from '../images/saturn-moon.png'

const Confirmation = () => {
    return (
        <>
            <main className="container mb-5">
                <div className="d-flex flex-column">
                    <h1 className="text-center">Trip Confirmed!</h1>
                    <div className="mb-4">Congratulations! You are confirmed for a one-of-kind adventure you'll surely never forget! Click below
                        to be taken to your Trips page. You may cancel your trip up to 14 days prior to launch for a 10% fee.
                Cancellation within 30 days of departure is non-refundable.</div>
                    <a className="btn btn-info m-auto" href="/my-trips" role="button">My Trips</a>
                </div>
            </main>
            <footer>
                <img className="planet" id="saturn-moon" src={saturnMoonImg} alt="saturn-moon" />
            </footer>
        </>
    )
}

export default Confirmation
