import './ProjectContainer.scss';
import aboutMeImg from '../../../assets/images/home/about-me.png';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const ProjectContainer = () => {
    return (
        <div className="project-container">
            <div className="project-wrapper">
                <div className="project-mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="project-title">Projects</div>
                <div className="project-sub-title">I am striving to never stop learning and improving</div>

                <div className="project-block">
                    <div className="project-block__img">
                        <img src={aboutMeImg} alt="" />
                    </div>
                    <div className="project-block__content">
                        <div className="project-block__title">What does it take to become a web developer?</div>
                        <div className="project-block__description">
                            Web development, also known as website development, encompasses a variety of tasks and
                            processes involved in creating websites for the internet…
                        </div>
                        <div className="project-block__readmore">Read more &gt;&gt;</div>
                        <div className="project-block__extend">
                            <div className="project-block__extend-tag">Web Developer</div>
                            <div className="project-block__extend-list">
                                <div className="project-block__extend-item">
                                    <div className="project-block__extend-label">Test</div>
                                    <div className="project-block__extend-value">Sihan</div>
                                </div>
                                <div className="project-block__extend-item">
                                    <div className="project-block__extend-label">Date</div>
                                    <div className="project-block__extend-value">10.Oct.2023</div>
                                </div>
                                <div className="project-block__extend-item">
                                    <div className="project-block__extend-label">Lesson</div>
                                    <div className="project-block__extend-value">10/100</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-button">View More</div>
            </div>
        </div>
    );
};

export default ProjectContainer;
