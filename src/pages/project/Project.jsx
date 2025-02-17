import React, { useState } from 'react';
import './index.scss';
import aboutMeImg from '../../assets/images/home/about-me.png';
import CodeEditor from '../../components/common/CodeEditor';

const projectData = {
    html: '<!DOCTYPE html><html><head><title>Project</title></head><body>...</body></html>',
    css: 'body { background-color: #f9f9f9; }',
    js: "console.log('Hello, world!');",
};

const Project = () => {
    const [cssCode, setCssCode] = useState('div { color: red; }');
    const [jsCode, setJsCode] = useState("console.log('Hello, World!');");

    return (
        <div className="project-container">
            <div className="project-wrapper">
                <div className="project-title">Projects</div>
                <div className="project-sub-title">My thoughts on technology and business, welcome to subscribe</div>

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

                <div className="editor-section">
                    <h3>CSS</h3>
                    <CodeEditor value={cssCode} onChange={setCssCode} language="css" />
                </div>

                <div className="editor-section">
                    <h3>JavaScript</h3>
                    <CodeEditor value={jsCode} onChange={setJsCode} language="javascript" />
                </div>
            </div>
        </div>
    );
};

export default Project;
