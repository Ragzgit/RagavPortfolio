import React from 'react';

function Footer() {
    return ( <footer id="contact">
        <div className="container">
            <div className="row">
                {/* <div className="col-sm-5 copyright">
                    <p>
                    Copyright © 2023 Ragavan Srinivasan
                    </p>
                </div> */}
                {/* <div className="col-sm-2 top">
                    <span id="to-top">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
                </div> */}
                <div className="social">
                    <ul>
                        <li>
                            <a href="mailto:rsriniv9@gmu.edu" ><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Ragzgit" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ragavan-srinivasan-25a7bb146/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer> );
}

export default Footer;