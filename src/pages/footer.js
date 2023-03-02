import React from 'react';

function Footer() {
    return ( <footer id="contact">
        <div class="container">
            <div class="row">
                {/* <div class="col-sm-5 copyright">
                    <p>
                    Copyright © 2023 Ragavan Srinivasan
                    </p>
                </div> */}
                {/* <div class="col-sm-2 top">
                    <span id="to-top">
                        <i class="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
                </div> */}
                <div class="social">
                    <ul>
                        <li>
                            <a href="mailto:rsriniv9@gmu.edu" ><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Ragzgit" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ragavan-srinivasan-25a7bb146/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer> );
}

export default Footer;