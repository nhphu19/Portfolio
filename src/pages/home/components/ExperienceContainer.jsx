import './ExperienceContainer.scss';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const projectsInfo = [
    {
        name: 'Calibee Company (Wolf Solutions)',
        role: 'Back-end Developer',
        contributions: ['Improved web development and teamwork skills'],
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
        name: 'Juyou Technology Company',
        role: 'Front-end Developer',
        contributions: [
            'Enhanced front-end development skills with a goal of becoming a full-stack developer and improving problem-solving abilities',
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
        <div className="project-container">
            <div className="project-wrapper">
                <div className="project-mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="project-title">Experiences</div>

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
