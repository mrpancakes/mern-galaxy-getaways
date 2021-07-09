import React, { useState, useEffect, useContext, } from 'react'
import { useHistory } from "react-router-dom";
import './style.css'
import DatePicker from 'react-date-picker'
import TripContext from "../../utils/TripContext.js"

const HomeForm = (props) => {
    console.log(props);
    let history = useHistory();
    
    const {tripInfo, setTripInfo} = useContext(TripContext);

    const updateTripValues = (e) => {
        e.preventDefault();
        console.log(departDate);
        console.log(returnDate);
        console.log(destination);
        console.log(passengers);
        setTripInfo({
            destination,
            returnDate,
            departDate,
            passengers
        })
        history.push('/book-trip')
    }

    const [destination, setDestination] = useState('')
    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [passengers, setPassengers] = useState(0)




    // useEffect(() => {
    //     console.log(departDate);
    //     console.log(returnDate);
    // })

    return (
        <>
            <form className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                    <label class="form-label">Destination</label>
                        <select className="form-select" aria-label="Default select" onChange={(e) => setDestination(e.target.value)}>
                            <option selected disabled>Where to?</option>
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
                        <select className="form-select col" aria-label="Default select" onChange={(e) => setPassengers(e.target.value)}>
                            <option selected disabled>How many?</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="search-flights-btn">
                        <button className="btn btn-dark" onClick={(e) => updateTripValues(e)}>Search Flights<i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default HomeForm
