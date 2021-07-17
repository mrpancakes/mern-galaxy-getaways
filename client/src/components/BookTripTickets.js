import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import moment from 'moment';
import NumberFormat from 'react-number-format';
import TripContext from "../utils/TripContext"
import API from '../utils/API'

const BookTripTickets = (props) => {

    const history = useHistory();

    const [clickedBook, setClickedBook] = useState(false)

    const { tripInfo, setTripInfo } = useContext(TripContext);

    const passengerCount = props.tripInfo.passengers
    const formattedDepartDate = moment(props.tripInfo.departDate).format('MM/DD/YYYY');
    const formattedReturnDate = moment(props.tripInfo.returnDate).format('MM/DD/YYYY');
    const totalPrice = props.ticketPrice * passengerCount;

    const showConfirmBtn = () => {
        setClickedBook(true);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(tripInfo);
            console.log(localStorage.userToken);
            const data = await API.bookTrip({
                ...tripInfo,
                spaceline: "SpaceX",
                section: props.seat,
                pricePerTicket: props.ticketPrice,
                total: totalPrice,
            });
            console.log(data);
            history.push('/confirmation')

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mb-5">
            <div className="bookTicket mb-5">
                <div className="ticket-header" id={props.color}></div>
                <div className="seat-section">{props.seat}</div>
                <form>
                    <div className="d-flex align-items-center">
                        <label for="spaceline" className="form-label">Spaceline: </label>
                        <input type="text" name="spaceline" readOnly value="SpaceX" id="spaceline" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="depart" className="form-label">Depart: </label>
                        <input type="text" name="departureDate" readOnly value={props.tripInfo ? formattedDepartDate : 0} id="depart" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="return" className="form-label">Return: </label>
                        <input type="text" name="returnDate" readOnly value={props.tripInfo ? formattedReturnDate : 0} id="return" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="section" className="form-label">Section: </label>
                        <input type="text" name="section" readOnly value={props.seat} id="section" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="passengers" className="form-label">Passengers: </label>
                        <input type="text" name="passengers" readOnly value={props.tripInfo ? passengerCount : 0} id="passengers" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="pricePerTicket" className="form-label">Price/ticket: </label>
                        <NumberFormat name="pricePerTicket" readOnly value={props.ticketPrice} thousandSeparator={true} prefix={'$'} />
                    </div>
                    <div className="d-flex align-items-center total-price">
                        <label for="total" className="form-label">Total: </label>
                        <NumberFormat name="total" readOnly value={props.tripInfo ? totalPrice : 'Calculating...'} thousandSeparator={true} prefix={'$'} />
                    </div>
                    {!clickedBook ? 
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-info m-auto" onClick={showConfirmBtn}>Book Trip</button>
                    </div>
                    :
                    <>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success m-auto" onClick={handleFormSubmit}>Confirm Purchase</button>
                    </div>
                    <div className="ticket-disclaimer">*Clicking the button above will charge your card on file immediately
                    </div>
                    </>
                    }
                </form>
            </div>
        </div>
    )
}

export default BookTripTickets
