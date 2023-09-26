import "./mainpage.css"
import Intro from "../Intro"
import Sidebar from "../Sidebar"
import Contact from "../Contact"
import Projects from "../Projects"
import Footer from "../Footer"
import About from "../About"

const MainPage = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <Projects/>
            <Contact/>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default MainPage