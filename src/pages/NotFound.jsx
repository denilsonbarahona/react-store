import React from 'react';
import {Link} from 'react-router-dom';

const NotFound=()=>{
    return ( 
    <div>
        There's nothing here!
        <Link to="/" >init</Link>
        <Link to="/password-recovery" >password-recovery</Link>
        <Link to="/login" >Login</Link>
    </div>);
}

export default NotFound