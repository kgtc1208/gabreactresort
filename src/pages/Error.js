import React from 'react';
import Hero from '../components/Hero.js'
import Banner from'../components/Banner.js'
import {Link} from 'react-router-dom'

function Error(){
    return(
        <header>
            <Hero>
                <Banner title = "404"
                subtitle = "Page not Found">
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
            </Hero>
            </header>
    )
}

export default Error