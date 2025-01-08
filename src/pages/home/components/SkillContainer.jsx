import './SkillContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faNodeJs, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const SkillContainer = () => {
    return (
        <div className="skill-container">
            <div className="skill-wrapper">
                <div className="skill-mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="skill-title">Skills</div>
                <div className="skill-sub-title">I am striving to never stop learning and improving</div>

                <div className="skill-block">
                    <div className="skill-block__item">
                        <FontAwesomeIcon className="skill-block__item-icon" icon={faLaptop} />
                        <div className="skill-block__item-name">Front-end Developer</div>
                        <div className="skill-block__item-sub-name">HTML·CSS·JS·REACT</div>
                    </div>
                    <div className="skill-block__item">
                        <FontAwesomeIcon className="skill-block__item-icon" icon={faDatabase} />
                        <div className="skill-block__item-name">Back-end Developer</div>
                        <div className="skill-block__item-sub-name">NodeJs·MySQL·Docker</div>
                    </div>
                </div>

                <div className="skill-list">
                    <div className="skill-list__item">
                        <div className="skill-list__item-brand html">
                            <FontAwesomeIcon className="skill-list__item-icon" icon={faHtml5} />
                        </div>
                        <div className="skill-list__item-name html">HTML</div>
                    </div>
                    <div className="skill-list__item">
                        <div className="skill-list__item-brand css">
                            <FontAwesomeIcon className="skill-list__item-icon" icon={faCss3Alt} />
                        </div>
                        <div className="skill-list__item-name css">CSS</div>
                    </div>
                    <div className="skill-list__item">
                        <div className="skill-list__item-brand nodejs">
                            <FontAwesomeIcon className="skill-list__item-icon" icon={faNodeJs} />
                        </div>
                        <div className="skill-list__item-name nodejs">JS</div>
                    </div>
                    <div className="skill-list__item">
                        <div className="skill-list__item-brand react">
                            <FontAwesomeIcon className="skill-list__item-icon" icon={faReact} />
                        </div>
                        <div className="skill-list__item-name react">React</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillContainer;
