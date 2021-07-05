import React from 'react'
import earthImg from '../images/earth.png'

const About = () => {
    return (
        <>
            <main className="container mb-5">
                <header>
                    <h1 className="">Welcome to Galaxy Getaways!</h1>
                </header>

                <p classNameName="bg-dark">At Galaxy Getaways, our mission is to provide you with an out-of-this-world adventure like you've never experienced. We curate the best deals for intergalactic travel to your favorite desitnations. Our spaceline providers are thoroughly vetted by our team, ensuring we only serve up the most reputable and reliable spacecrafts for your safety and comfort.<br/><br/>So sit back, relax, and enjoy the trip of a lifetime.</p>


            </main>
            <footer>
                <img className="planet" id="earth" src={earthImg} alt="earth" />
            </footer>
        </>
    )
}

export default About
