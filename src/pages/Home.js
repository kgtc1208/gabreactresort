import React from 'react';
import Hero from '../components/Hero.js'
import Banner from '../components/Banner.js'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero.js'
function Home(){
    return(
        <div>
            <Hero>
                <Banner title="luxurious rooms"
                subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>

    )
}

export default Home
