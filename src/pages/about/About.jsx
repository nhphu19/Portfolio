import './index.scss';

const About = () => {
    return (
        <div className="about-container about-container-page">
            <div className="about-wrapper">
                <div className="about-content__group">
                    <div className="about-content">
                        <div className="about-content__left-title">
                            <div className="about-content__left-title-item">Personal Information</div>
                            <div className="about-content__left-title-item"></div>
                        </div>
                        <div className="about-content__left-description">
                            <span className="about-content__html-name">&lt;info&gt;</span>

                            <span className="about-content__html-name about-content__tab">&lt;name&gt;</span>
                            <span className="about-content__info-name about-content__tab">Nguyen Huu Phu</span>
                            <span className="about-content__html-name about-content__tab">&lt;/name&gt;</span>

                            <span className="about-content__html-name about-content__tab">&lt;birthday&gt;</span>
                            <span className="about-content__info-name about-content__tab">14/05/2001</span>
                            <span className="about-content__html-name about-content__tab">&lt;/birthday&gt;</span>

                            <span className="about-content__html-name about-content__tab">&lt;address&gt;</span>
                            <span className="about-content__info-name about-content__tab">
                                Thu Duc District, Ho Chi Minh City, Vietnam
                            </span>
                            <span className="about-content__html-name about-content__tab">&lt;/address&gt;</span>

                            <span className="about-content__html-name">&lt;/info&gt;</span>
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="about-content__left-title">
                            <div className="about-content__left-title-item">Education</div>
                            <div className="about-content__left-title-item"></div>
                        </div>
                        <div className="about-content__left-description">
                            <span className="about-content__html-name">&lt;edu&gt;</span>

                            <span className="about-content__info-name">
                                <span>Ho Chi Minh City University of Science</span>
                            </span>

                            <span className="about-content__html-name about-content__tab">&lt;major&gt;</span>
                            <span className="about-content__info-name about-content__tab">
                                Bachelor of Science in Computer Science
                            </span>
                            <span className="about-content__html-name about-content__tab">&lt;/major&gt;</span>

                            <span className="about-content__html-name about-content__tab">&lt;overall_gpa&gt;</span>
                            <span className="about-content__info-name about-content__tab">7.96/10</span>
                            <span className="about-content__html-name about-content__tab">&lt;/overall_gpa&gt;</span>

                            <span className="about-content__html-name">&lt;/edu&gt;</span>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-content__left-title">
                        <div className="about-content__left-title-item">About Me</div>
                        <div className="about-content__left-title-item"></div>
                    </div>
                    <div className="about-content__left-description">
                        <span className="about-content__html-name">&lt;about&gt;</span>
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
                        <span className="about-content__html-name">&lt;/about&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
