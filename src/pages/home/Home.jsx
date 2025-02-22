import './index.scss';
import DevContainer from './components/DevContainer';
import AboutContainer from './components/AboutContainer';
import SkillContainer from './components/SkillContainer';
import ProjectContainer from './components/ProjectContainer';
import ContactContainer from './components/ContactContainer';
import ExperienceContainer from './components/ExperienceContainer';

const Home = () => {
    return (
        <div className="home-container">
            <DevContainer />
            <AboutContainer />
            <ExperienceContainer />
            <SkillContainer />
            <ProjectContainer />
            <ContactContainer />
        </div>
    );
};

export default Home;
