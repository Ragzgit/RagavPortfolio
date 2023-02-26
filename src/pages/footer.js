import React from 'react';

function Footer() {
    return (  <footer>
            <h2>Get in Touch</h2>
            <div id="contact" class="container">
                <div class="row">                
                    <div class="col-sm-5 social">
                        <ul>
                            <li>
                                <a href="mailto:rsriniv9@gmu.edu" ><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/Ragzgit/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ragavan-srinivasan-25a7bb146/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </footer>);
}

export default Footer;