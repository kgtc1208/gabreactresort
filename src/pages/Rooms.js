import React from 'react';
import Hero from '../components/Hero.js'
import Banner from '../components/Banner.js'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'

function Rooms(){
    return(
        <header>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </header>
    )
}

export default Rooms