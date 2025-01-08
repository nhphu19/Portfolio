import './index.scss';
import DevContainer from './components/DevContainer';
import AboutContainer from './components/AboutContainer';
import SkillContainer from './components/SkillContainer';
const Home = () => {
    return (
        <div className="home-container">
            <DevContainer />
            <AboutContainer />
            <SkillContainer />
        </div>
    );
};

export default Home;
