import React, {useState, useContext} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link, useParams} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default function SingleRoom() {
    const [srstate, setSrstate] = useState({
        slug: useParams().slug,
        defaultBcg
    })
    const srcontxt = useContext(RoomContext)
    const {getRoom} = srcontxt
    const room = getRoom(srstate.slug)
  
    if(!room){
        return <div className="sr-main-content">
            <p className="no-found">No room found</p>
            <Link to='/' className="sr-back">
                Home
            </Link>
        </div>
    }

    const {name,description,capacity,size,price,extras,
    breakfast,pets,images} = room

    return (
        <div>
            <StyledHero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className="btn-primary">
                        Back to Rooms</Link> 
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item, index)=>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h4>Price: ${price}</h4>
                        <h4>Size: {size}SQFT</h4>
                        <h4>
                            Max Capacity: {
                                capacity > 1 ? `${capacity} People`:
                                `${capacity} Person`
                            }
                        </h4>
                        <h4>
                           {pets?"Pets allowed":"Pets not allowed"} 
                        </h4>
                        <h4>
                            {breakfast && "Free breakfast included"}
                        </h4>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    {extras.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}                 
                </ul>
            </section>
        </div> 
    )
}
