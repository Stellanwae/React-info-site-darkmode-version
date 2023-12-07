import React from "react"


export default function Navbar(props) {
    const styles = {
        justifyContent: props.darkMode ? "end" : "start"
    }

    return (
        <div className={props.darkMode ? "dark-nav" : ""}>     
            <nav className="navbar">
                <img className="navbar--icon" src="./images/react-logo.png"/>
                <div className="toggle--section">
                    <p className={props.darkMode ? "" : "color"}>light</p>
                    <div className="toggle--main" style={styles}>
                        <div className="toggle--slider" onClick={props.toggle}></div>

                    </div>
                    <p className={props.darkMode ? "color" : ""}>dark</p>
                </div>
            </nav>
        </div>
    )
}