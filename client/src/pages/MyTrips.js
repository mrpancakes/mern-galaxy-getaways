import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
// import NumberFormat from 'react-number-format';
// import moment from 'moment';

import MyTripsTickets from '../components/MyTripsTickets';
import jupiterImg from '../images/jupiter.png'
import API from '../utils/API'


const MyTrips = () => {

    const history = useHistory();

    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (localStorage.getItem('userToken')) {
                const data = await API.getUserTrips();
                setUserTrips(data.user.trips);
            } else {
                history.push('/login');
            }
        }
        fetchData();
    }, []);

    const handleFormSubmit = async (tripId) => {
        try {
            const data = await API.deleteTrip(tripId);
            setUserTrips(data.user.trips);
        } catch (err) {
            console.log(err);
        }
    }

    console.log(userTrips);

    return (
        <>
            <main className="container mb-5">

                <header>
                    <h1 className="mb-3">My Trips</h1>
                </header>

                {userTrips.length < 1 ? console.log('no trips') : console.log('yes trips')}

                {!userTrips.length > 0 ?
                    <div className="text-center">
                        <h4 className="mb-4">You have no trips booked! Whare are you waiting for?</h4>
                        <a href="/"><button className="btn btn-success">BOOK A TRIP</button></a>
                    </div>
                    :
                    <>
                    <h6 className="text-center mb-5">All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>
                    <section className="d-flex flex-wrap justify-content-around">
                        {/* Map through all of a user's trips and create cards */}
                        {userTrips.map(trip => (
                            <MyTripsTickets
                                key={trip._id}
                                tripId={trip._id}
                                destination={trip.destination}
                                spaceline={trip.spaceline}
                                departureDate={trip.departureDate}
                                section={trip.section}
                                passengers={trip.passengers}
                                pricePerTicket={trip.pricePerTicket}
                                total={trip.total}
                                deleteTrip={handleFormSubmit}
                            />
                        ))}
                    </section>
                    </>
                }

            </main>

            <footer>

                <img className="planet" id="jupiter" src={jupiterImg} alt="jupiter" />
            </footer>
        </>
    )
}

export default MyTrips
