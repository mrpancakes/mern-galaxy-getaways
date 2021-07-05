import React from 'react'

const MyTripCards = () => {
    return (
        <div className="ticket">
                <div className="ticket-header" id="lunar-gray"></div>
                <div className="seat-section">Trip to [insert dest.]</div>
                <form>
                    <div className="d-flex align-items-center">
                        <label for="spaceline" className="form-label">Spaceline: </label>
                        <input type="text" readonly value="SpaceX" id="spaceline"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="depart" className="form-label">Depart: </label>
                        <input type="text" readonly value="12/01/2021" id="depart"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="return" className="form-label">Return: </label>
                        <input type="text" readonly value="12/29/2021" id="return"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="section" className="form-label">Section: </label>
                        <input type="text" readonly value="Economy" id="section"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="quantity" className="form-label">Quantity: </label>
                        <input type="text" readonly value="4" id="quantity"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <label for="pricePerTicket" className="form-label">Price/ticket: </label>
                        <input type="text" readonly value="$3,000" id="pricePerTicket"/>
                    </div>
                    <div className="d-flex align-items-center total-price">
                        <label for="total" className="form-label">Total: </label>
                        <input type="text" readonly value="$12,000" id="total"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger m-auto">Cancel Trip</button>
                    </div>
                    <div className="ticket-disclaimer">*Clicking the button above will cancel your trip immediately
                    </div>
                </form>
            </div>
    )
}

export default MyTripCards
