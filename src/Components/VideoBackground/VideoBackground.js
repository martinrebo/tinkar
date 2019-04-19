import React from 'react'
import video from "../../img/Smoke-4383.mp4"


export default function VideoBackground(props) {
    return (
        <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
    </video>
    )
}