import React, {useContext} from 'react';
import {RoomContext} from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

function FeaturedRooms(){
    const contxt = useContext(RoomContext)
    let rooms = contxt.featuredRooms.map(featuredroom => {
        return <Room key={featuredroom.id} room={featuredroom}/>
    })

    return(
        <section className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {rooms.loading?<Loading/>:rooms}
            </div>
        </section>
        
    )
}

export default FeaturedRooms