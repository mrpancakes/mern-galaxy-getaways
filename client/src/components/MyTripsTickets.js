import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
import moment from 'moment';

const MyTripsTickets = (props) => {

    const [clickedCancel, setClickedCancel] = useState(false);

    const showCancelBtn = () => {
        setClickedCancel(true);
    }

    return (
        <div className="myTicket m-md-3 mb-3">
            <div className="ticket-header" id="lunar-gray"></div>
            <div className="seat-section">Trip to {props.destination}</div>
            <form>
                <div className="form-fields">
                <div className="d-flex align-items-center">
                    <label htmlFor="spaceline" className="form-label">Spaceline: </label>
                    <input type="text" readOnly value={props.spaceline} id="spaceline" />
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="depart" className="form-label">Depart: </label>
                    <input type="text" readOnly value={moment(props.departureDate).format('MM/DD/YYYY')} id="depart" />
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="return" className="form-label">Return: </label>
                    <input type="text" readOnly value={moment(props.returnDate).format('MM/DD/YYYY')} id="return" />
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="section" className="form-label">Section: </label>
                    <input type="text" readOnly value={props.section} id="section" />
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="passengers" className="form-label">Passengers: </label>
                    <input type="text" readOnly value={props.passengers} id="passengers" />
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="pricePerTicket" className="form-label">Price/ticket: </label>
                    <NumberFormat name="pricePerTicket" readOnly value={props.pricePerTicket} thousandSeparator={true} prefix={'$'} />
                </div>
                <div className="d-flex align-items-center total-price">
                    <label htmlFor="total" className="form-label">Total: </label>
                    <NumberFormat name="total" readOnly value={props.total} thousandSeparator={true} prefix={'$'} />
                </div>
                </div>

                {!clickedCancel ? 

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-warning m-auto" onClick={showCancelBtn}>Cancel Trip</button>
                </div>
                :
                <>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-danger m-auto" onClick={() => {props.deleteTrip(props.tripId);}}>Confirm Cancellation</button>
                </div>
                <div className="ticket-disclaimer">*Clicking the button above will cancel your trip immediately</div>
                </>
                }
            </form>
        </div>
    )
}

export default MyTripsTickets
