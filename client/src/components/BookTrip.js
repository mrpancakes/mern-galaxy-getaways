import React from 'react'
import saturnMoonImg from '../images/saturn-moon.png'
import BookTripTickets from './BookTripTickets'

const BookTrip = () => {
    return (
        <>
            <main className="container mb-5">
                {/* <header>
                <h1 className="mb-3">Book Your Flight to Mars</h1>
                <h6>All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>

                </header> */}

                <section className="d-flex flex-wrap justify-content-around">

                    <BookTripTickets
                        color="blue"
                        seat="Economy"
                        ticketPrice="3000"
                        passengers="4" // will be dynamic based on form fill
                    />
                    <BookTripTickets
                        color="pink"
                        seat="Business Class"
                        ticketPrice="5000"
                        passengers="4"
                    />
                    <BookTripTickets
                        color="gold"
                        seat="First Class"
                        ticketPrice="8000"
                        passengers="4"
                    />

                </section>

            </main>
        </>
    )
}

export default BookTrip
