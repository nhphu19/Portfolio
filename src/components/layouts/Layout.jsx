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
                            <span className="header-social__name">Gmail</span>
                        </div>
                        <div className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faGithub} />
                            <span className="header-social__name">Github</span>
                        </div>
                        <div className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faLinkedin} />
                            <span className="header-social__name">Linkedin</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="layout-body">
                <Outlet />
            </main>

            <footer className="layout-footer">
                <div className="footer-icons footer-icons__hidden">
                    <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faEnvelope} />
                    </div>
                    <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faGithub} />
                    </div>
                    <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faLinkedin} />
                    </div>
                </div>
                <div className="footer-left">© 2023 SinanTokmak. All rights reserved.</div>
                <div className="footer-center">
                    <div className="footer-center__item">Privacy Policy</div>
                    <div className="footer-center__item">Terms & Conditions</div>
                </div>
                <div className="footer-icons">
                    <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faEnvelope} />
                    </div>
                    <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faGithub} />
                    </div>
                    <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faLinkedin} />
                    </div>
                </div>
                <div className="footer-right">
                    Design By <span>PhuNguyen</span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
