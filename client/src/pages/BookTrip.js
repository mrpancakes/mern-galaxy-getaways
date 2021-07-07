import React from 'react'
import saturnMoonImg from '../images/saturn-moon.png'
import BookTripTickets from '../components/BookTripTickets'

const BookTrip = () => {
    return (
        <>
            <main className="container mb-5">
                <header>
                <h1 className="mb-3">Book Your Flight to Mars</h1>
                <h6>All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>

                </header>

                <section className="d-flex flex-wrap justify-content-around">

                    <BookTripTickets
                        color="blue"
                        seat="Economy"
                    />
                    <BookTripTickets
                        color="pink"
                        seat="Business Class"
                    />
                    <BookTripTickets
                        color="gold"
                        seat="First Class"
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
