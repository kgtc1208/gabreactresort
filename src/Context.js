import React, {useEffect, useState, useRef} from 'react'
import items from './data'
import Client from './Contentful'

Client.getEntries().then(response=> console.log(response.items))

const RoomContext = React.createContext();

function RoomProvider(props) {
    const firstUpdate = useRef(true)    
    const [states, setStates] =  useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type: 'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    })

    const  filterRooms = () =>{
        let{
            rooms,type,capacity,price,minSize,maxSize,breakfast,
            pets} = states

            let tempRooms = [...rooms];
            if(type !=='all'){
                tempRooms = tempRooms.filter(room => room.type === type)
            }

            capacity = parseInt(capacity)
            if(capacity != 1){
                tempRooms = tempRooms.filter(room =>room.capacity >=
                    capacity)
            }

            price = parseInt(price)
            tempRooms = tempRooms.filter(room =>room.price <= price)
            
            tempRooms = tempRooms.filter(room => room.size >= 
                minSize && room.size <= maxSize)

            if(breakfast){
                tempRooms = tempRooms.filter(room => room.breakfast
                    === true)
            }

            if(pets){
            tempRooms = tempRooms.filter(room => room.pets
                    === true)
            }

            setStates({...states,sortedRooms:tempRooms})
        }
        
        const handleChange = e =>{
            const target = e.target
            const value = target.type === 'checkbox'? 
            target.checked:target.value
            const name = e.target.name
            setStates({...states, [name]:value})
        }
    
    const getData = async ()=>{
        try {
            let response = await Client.getEntries()
            let rooms = formatData(response.items)
            let featuredRooms = rooms.filter(room => room.featured
                === true)
            let maxPrice = Math.max(...rooms.map(room=>
                room.price));
            let maxSize = Math.max(...rooms.map(room=>
                room.size));
            setStates({...states,
                rooms:rooms, 
                sortedRooms:rooms, 
                featuredRooms:featuredRooms, 
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(firstUpdate.current) {
            getData()
            firstUpdate.current = false
        }
        else{
        filterRooms()
        }
    },[states.type,
        states.capacity,
        states.price,
        states.minPrice,
        states.maxPrice,
        states.minSize,
        states.maxSize,
        states.breakfast,
        states.pets])
    
    function formatData(items){
        let tempitems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image =>
                image.fields.file.url)
            let room = {...item.fields, images, id}
        return room;
        });
        return tempitems ;
    }

    const getRoom = (slug) =>{
        let tempRooms = [...states.rooms];
        const room = tempRooms.find((room=>room.slug === 
            slug))
            return room;
    }

    return(
        <div>
            <RoomContext.Provider value={{...states,
            getRoom: getRoom,
            handleChange: handleChange}}>
                {props.children}
            </RoomContext.Provider>         
        </div>
    )
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomContext, RoomConsumer};