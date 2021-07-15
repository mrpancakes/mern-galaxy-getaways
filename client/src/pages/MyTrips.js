import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import moment from 'moment';

import jupiterImg from '../images/jupiter.png'
import API from '../utils/API'

const MyTrips = () => {

    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await API.getUserTrips();
            // console.log(data.user.trips);
            setUserTrips(data.user.trips);

        }
        fetchData();

    }, [])

    const handleFormSubmit = async (tripId) => {
        // event.preventDefault();
        try {
            console.log(tripId);
            const data = await API.deleteTrip(tripId);
            setUserTrips(data.user.trips);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <main className="container mb-5">

                <header>
                    <h1 className="mb-3">My Trips</h1>
                    <h6>All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>

                </header>


                <section className="d-flex flex-wrap justify-content-around">
                    {/* Map through all of a user's trips and create cards */}
                    {userTrips.map(trip => (
                        <div className="ticket" key={trip._id}>
                            <div className="ticket-header" id="lunar-gray"></div>
                            <div className="seat-section">Trip to {trip.destination}</div>
                            <form>
                                <div className="d-flex align-items-center">
                                    <label for="spaceline" className="form-label">Spaceline: </label>
                                    <input type="text" readOnly value={trip.spaceline} id="spaceline" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label for="depart" className="form-label">Depart: </label>
                                    <input type="text" readOnly value={moment(trip.departureDate).format('MM/DD/YYYY')} id="depart" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label for="return" className="form-label">Return: </label>
                                    <input type="text" readOnly value={moment(trip.returnDate).format('MM/DD/YYYY')} id="return" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label for="section" className="form-label">Section: </label>
                                    <input type="text" readOnly value={trip.section} id="section" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label for="passengers" className="form-label">Passengers: </label>
                                    <input type="text" readOnly value={trip.passengers} id="passengers" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label for="pricePerTicket" className="form-label">Price/ticket: </label>    
                                    <NumberFormat name="pricePerTicket" readOnly value={trip.pricePerTicket} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="d-flex align-items-center total-price">
                                    <label for="total" className="form-label">Total: </label>                                    
                                    <NumberFormat name="total" readOnly value={trip.total} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="button" className="btn btn-danger m-auto" onClick={() => handleFormSubmit(trip._id)}>Cancel Trip</button>
                                </div>
                                <div className="ticket-disclaimer">*Clicking the button above will cancel your trip immediately
                            </div>
                            </form>
                        </div>
                    ))}
                </section>

            </main>

            <footer>

                <img className="planet" id="jupiter" src={jupiterImg} alt="jupiter" />
            </footer>
        </>
    )
}

export default MyTrips
