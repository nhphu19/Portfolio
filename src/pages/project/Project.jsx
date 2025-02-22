import React, { useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import calibeeImg from '../../assets/images/project/calibee.webp';
import calibeeAdminImg from '../../assets/images/project/calibee_admin.png';
import BC190Img from '../../assets/images/project/BC190.png';
import stockImg from '../../assets/images/project/stock.png';
import exchangeImg from '../../assets/images/project/exchange.png';
import bvisImg from '../../assets/images/project/bvis.png';
import bvisAdminImg from '../../assets/images/project/bvis_admin.png';
import tmdbCloneImg from '../../assets/images/project/tmdb_clone.png';

const companyProjects = [
    {
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
            'Participated in database design and construction (> 20 Models)',
            'Developed APIs for the Customer App',
            'Developed APIs for Partner App',
        ],
        technologies: ['Javascript', 'ExpressJs', 'NodeJs', 'Dart', 'Flutter', 'MySQL', 'AWS', 'Firebase'],
        extends: {
            timeline: 'Nov.2022 – May.2023',
            teamSize: '10',
            country: 'Vietnam',
        },
    },
    {
        name: 'Calibee Admin',
        role: 'Fullstack Developer',
        thumbnail: calibeeAdminImg,
        links: [],
        description:
            'Calibee Admin is a web application that helps the operations team manage, monitor, analyze, and connect customers and partners based on the Calibee App',
        contributions: [
            'Developed back-end for the website',
            'Developed font-end for the website',
            "Wrote user guides for the system's functions for the operations team",
        ],
        technologies: ['PHP', 'Javascript', 'Laravel', 'Jquery', 'Bootstrap', 'MySQL', 'AWS'],
        extends: {
            timeline: 'Apr.2023 – Jan.2024',
            teamSize: '6',
            country: 'Vietnam',
        },
    },
    {
        name: 'BC190',
        role: 'Fullstack Developer',
        thumbnail: BC190Img,
        links: [],
        description:
            'BC190 is a project involving the implementation and customization of Microsoft Dynamics 365 Business Central (BC), an all-in-one cloud-based ERP solution. The project aimed to optimize business operations such as financial management, inventory control, sales, and customer management',
        contributions: ['Maintained and improved existing features', 'Developed new features'],
        technologies: ['AL Programming', 'Dynamics 365 Business Central', 'Secure File Transfer Protocol (SFTP)'],
        extends: {
            timeline: 'Jan.2024 – May.2024',
            teamSize: '5',
            country: 'Singapore',
        },
    },
    {
        name: 'Stock Series',
        role: 'Front-end Developer',
        thumbnail: stockImg,
        links: [],
        description:
            'Stock Series is a collection of applications for stock trading across multiple exchanges worldwide, allowing users to view and trade stocks',
        contributions: ['Maintained and improved existing features'],
        technologies: ['Typescript', 'VueJs', 'NodeJs', 'Java', 'Docker', 'MySQL', 'Redis', 'WebSocket'],
        extends: {
            timeline: 'May.2024 – Jun.2024',
            teamSize: null,
            country: 'China',
        },
    },
    {
        name: 'Exchange Series',
        role: 'Front-end Developer',
        thumbnail: exchangeImg,
        links: [],
        description:
            'Exchange Series is a series of applications for trading coins on various exchanges (Crypto, Forex, Stock,..) allowing users to view and trade on them',
        contributions: ['Maintained and improved existing features'],
        technologies: ['Typescript', 'VueJs', 'NodeJs', 'Java', 'Docker', 'MySQL', 'Redis', 'WebSocket'],
        extends: {
            timeline: 'Jun.2024 – July.2024',
            teamSize: null,
            country: 'China',
        },
    },
    {
        name: 'Bvis App H5',
        role: 'Front-end Developer',
        thumbnail: bvisImg,
        links: [],
        description:
            'Bvis is an application that helps learn online courses, helps users learn and exchange knowledge with teachers',
        contributions: ['Developed new features'],
        technologies: ['Typescript', 'VueJs', 'Uni-app', 'Java', 'Docker', 'MySQL', 'Redis', 'WebSocket'],
        extends: {
            timeline: 'July.2024 – Oct.2024',
            teamSize: 8,
            country: 'Korea',
        },
    },
    {
        name: 'Bvis Admin',
        role: 'Front-end Developer',
        thumbnail: bvisAdminImg,
        links: [],
        description:
            'Bvis Admin is a web application that helps the operations team manage, monitor, analyze, and connect teachers with corses, as well as teachers with students. It also features a chat function, allowing teachers, students, and the operations team to communicate.',
        contributions: ['Developed new features'],
        technologies: ['Typescript', 'ReactJs', 'Java', 'Docker', 'MySQL', 'Redis', 'WebSocket'],
        extends: {
            timeline: 'Aug.2024 – Oct.2024',
            teamSize: 7,
            country: 'Korea',
        },
    },
];

const personalProjects = [
    {
        name: 'TMDB Clone',
        role: 'Front-end Developer',
        thumbnail: tmdbCloneImg,
        links: [
            {
                url: 'https://tmdb.nhphu19.info/movie',
                icon: faLink,
            },
        ],
        description:
            'TMDB_Clone is a website based on themoviedb.org. It provides access to millions of movies, TV shows, and people to explore',
        contributions: ['Built the website using the pre-designed interface and available API'],
        technologies: ['Typescript', 'VueJs', 'VueX', 'SCSS', 'Tailwindcss', 'AWS'],
        extends: {
            timeline: 'Oct.2024 – Jan.2025',
            teamSize: null,
            country: null,
        },
    },
    {
        name: '100 Days of JavaScript',
        role: 'Full-stack Developer',
        thumbnail: tmdbCloneImg,
        links: [
            {
                url: 'https://100daysjavascript.nhphu19.info/',
                icon: faLink,
            },
        ],
        description: 'A personal collection of self-learning JavaScript',
        contributions: ['Creating a collection of 100 JavaScript lessons'],
        technologies: ['Javascript', 'HTML', 'CSS', 'JQuery', 'AWS'],
        extends: {
            timeline: 'Oct.2024 – Jan.2025',
            teamSize: null,
            country: null,
        },
    },
];

const Project = () => {
    const [activeTab, setActiveTab] = useState('company');

    return (
        <div className="project-container">
            <div className="project-wrapper">
                <div className="project-title">Projects</div>
                <div className="project-sub-title">
                    Below are the projects I worked on at various companies to gain experience.
                </div>

                <div className="project-tabs">
                    <div
                        className={`project-tab-item ${activeTab === 'company' ? 'project-tab-item--active' : ''}`}
                        onClick={() => setActiveTab('company')}
                    >
                        Company Projects
                    </div>
                    <div
                        className={`project-tab-item ${activeTab === 'personal' ? 'project-tab-item--active' : ''}`}
                        onClick={() => setActiveTab('personal')}
                    >
                        Personal Projects
                    </div>
                </div>

                <div className="project-block-list">
                    {(activeTab === 'company' ? companyProjects : personalProjects).map((projectInfo, index) => (
                        <div key={index} className="project-block">
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
                                        {projectInfo.extends.teamSize && (
                                            <div className="project-block__extend-item">
                                                <div className="project-block__extend-label">Team Size</div>
                                                <div className="project-block__extend-value">
                                                    {projectInfo.extends.teamSize}
                                                </div>
                                            </div>
                                        )}
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

export default Project;
