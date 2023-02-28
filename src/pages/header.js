import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-scroll'
import _ from 'lodash';
function Header() {
    const headers = ["about", "skills", "experience", "projects", "education", "contact"];
    return ( 
        <>
        <header>
        {/* <div id="mobile-menu-close">
            <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div> */}
        <ul id="menu" className="shadow">
            {headers.map((header) => <li key={nanoid()}>
            <Link to={header} smooth={true} duration={600}>  
                {/* <a href={`#${header}`}>{_.startCase(header)}</a> */}
                {_.startCase(header)}
            </Link>
            </li>)}
        </ul>
        </header>
        </>
     );
}

export default Header;