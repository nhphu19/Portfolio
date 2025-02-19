import './DevContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCakeCandles, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import avatarImg from '../../../assets/images/home/avatar.jpg';

const infoData = {
    name: 'PhuNguyen',
    role: 'Full-stack Developer',
    birthDay: ' 14/05/2001',
    email: 'nhphu19@gmail.com',
    githubLink: 'https://github.com/nhphu19',
    githubName: 'nhphu19',
    websiteLink: 'https://nhphu19.info',
    websiteName: 'nhphu19.info',
    resumeLink: 'https://drive.google.com/file/d/1NjcGo3gIjFRX9wH8zyxs5rUTAjTvkCdx/view?usp=sharing',
    skills: ['Javascript', 'Typescript', 'PHP', 'NodeJs', 'ReactJs', 'Vuejs', 'Laravel', 'AWS'],
};

const DevContainer = () => {
    return (
        <div className="dev-container">
            <div className="dev-title">Developer</div>

            <div className="dev-wrapper">
                <div className="dev-left">
                    <div className="dev-left_avatar">
                        <img src={avatarImg} alt="" />
                    </div>
                    <div className="dev-left__name">{infoData.name}</div>
                    <div className="dev-left__position">{infoData.role}</div>

                    <div className="dev-left__info">
                        <div className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faCakeCandles} />
                            {infoData.birthDay}
                        </div>
                        <div className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faEnvelope} />
                            {infoData.email}
                        </div>
                        <a href={infoData.githubLink} target="_blank" className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faGithub} />
                            {infoData.githubName}
                        </a>
                        <a href={infoData.websiteLink} target="_blank" className="dev-left__info-item">
                            <FontAwesomeIcon className="dev-left__info-icon" icon={faChrome} />
                            {infoData.websiteName}
                        </a>
                    </div>

                    <div className="dev-left__skills">
                        {infoData.skills.map((skill, index) => (
                            <div key={index} className="dev-left__skills-item">
                                {skill}
                            </div>
                        ))}
                    </div>

                    <a href={infoData.resumeLink} target="_blank" className="dev-left__button">
                        My Resume <FontAwesomeIcon className="dev-left__info-icon" icon={faDownload} />
                    </a>
                </div>

                <div className="dev-block">
                    <div className="dev-center">
                        <span className="dev-center__html-name">&lt;h1&gt;</span>
                        <span className="dev-center__info-name">Hey</span>
                        <span className="dev-center__info-name">
                            I'm <span>{infoData.name}</span>,
                        </span>
                        <span className="dev-center__info-name">{infoData.role}</span>
                        <span className="dev-center__html-name dev-center__html-end">&lt;/h1&gt;</span>

                        <span className="dev-center__html-name">&lt;p&gt;</span>
                        <span className="dev-center__discription">
                            I am seeking opportunities to further enhance my skills and knowledge in a professional
                            environment, collaborating with experienced professionals and staying updated with industry
                            trends.
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
                            <div className="dev-right__item-amount">4</div>
                            <div className="dev-right__item-name">Framework</div>
                        </div>
                        <div className="dev-right__item">
                            <div className="dev-right__item-amount">5</div>
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
