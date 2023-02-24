import React from 'react';

function Intro() {
    return ( <div id="lead">
    <div id="lead-content">
        <h1>Ragavan Srinivasan</h1>
        <h2>Software Engineer</h2>
        <a href="https://drive.google.com/file/d/1YsJZK2TyaI7UnXn-wjyBWOsFLsKMgV75/view?usp=share_link" className="btn-rounded-white">Download Resume</a>
    </div>

    <div id="lead-overlay"></div>

    <div id="lead-down">
        <span onClick={() => window.location.replace("https://ragzgit.github.io/RagavPortfolio/#about")}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
    </div>
</div> );
}

export default Intro;