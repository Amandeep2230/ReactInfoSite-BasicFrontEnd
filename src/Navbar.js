import React from "react"
import "./Index.css"
import logo from "./react-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo" />
            <h3>ReactFacts</h3>
            <h4>React Course- Project 1</h4>
        </nav>
    )
}