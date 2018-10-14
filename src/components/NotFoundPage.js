import React from 'react';
import { BrowserRouter ,Route, Switch, Link, NavLink} from 'react-router-dom';
const NotFoundPage = () => (
    <div>
     error: page not found
     <Link to="/">go home</Link> 
    </div>
    //using link we prohibits the browser when there is a page change, to go to server and ask for page ,instead we tell browser just go to that Link without refreshing the page
)
export default NotFoundPage