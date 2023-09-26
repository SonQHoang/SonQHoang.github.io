import "./intro.css"


const Intro = () => {

    return (
        <div className="intro-container">
            <div className="intro">
            <div className="profile-image">
                <img src="https://res.cloudinary.com/dgxpqnbwn/image/upload/c_thumb,w_200,g_face/v1695725317/IMG_3824_1_k5epnr.jpg" alt="young man smiling at dinner" />
            </div>
                <span className="intro-name">Sean Hoang</span>
                <br></br>
                Full-Stack{" "}
                <span class="intro-role">Software Engineer</span>
                .
                <p className="intro-speech">
                    <div>
                        Finding solutions
                    </div>
                    <div>
                        one problem at a time.
                    </div>
                </p>
            </div>
        </div>
    )
}

export default Intro