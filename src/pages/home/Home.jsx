import './index.scss';
import DevContainer from './components/DevContainer';
import AboutContainer from './components/AboutContainer';
const Home = () => {
    return (
        <div className="home-container">
            <DevContainer />
            <AboutContainer />
        </div>
    );
};

export default Home;
