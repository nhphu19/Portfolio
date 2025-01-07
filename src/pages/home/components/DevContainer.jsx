import './DevContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCakeCandles, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const DevContainer = () => {
    return (
        <div className="dev-container">
            <div className="dev-title">Developer</div>

            <div className="dev-wrapper">
                <div className="dev-left">
                    <div className="dev-left_avatar"></div>
                    <div className="dev-left__name">NgoNghinh</div>
                    <div className="dev-left__position">Full-stack developer</div>

                    <div className="dev-left__info">
                        <div className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faCakeCandles} />
                            14/05/2001
                        </div>
                        <div className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faEnvelope} />
                            nhphu19@gmail.com
                        </div>
                        <div className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faGithub} />
                            nhphu19
                        </div>
                        <div className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faLinkedin} />
                            nhphu19
                        </div>
                    </div>

                    <div className="dev-left__skills">
                        <div className="dev-left__skills-item">HTML</div>
                        <div className="dev-left__skills-item">CSS</div>
                        <div className="dev-left__skills-item">JS</div>
                        <div className="dev-left__skills-item">REACT</div>
                        <div className="dev-left__skills-item">PHP</div>
                        <div className="dev-left__skills-item">VUE</div>
                    </div>

                    <div className="dev-left__button">
                        My Resume <FontAwesomeIcon className="dev-left__info-icon" icon={faDownload} />
                    </div>
                </div>

                <div className="dev-block">
                    <div className="dev-center">
                        <span className="dev-center__html-name">&lt;h1&gt;</span>
                        <span className="dev-center__info-name">Hey</span>
                        <span className="dev-center__info-name">
                            I'm <span>NgoNghinh</span>,
                        </span>
                        <span className="dev-center__info-name">Full-stack Developer</span>
                        <span className="dev-center__html-name dev-center__html-end">&lt;/h1&gt;</span>

                        <span className="dev-center__html-name">&lt;p&gt;</span>
                        <span className="dev-center__discription">
                            I help business grow by crafting amazing web experiences. If you’re looking for a developer
                            that likes to get stuff done.
                        </span>
                        <span className="dev-center__html-name dev-center__html-end">&lt;/p&gt;</span>

                        <span className="dev-center__let-talk">Let's Talk!</span>
                    </div>

                    <div className="dev-right">
                        <div className="dev-right__item">
                            <div className="dev-right__item-amount">4</div>
                            <div className="dev-right__item-name">Programming Language</div>
                        </div>
                        <div className="dev-right__item">
                            <div className="dev-right__item-amount">6</div>
                            <div className="dev-right__item-name">Development Tools</div>
                        </div>
                        <div className="dev-right__item">
                            <div className="dev-right__item-amount">2</div>
                            <div className="dev-right__item-name">Years of Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevContainer;
