import React from "react"

export default function Main(props) {
    return (
        <div className={props.darkMode ? "dark" : ""}>
            <div className="main--section">
                <h1>Fun facts about React</h1>
                <ul className="main--section--facts">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Wake</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>liowers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}