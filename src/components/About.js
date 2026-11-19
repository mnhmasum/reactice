import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-content">
                    <section className="intro">
                        <h2>Hello, I&apos;m Nazmul!</h2>
                        <p>
                            I am a passionate web developer specializing in modern frontend technologies. 
                            With expertise in React and JavaScript, I build responsive, interactive web applications that deliver exceptional user experiences.
                        </p>
                    </section>

                    <section className="skills">
                        <h2>Technical Skills</h2>
                        <ul>
                            <li><strong>React.js:</strong> Building component-based UIs with hooks and context API</li>
                            <li><strong>JavaScript (ES6+):</strong> Advanced JS concepts, async programming, and clean code practices</li>
                            <li><strong>HTML/CSS:</strong> Semantic markup, responsive design, and CSS methodologies</li>
                            <li><strong>Git:</strong> Version control and collaborative development workflows</li>
                        </ul>
                    </section>

                    <section className="interests">
                        <h2>Interests</h2>
                        <p>
                            I enjoy solving complex problems, learning emerging web technologies, 
                            and contributing to open-source projects. When not coding, I&apos;m exploring design patterns, 
                            optimizing application performance, or diving into new development frameworks.
                        </p>
                    </section>

                    <section className="contact">
                         <h2>Let&apos;s Connect</h2>
                         <p>I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;