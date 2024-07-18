import React from "react";
import './Nav.scss'
import {
    Link,
    NavLink
} from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to='/' exact={true} activeClassName='active'>Home</NavLink>
                <NavLink to='/todo' activeClassName='active'>Todo</NavLink>
                <NavLink to='/about' activeClassName='active'>About</NavLink>
                <NavLink to='/user' activeClassName='active'>Users</NavLink>
                {/* <Link to='/'>Home</Link>
                <Link to='/todo'>Todo</Link>
                <Link to='/about'>About</Link> */}
            </div>
        )
    }
}

export default Nav