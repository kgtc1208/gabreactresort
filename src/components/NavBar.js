import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'

function NavBar (){
    const [visible, setVisible] = useState(false)
    const transitions = useTransition(visible, null, {
        from: { opacity: 0, transform:'translateX(100%)' },
        enter: { opacity: 1, transform:'translateX(0%)' },
        leave: { opacity: 0, transform:'translateX(100%)' },
        })
    var menu

    if(visible){
        menu = <div className="nav-links-sm">
        <Link to="/" className="nav-bar-link">Home</Link>
        <Link to="/Rooms" className="nav-bar-link">Rooms</Link>
        <FontAwesomeIcon icon={faChevronRight}  className="navbar-menu-button" onClick={()=>setVisible(!visible)}/>
    </div>
    }

    return(
        <div className="nav-bar">
            <p className="bibit">Bibit Resort</p>
            <div className="nav-links">
                <Link to="/" className="nav-bar-link">Home</Link>
                <Link to="/Rooms" className="nav-bar-link">Rooms</Link>
            </div>
            <div>
                <FontAwesomeIcon icon={faBars}  className="navbar-button" onClick={()=>setVisible(!visible)}/>
            </div>
            {
            transitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                key={key} 
                style={props}
                className="nav-links-sm">
                    {menu}
                </animated.div>)
        }
        </div>
    )
}

export default NavBar