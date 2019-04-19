import React from 'react';
import branchImage from '../../img/branch.svg';
export default function CardResearch(props) {
    function handleClick(e) {
        e.preventDefault();
        alert(`Thanks for click here!
        👷 We are working on it :) 
        ` + props.title);

    }
    return (
        <div className="card" style={{ background: props.background, borderColor: props.border }}>
            <span className="card-emoji-admin float-right" role="img" aria-label="Save Card" onClick={(e) => handleClick(e)}> ⚙️ </span>
            <p className="card-branch"> <span className="icon icon-branch" />  {props.branch}</p>
            <h3>{props.title}</h3>
            <div className="card-description">
                <p> {props.description}</p>
            </div>

            <p> {props.test}</p>

            <p className="card-type"> <span className="icon icon-type" /> {props.type}</p>
            <p> {props.author}</p>
            <div className="card-footer">
                <button className="card-button float-left" onClick={(e) => handleClick(e)}> <span className="card-span-emoji" role="img" aria-label="Discard"> ❌ </span>  </button>
                <a href={props.link} target="_blank" rel="noopener noreferrer" >
                    <button className="card-button"> <span className="card-span-emoji" role="img" aria-label="See Text">  👁️ </span>  </button> </a>
                <button className="card-button float-right" onClick={(e) => handleClick(e)} > <span className="card-span-emoji" role="img" aria-label="Save Card"> ✔️ </span> </button>
            </div>
        </div>
    )
}