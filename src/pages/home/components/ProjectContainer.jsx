import './ProjectContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';
import calibeeImg from '../../../assets/images/project/calibee.webp';

const projectInfo = {
    name: 'Calibee App',
    role: 'Back-end Developer',
    thumbnail: calibeeImg,
    links: [
        {
            url: 'https://play.google.com/store/apps/details?id=com.wolfsolusions.calibee.customer.prod&hl=vi&pli=1',
            icon: faGooglePlay,
        },
        {
            url: 'https://apps.apple.com/vn/app/calibee-cleaning-repair/id6443800125',
            icon: faAppStore,
        },
    ],
    description:
        'Calibee is an application that provides repair, cleaning, and household care services,catering to both Vietnamese and foreigners living in Vietnam',
    contributions: [
        'Designed & optimized database schema for customer & partner apps, ensuring smooth data management and scalability',
        'Developed and maintained RESTful APIs for core functionalities such as authentication, booking, feedback, and attendance tracking',
        'Integrated MoMo/VNPay payment system with real-time transaction monitoring, improving financial security and user trust',
        'Implemented push notifications using Firebase, enhancing user engagement and providing real-time updates',
        'Automated background processes using Node Schedule, significantly reducing operational overhead',
    ],
    technologies: ['Javascript', 'ExpressJs', 'NodeJs', 'Dart', 'Flutter', 'MySQL', 'AWS EC2', 'Firebase'],
    extends: {
        timeline: 'Nov.2022 – May.2023',
        teamSize: '10',
        country: 'Vietnam',
    },
};

const ProjectContainer = () => {
    return (
        <div className="project-container section-container">
            <div className="project-wrapper section-wrapper">
                <div className="mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="title-header">Projects</div>
                <div className="project-sub-title">
                    Below are the projects I worked on at various companies to gain experience.
                </div>

                <div className="project-block-list">
                    <div className="project-block">
                        <div className="project-block__img">
                            <img src={projectInfo.thumbnail} alt="" />

                            <div className="project-block__links">
                                {projectInfo.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        className="project-block__title-link"
                                    >
                                        <FontAwesomeIcon className="dev-left__info-icon" icon={link.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="project-block__content">
                            <div className="project-block__title">{projectInfo.name}</div>

                            <div className="project-block__extend-tag">{projectInfo.role}</div>

                            <div className="project-block__description">{projectInfo.description}.</div>

                            <div className="project-block__contributions">
                                <div className="project-block__contributions-title">Contributions</div>
                                <ul className="project-block__contributions-list">
                                    {projectInfo.contributions.map((contribution, index) => (
                                        <li key={index} className="project-block__contributions-item">
                                            {contribution}.
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-block__skills">
                                {projectInfo.technologies.map((skill, index) => (
                                    <div key={index} className="project-block__skills-item">
                                        {skill}
                                    </div>
                                ))}
                            </div>

                            <div className="project-block__extend">
                                <div className="project-block__extend-list">
                                    <div className="project-block__extend-item">
                                        <div className="project-block__extend-label">Timeline</div>
                                        <div className="project-block__extend-value">
                                            {projectInfo.extends.timeline}
                                        </div>
                                    </div>
                                    <div className="project-block__extend-item">
                                        <div className="project-block__extend-label">Team Size</div>
                                        <div className="project-block__extend-value">
                                            {projectInfo.extends.teamSize}
                                        </div>
                                    </div>
                                    <div className="project-block__extend-item">
                                        <div className="project-block__extend-label">Country</div>
                                        <div className="project-block__extend-value">{projectInfo.extends.country}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/projects" className="project-button">
                    View More
                </a>
            </div>
        </div>
    );
};

export default ProjectContainer;
