import React from 'react';

function Header() {
    return (
        // Start Header
        <header className="ds-header" id="site-header">
            <div className="container">
                <div className="ds-header-inner">
                    <a href="index.html" className="ds-logo">
                        <span>A</span>Adebambo Adenuga
                    </a>
                    <ul className="ds-social">
                        <li><a href="https://github.com/Pils36" target="_blank" rel="noreferrer" title='Github'><i className="ri-github-fill"></i></a></li>
                        <li><a href="https://stackoverflow.com/users/8101015/pils" target="_blank" rel="noreferrer" title='StackOverflow'><i className="ri-stack-overflow-line"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/adenuga-adebambo-343297b5/" target="_blank" rel="noreferrer" title='LinkedIn'><i className="ri-linkedin-fill"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>

        // End Header
    );
}

export default Header;