import './ExperienceContainer.scss';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const projectsInfo = [
    {
        name: 'Calibee (Wolf Solutions)',
        role: 'Back-end Developer',
        contributions: [
            'Developed and maintained RESTful APIs while optimized database schema. This significantly improved system scalability and query performance. In just six months, successfully launched the app on App Store & Google Play',
            'Integrated MoMo/VNPay payment gateways with advanced transaction handling, ensuring secure and error-free financial transactions',
            'Implemented Firebase push notifications, boosting real-time user engagement and improving retention rates',
            'Automated background tasks using Node Schedule, enhancing system reliability and reducing manual workload',
        ],
        technologies: [
            'Javascript',
            'PHP',
            'ExpressJs',
            'NodeJs',
            'Laravel',
            'SCSS',
            'JQuery',
            'MySQL',
            'AWS',
            'Firebase',
            'BC 365',
        ],
        extends: {
            timeline: 'Nov.2022 – May.2024',
            country: 'Vietnam',
        },
    },
    {
        name: 'Juyou Technology',
        role: 'Front-end Developer',
        contributions: [
            'Designed and built responsive UI for Stock Series, Exchange Series, and BVIS App, leading to a more engaging and seamless user experience',
            'Developed a real-time chat system for BVIS App with WebSocket, enabling instant text, video, and audio messaging',
            'Optimized UI/UX performance to enhance user accessibility and improving app efficiency',
        ],
        technologies: [
            'Javascript',
            'Typescript',
            'Dart',
            'ExpressJs',
            'NodeJs',
            'ReactJs',
            'VueJs',
            'Flutter',
            'SCSS',
        ],
        extends: {
            timeline: 'May.2024 – Oct.2024',
            country: 'Vietnam',
        },
    },
];

const ExperienceContainer = () => {
    return (
        <div className="project-container section-container">
            <div className="project-wrapper section-wrapper">
                <div className="mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="title-header">Experiences</div>

                <div className="project-block-list">
                    {projectsInfo.map((projectInfo, index) => (
                        <div key={index} className="project-block">
                            <div className="project-block__content">
                                <div className="project-block__title">{projectInfo.name}</div>

                                <div className="project-block__extend-tag">{projectInfo.role}</div>

                                <div className="project-block__contributions">
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
                                        {projectInfo.extends.country && (
                                            <div className="project-block__extend-item">
                                                <div className="project-block__extend-label">Country</div>
                                                <div className="project-block__extend-value">
                                                    {projectInfo.extends.country}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceContainer;
