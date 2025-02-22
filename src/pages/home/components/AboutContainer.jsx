import './AboutContainer.scss';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const AboutContainer = () => {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                <div className="about-mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="about-title">About Me</div>

                <div className="about-content">
                    <div className="about-content__left-description">
                        <span className="about-content__html-name">&lt;p&gt;</span>
                        <span className="about-content__info-name">
                            <span>Hello!</span>
                        </span>
                        <span className="about-content__info-name">
                            I am a software engineer with 2 years of experience in web development.
                        </span>
                        <span className="about-content__info-name">
                            I have experience in developing web applications using Javascript, Typescript, NodeJs,
                            ReactJS, VueJs, PHP, Laravel, ...
                        </span>
                        <span className="about-content__info-name">
                            I am seeking opportunities to further enhance my skills and knowledge in a professional
                            environment, collaborating with experienced professionals and staying updated with industry
                            trends.
                        </span>
                        <span className="about-content__info-name">
                            I am committed to continuous learning and eager to contribute my expertise to meaningful
                            projects while pursuing personal and professional growth.
                        </span>
                        <span className="about-content__html-name">&lt;/p&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
