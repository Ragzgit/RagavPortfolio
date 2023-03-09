import React from 'react';
import { Link } from 'react-scroll';

function Intro() {
    return ( <div id="lead">
    <div id="lead-content">
        <h1>Ragavan Srinivasan</h1>
        <h2>Software Engineer</h2>
        <a style={{textDecoration: "none"}}href="https://drive.google.com/file/d/1YsJZK2TyaI7UnXn-wjyBWOsFLsKMgV75/view?usp=share_link" target="_blank" className="btn-rounded-white">Download Resume</a>
    </div>

    <div id="lead-overlay"></div>

    <div id="lead-down">
    <Link to="about" smooth={true} duration={600}>
        <span style={{color: "whitesmoke"}}>
            <i className="fa fa-chevron-down" aria-hidden="true">     
            </i>
        </span>
    </Link>
    </div>
</div> );
}

export default Intro;