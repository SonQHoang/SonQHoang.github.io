import "./Projects.css"

const Projects = () => {
    return (
        <div className="my-projects" id="my-projects">
            <p className="about-me-intro" id="projects-intro">
                Projects
            </p>
            <div className="project-holder" id="project-holder" data-sr-id="3" style={{
                visibility: 'visible',
                opacity: 1,
                transition: 'opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s'
            }}>
                <div className="project" id="apocalypse-weather-now">
                    <p className="project-title" id="apocalypse-weather-now">
                        Apocalypse Weather Now
                    </p>
                    <a rel="noreferrer" href="https://awn-render.onrender.com/" target="_blank">
                        <img src="https://res.cloudinary.com/dgxpqnbwn/image/upload/v1695663088/Screenshot_2023-09-25_at_10.30.51_AM_v7skrk.png" alt="apocalypse-weather-now" className="project-1" />
                    </a>
                    <p className="project-desc">
                    Welcome to Apocapylse Weather Now, affectionately referred to as AWN by its users. This is the one stop shop for all the latest apocalyptic weather and situations live across the world!
                    </p>
                    <div className="gh-link-holder">
                        <a rel="noreferrer" href="https://github.com/SonQHoang/Apocalypse-Weather-Now" className="gh-link" target="_blank">Github</a>
                    </div>
                </div>
                <div className="project" id="soundify">
                    <p className="project-title" id="soundify">
                        Soundify
                    </p>
                    <a rel="noreferrer" href="https://soundify-render-actual.onrender.com/" target="_blank">
                        <img src="https://res.cloudinary.com/dgxpqnbwn/image/upload/v1695674455/Screenshot_2023-09-25_at_1.40.02_PM_mlz4pf.png" alt="soundify" className="project-2" />
                    </a>
                    <p className="project-desc">
                        Soundify, soon to be pixel perfect clone of Spotify. Users can utilize the core functionality of Spotify here in Soundify.
                    </p>
                    <div className="gh-link-holder">
                        <a rel="noreferrer" href="https://github.com/SonQHoang/Soundify" className="gh-link" target="_blank">Github</a>
                    </div>
                </div>
                <div className="project" id="guitarBnB">
                    <p className="project-title" id="guitarBnB">
                        GuitarBnB
                    </p>
                    <a rel="noreferrer" href="https://aa-airbnb-backend.onrender.com" target="_blank">
                        <img src="https://res.cloudinary.com/dgxpqnbwn/image/upload/v1695680916/Screenshot_2023-09-25_at_3.27.45_PM_tibnz4.png" alt="guitarBnB" className="project-3" />
                    </a>
                    <p className="project-desc">
                       Webiste where you can rent out famous and rare guitars for practice or pictures.
                    </p>
                    <div className="gh-link-holder">
                        <a rel="noreferrer" href="https://github.com/SonQHoang/AirBnB-API-" className="gh-link" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects