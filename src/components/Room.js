import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

export default function Room({room}) {
    const {name, slug, images, price} = room
    return (
        <article className="froom">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h2>${price}</h2>
                    <p>per night</p>
                </div>
                <Link to={`/Rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
                <h2 className="room-info">{name}</h2>
            </div>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}