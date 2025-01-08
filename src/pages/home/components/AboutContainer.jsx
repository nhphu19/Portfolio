import './AboutContainer.scss';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';
import aboutMeImg from '../../../assets/images/home/about-me.png';

const AboutContainer = () => {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                <div className="about-mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="about-content">
                    <div className="about-content__left">
                        <div className="about-content__left-title">About Me</div>
                        <div className="about-content__left-description">
                            <span className="about-content__html-name">&lt;p&gt;</span>
                            <span className="about-content__info-name">
                                <span>Hello!</span>
                            </span>
                            <span className="about-content__info-name">
                                My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and
                                REACT etc.
                            </span>
                            <span className="about-content__info-name">
                                I am a highly motivated individual and eternal optimist dedicated to writing clear,
                                concise, robust code that works. Striving to never stop learning and improving.
                            </span>
                            <span className="about-content__info-name">
                                When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art
                                project like photography.
                            </span>
                            <span className="about-content__info-name">
                                I like to have my perspective and belief systems challenged so that I see the world
                                through new eyes.
                            </span>
                            <span className="about-content__html-name">&lt;/p&gt;</span>
                        </div>
                    </div>

                    <div className="about-content__right">
                        <img src={aboutMeImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
