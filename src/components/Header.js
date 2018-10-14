import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify test</h1>
        <br />
        <NavLink to="/home" activeClassName = "is-active" exact={true}>Home</NavLink><br /> {/*NavLink has more props and styling features*/}
        <NavLink to="/create" activeClassName = "is-active">Add expense</NavLink><br />

    </header>
)
export default Header