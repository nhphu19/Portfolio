import { Outlet, useLocation } from 'react-router-dom';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/icons/logo.png';

const Layout = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);
    const navLink = paths[paths.length - 1];

    return (
        <div className="layout">
            <header className="layout-header">
                <div className="header-container">
                    <div className="header-logo">
                        {/* <span>&lt;C/&gt;</span> */}
                        <img src={logo} alt="" />
                        PhuNguyen
                    </div>
                    <div className="header-nav">
                        <a href="/" className={`header-nav-item ${!navLink ? 'header-nav-item__active' : ''}`}>
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`header-nav-item ${navLink == 'about' ? 'header-nav-item__active' : ''}`}
                        >
                            About
                        </a>
                        <a
                            href="/projects"
                            className={`header-nav-item ${navLink == 'projects' ? 'header-nav-item__active' : ''}`}
                        >
                            Projects
                        </a>
                    </div>
                    <div className="header-social">
                        {/* <a className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faEnvelope} />
                            <span className="header-social__name">Gmail</span>
                        </a> */}
                        <a href="https://github.com/nhphu19" target="_blank" className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faGithub} />
                            <span className="header-social__name">Github</span>
                        </a>
                        <a href="https://linkedin.com/in/nhphu19" target="_blank" className="header-social-item">
                            <FontAwesomeIcon className="header-social-icon" icon={faLinkedin} />
                            <span className="header-social__name">Linkedin</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="layout-body">
                <Outlet />
            </main>

            <footer className="layout-footer">
                <div className="footer-icons footer-icons__hidden">
                    {/* <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faEnvelope} />
                    </div> */}
                    <a href="https://github.com/nhphu19" target="_blank" className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/nhphu19" target="_blank" className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faLinkedin} />
                    </a>
                </div>
                <div className="footer-left">© 2023 ~ All rights reserved</div>
                <div className="footer-center">
                    <div className="footer-center__item">Privacy Policy</div>
                    <div className="footer-center__item">Terms & Conditions</div>
                </div>
                <div className="footer-icons">
                    {/* <div className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faEnvelope} />
                    </div> */}
                    <a href="https://github.com/nhphu19" target="_blank" className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/nhphu19" target="_blank" className="footer-icons__item">
                        <FontAwesomeIcon className="footer-icons__item-icon" icon={faLinkedin} />
                    </a>
                </div>
                <div className="footer-right">
                    Design By <span>PhuNguyen</span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
