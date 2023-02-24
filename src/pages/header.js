import React from 'react';
import { nanoid } from 'nanoid';
import _ from 'lodash';
function Header() {
    const headers = ["about", "skills", "experience", "projects", "education", "contact"];
    return ( 
        <>
        <header>
        <div id="mobile-menu-close">
            <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
            {headers.map((header) => <li key={nanoid()}>
                <a href={`#${header}`}>{_.startCase(header)}</a>
            </li>)}
        </ul>
        </header>
        </>
     );
}

export default Header;