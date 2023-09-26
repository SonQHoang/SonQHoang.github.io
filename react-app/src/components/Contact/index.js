import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-holder" id="contact-holder">
            <div className="my-skills">
                <p className="about-me-intro" id="contact-heading">
                    Contact
                </p>
                <div className="contact-container" data-sr-id="4" style={{ visibility: 'visible', opacity: 1, transition: 'opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s' }}>
                    <div className="social-holder">
                        <div className="social-about">
                            <div className="social-title">Sean Hoang
                            </div>
                            <div className="social-desc">
                                Full-Stack Software Engineer
                                <br />
                                Finding solutions
                                <br />
                                one problem at a time
                            </div>
                        </div>
                        <div className="socials-container-2">
                            <div>
                                <div className="social-title"> Socials
                                </div>
                                <div className="social-links">
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/sean-hoang/" target="_blank">
                                        <div className="linkedin"></div>
                                    </a>
                                    <a rel="noreferrer" href="https://github.com/SonQHoang" target="_blank">
                                        <div className="github"></div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="social-title">Email</div>
                                <div className="social-email">hoangseanq@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact