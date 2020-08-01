import React, {useContext} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomContext} from '../Context'
import Loading from './Loading'

export default function RoomsContainer() {
    const rccontxt = useContext(RoomContext)
    if(rccontxt.loading){
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rccontxt.rooms} />
            <RoomsList rooms={rccontxt.sortedRooms}/>
        </div>
    )
}
