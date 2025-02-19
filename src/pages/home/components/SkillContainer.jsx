import './SkillContainer.scss';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const skillsList = [
    {
        name: 'Programming Languages',
        skills: 'Javascript · Typescript · PHP · Dart · AL',
    },
    {
        name: 'Frameworks',
        skills: 'ExpressJs · ReactJs · VueJs · Laravel · Flutter',
    },
    {
        name: 'Softwares',
        skills: 'VS Code · IntelliJ IDEA · Jira · Powershell',
    },
    {
        name: 'DepOps',
        skills: 'AWS EC2 · Linux Command Line',
    },
    {
        name: 'Databases',
        skills: 'MySQL · MSSQL · MongoDB',
    },
    {
        name: 'Others',
        skills: 'Git · RESTfull API · HTML · CSS · SCSS · JQuery · phpFirebase · Dynamics 365 BC',
    },
    {
        name: 'Languages',
        skills: 'TOEIC RL 555 · TOEIC SW 250',
    },
    {
        name: 'Soft Skills',
        skills: 'Teamwork · Problem solving · Time management · Self learning new technologies · Adaptable',
    },
];

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
                    {skillsList.map((skill, index) => (
                        <div
                            key={index}
                            className={`skill-block__item ${index % 2 !== 0 ? 'skill-block__item--active' : ''}`}
                        >
                            <div className="skill-block__item-name">{skill.name}</div>
                            <div className="skill-block__item-sub-name">{skill.skills}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillContainer;
