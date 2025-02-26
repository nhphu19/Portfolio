import './SkillContainer.scss';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const skillsList = [
    {
        name: 'Programming Languages',
        skills: 'Javascript · Typescript · PHP · Dart',
    },
    {
        name: 'Frameworks & Libraries',
        skills: 'NodeJs · ExpressJs · ReactJs · VueJs · Laravel · Flutter',
    },
    {
        name: 'Database & DevOps',
        skills: 'MySQL · MongoDB · MSSQL · AWS EC2 · Linux',
    },
    {
        name: 'Others',
        skills: 'Git · SCSS · Jquery · Tailwind CSS · Firebase',
    },
    {
        name: 'Soft Skills',
        skills: 'Problem-solving · Team collaboration · Time management · Self-learning',
    },
    {
        name: 'Language',
        skills: 'Good English reading and comprehension skills',
    },
];

const SkillContainer = () => {
    return (
        <div className="skill-container section-container">
            <div className="skill-wrapper section-wrapper">
                <div className="mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="title-header">Skills</div>
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
