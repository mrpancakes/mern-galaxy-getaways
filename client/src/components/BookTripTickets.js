import React from 'react'

const BookTripTickets = (props) => {
    return (
        <div>
            <div className="ticket">
                <div className="ticket-header" id={props.color}></div>
                <div className="seat-section">{props.seat}</div>
                <form>
                    <div className="d-flex align-items-center">
                        <label for="spaceline" className="form-label">Spaceline: </label>
                        <input type="text" readOnly value="SpaceX" id="spaceline" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="depart" className="form-label">Depart: </label>
                        <input type="text" readOnly value="12/01/2021" id="depart" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="return" className="form-label">Return: </label>
                        <input type="text" readOnly value="12/29/2021" id="return" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="section" className="form-label">Section: </label>
                        <input type="text" readOnly value={props.seat} id="section" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="passengers" className="form-label">Passengers: </label>
                        <input type="text" readOnly value={props.passengers} id="passengers" />
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="pricePerTicket" className="form-label">Price/ticket: </label>
                        <input type="text" readOnly value={props.ticketPrice} id="pricePerTicket" />
                    </div>
                    <div className="d-flex align-items-center total-price">
                        <label for="total" className="form-label">Total: </label>
                        <input type="text" readOnly value={props.ticketPrice*props.passengers} id="total" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success m-auto">Instant Purchase</button>
                    </div>
                    <div className="ticket-disclaimer">*Clicking the button above will charge your card on file immediately
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookTripTickets
