import React from "react";
import videobg from '../videos/videobg.mov';
import Header from "./Header";
import '../styles/Header.scss';

export default function VideoBg() {
    return (
        <div>
            <video src={videobg} autoPlay loop muted className="videobg"/>
            <Header></Header>
        </div>
    )
}