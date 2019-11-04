import React from "react"
import "./App.css"

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button id="brand" className="btn navbar-brand btn-primary">Clicky-Game</button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <button className="btn btn-lg btn-primary"> Score: {props.score} </button>
                            <button className="btn btn-lg btn-primary"> Top Score: {props.topScore}</button>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="jumbotron">
                <h1 className="text-center">Clicky Game!</h1>
                <p className="text-center">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Navbar