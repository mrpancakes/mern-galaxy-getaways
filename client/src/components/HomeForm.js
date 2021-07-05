import React from 'react';

const HomeForm = () => {
    return (
        <>
            <form className="container">
                <div className="row g-3">
                    <div className="col-12 col-lg-3">
                        <select className="form-select" aria-label="Default select">
                            <option selected disabled>Destination</option>
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
                        <select className="form-select col" aria-label="Default select">
                            <option selected disabled>Departure</option>
                            <option value="1">Use React package for date picker</option>
                        </select>
                    </div>

                    <div className="col-12 col-lg-3">
                        <select className="form-select col" aria-label="Default select">
                            <option selected disabled>Return</option>
                            <option value="1">Use React package for date picker</option>
                        </select>
                    </div>

                    <div className="col-12 col-lg-3">
                        <select className="form-select col" aria-label="Default select">
                            <option selected disabled>Passengers</option>
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
