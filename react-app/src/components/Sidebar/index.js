import "./sidebar.css"

const SideBar = () => {

    return (
        <div className="sidebar-container">
            <a rel="noreferrer" href="https://github.com/SonQHoang" taget="_blank">
                <div className="sidebar-github">
                </div>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/sean-hoang/" target="_blank">
                <div className="sidebar-linkedin">
                </div>
            </a>
            <a rel="noreferrer" href="mailto:hoangseanq@gmail.com" target="_blank">
                <div className="sidebar-email">
                </div>
            </a>
        </div>
    )
}

export default SideBar