import React from 'react'
import saturnMoonImg from '../images/saturn-moon.png'
import BookTripTickets from '../components/BookTripTickets'

const BookTrip = () => {
    return (
        <>
            <main className="container mb-5">
                <header>
                    <h1 className="mb-4">Book Your Flight to Mars</h1>
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
