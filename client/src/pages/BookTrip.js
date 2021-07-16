import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import saturnMoonImg from '../images/saturn-moon.png'
import BookTripTickets from '../components/BookTripTickets'
import TripContext from "../utils/TripContext.js"

const BookTrip = () => {

    const { tripInfo } = useContext(TripContext);

    return (
        <>
            <main className="container mb-5">
                <header>
                    <h1 className="mb-3">Book Your Flight to {tripInfo.destination}</h1>
                    <h6 className="mb-4">All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>
                    <Button style={{ textTransform: 'none', color: 'white', border: '2px solid white' }} variant="outlined" color="primary" href="/">
                        <i className="fas fa-arrow-left"></i>&nbsp;New Flight Search</Button>
                </header>
                <section className="d-flex flex-wrap justify-content-around">

                    <BookTripTickets
                        color="blue"
                        seat="Economy"
                        ticketPrice='3000'
                        tripInfo={tripInfo}
                    />
                    <BookTripTickets
                        color="pink"
                        seat="Business Class"
                        ticketPrice='5000'
                        tripInfo={tripInfo}
                    />
                    <BookTripTickets
                        color="gold"
                        seat="First Class"
                        ticketPrice='8000'
                        tripInfo={tripInfo}
                    />

                </section>

            </main>
            <footer>
                <img className="planet" id="saturn-moon" src={saturnMoonImg} alt="saturn-moon" />
            </footer>
        </>
    )
}

export default BookTrip
