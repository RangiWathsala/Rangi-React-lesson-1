import React from 'react';
import { withRouter } from 'react-router';
import './Menu.scss';

const Menu = (props) =>{
return(
    <div className="menu">
        <button onClick={() => props.history.push('/users')}>Users</button>
        <button onClick={() => props.history.push('/about')}>About</button>
        
    </div>
)

};
export default withRouter(Menu);