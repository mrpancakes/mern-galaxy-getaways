import React, { useContext } from 'react'
import earthImg from '../images/earth.png'
import TripContext from '../utils/TripContext'

const About = () => {

    const { loggedIn } = useContext(TripContext);

    return (
        <>
            <main className="container d-flex flex-column align-items-center justify-content-center mb-5">
                <header>
                    <h1 className="">Welcome to Galaxy Getaways!</h1>
                </header>
                <p className="about">At Galaxy Getaways, our mission is to provide you with an out-of-this-world adventure like you've never experienced. We curate the best deals for intergalactic travel to your favorite destinations. Our spaceline providers are thoroughly vetted by our team, ensuring we only serve up the most reputable and reliable spacecrafts for your safety and comfort.<br /><br />
                So sit back, relax, and enjoy the trip of a lifetime.<br /><br />
                <u>Please note</u>: Currently, all flights depart at 5:00pm local time at the launch center in Cape Canaveral, Florida.</p><br />

                {loggedIn ? 
                <a href="/"> <button className="btn btn-success">BOOK A TRIP</button></a>
                :
                <a href="/login"> <button className="btn btn-success">Login to book a trip</button></a>
                }

            </main>
            <footer>
                <img className="planet" id="earth" src={earthImg} alt="earth" />
            </footer>
        </>
    )
}

export default About
