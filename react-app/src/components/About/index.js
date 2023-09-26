import "./About.css"

const About = () => {
    return ( 
        <div className="about-container" id="about-container">
            <div className="about-me-intro" id="about-me-intro">
                About
            </div>
            <div className="about-section-container">
                <p className="about-me" data-sr-id="0" style={{ visibility: 'visible', opacity: 1, transition: 'opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s' }}>
                    I'm an{" "}
                    <span>ambitious</span>
                    {" "}and{" "}
                    <span>passionate </span>
                    Software Engineer armed with a nursing background. I enjoy exploring the possibilities of technology and software. I have experience helping businesses integrate solutions towards their vision and growth, working as a
                    <span>Full-Stack Software Engineer</span>
                    ,
                    <span>Project Manager</span>
                    {" "}and
                    <span>Engineering Lead</span>
                    .
                    <br></br>
                    My favorite programming langauges include
                    <span> Javascript</span>
                    {" "}and{" "}
                    <span>Python</span>
                    . I love to experiment with TensorFlow, PyTourch, and A.I. models. Topics I enjoy exploring are: AI, Genetics, Business and Quantum Computing.
                </p>
                <div className="tech-stack-container" data-sr-id="2" style={{ visibility: 'visible', opacity: 1, transition: 'opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s' }}>
                    <div>JavaScript</div>
                    <div>Python</div>
                    <div>React</div>
                    <div>PostgreSQL</div>
                </div>
            </div>
        </div>
    )
}

export default About