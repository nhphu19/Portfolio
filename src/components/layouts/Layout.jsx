import { Outlet } from 'react-router-dom';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
    return (
        <div className="layout">
            <header className="layout-header">
                <div className="header-container">
                    <div className="header-logo">
                        <span>&lt;C/&gt;</span>
                        NgoNghinh
                    </div>
                    <div className="header-nav">
                        <div className="header-nav-item header-nav-item__active">Home</div>
                        <div className="header-nav-item">About</div>
                        <div className="header-nav-item">Projects</div>
                    </div>
                    <div className="header-social">
                        <div className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faEnvelope} />
                            Gmail
                        </div>
                        <div className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faGithub} />
                            Github
                        </div>
                        <div className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faLinkedin} />
                            Linkedin
                        </div>
                    </div>
                </div>
            </header>

            <main className="layout-body">
                <Outlet />
            </main>

            <footer className="layout-footer">
                <p>&copy; 2025 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
