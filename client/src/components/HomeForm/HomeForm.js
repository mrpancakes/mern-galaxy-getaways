import React, { useState, useEffect } from 'react'
import './style.css'
import DatePicker from 'react-date-picker'

const HomeForm = () => {

    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    useEffect(() => {
        console.log(departDate);
        console.log(returnDate);
    })

    return (
        <>
            <form className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                    <label class="form-label">Destination</label>
                        <select className="form-select" aria-label="Default select">
                            <option selected disabled>Where to?</option>
                            <option value="Moon">Earth's Moon</option>
                            <option value="Jupiter">Jupiter</option>
                            <option value="Mars">Mars</option>
                            <option value="Mercury">Mercury</option>
                            <option value="Neptune">Neptune</option>
                            <option value="Saturn">Saturn</option>
                            <option value="Uranus">Uranus</option>
                            <option value="Venus">Venus</option>
                        </select>
                    </div>

                    <div className="col-12 col-lg-3">
                    <label class="form-label">Departure</label><br />
                        <DatePicker
                            
                            onChange={setDepartDate}
                            value={departDate}
                        />
                    </div>

                    <div className="col-12 col-lg-3">
                    <label class="form-label">Return</label><br />
                        <DatePicker
                            onChange={setReturnDate}
                            value={returnDate}
                            calendarStartDay={0}
                        />
                    </div>

                    <div className="col-12 col-lg-3">
                    <label class="form-label">Passengers</label>
                        <select className="form-select col" aria-label="Default select">
                            <option selected disabled>How many?</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="search-flights-btn">
                        <button className="btn btn-dark">Search Flights<i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default HomeForm
