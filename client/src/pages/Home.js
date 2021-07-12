import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import HomeForm from '../components/HomeForm/HomeForm'
import marsImg from '../images/marsglobe.png'

const Home = () => {

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

    // Need state and conditionals to show/hide form if user is logged in

    const [token, setToken] = useState(null);

    useEffect(() => {
      setToken(localStorage.getItem('userToken'));
    },[])

    console.log(token);

    return (
        <>
            <main className="container">
                <h1>Where is your next adventure?</h1>
                {!token ? 
                <>
                <h5 className="mb-5">Must be logged in to book a trip</h5>
                <StyledButton href="/login">Login/Signup</StyledButton>
                </>
                :
                <>
                <HomeForm />
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
