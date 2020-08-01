import React, {useState} from 'react'
import Title from './Title'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCocktail, faHiking, faBeer, faShuttleVan} from '@fortawesome/free-solid-svg-icons'

function Services(){
    
 const [services, setServices] = useState([
            {
            icon: <FontAwesomeIcon icon={faCocktail} />,
            title: "Free cocktails",
            info: "Free cocktails for everyone!"
            },
            {
            icon: <FontAwesomeIcon icon={faHiking} />,
            title: "Endless hiking",
            info: "Get a workout while you stay"
            },
            {
            icon: <FontAwesomeIcon icon={faShuttleVan} />,
            title: "Free shuttle service",
            info: "Shuttle services from 6:00am to 11:00pm"
            },
            {
            icon: <FontAwesomeIcon icon={faBeer} />,
            title: "Strongest Beer",
            info: "They're also free!"
            }])
        


    return(
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {services.map((service,index) =>{
                    return(
                        <article key={index} className="service">
                            <span className="service-logo">{service.icon}</span>
                            <h2>{service.title}</h2>
                            <span>{service.info}</span>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services