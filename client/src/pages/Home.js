import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

import HomeForm from '../components/HomeForm/HomeForm'
import marsImg from '../images/marsglobe.png'
import BookTrip from '../components/BookTrip'


const Home = () => {

    const [searchTrips, setSearchTrips] = useState(true);

  // const [departDate, Set]

  const showHideSearch = () => {
    setSearchTrips(!searchTrips);
  }


  // Need state and conditionals to show/hide form if user is logged in
  

  // Styled Material UI button
  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      fontSize: '1.2rem'
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  

  return (
    <>
      <main className="container">

        {searchTrips ?
          <>
            <h1>Where is your next adventure?</h1>
            <h5 className="mb-5">Must be logged in to book a trip</h5>
            <StyledButton href="/login">Login/Signup</StyledButton>
            <form className="container">
              <div className="row">
                <HomeForm />
                <div className="search-flights-btn">
                  <button className="btn btn-dark" onClick={showHideSearch}>Search Flights<i className="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </form>

          </> :
          <>
            <header>
              <h1 className="mb-3">Book Your Flight to [Insert Planet]</h1>
              <h6 className="mb-4">All flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</h6>
              <Button style={{textTransform: 'none', color: 'white', border: '2px solid white'}} variant="outlined" color="primary" onClick={showHideSearch}>
                <i className="fas fa-arrow-left"></i>&nbsp;New Flight Search</Button>
            </header>
            <BookTrip />
          </>
        }

      </main>

      <footer>

        <img className="planet" src={marsImg} alt="mars" />
      </footer>
    </>
  )
}

export default Home
