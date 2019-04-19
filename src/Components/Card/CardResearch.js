import React from 'react';
import branchImage from '../../img/branch.svg';
export default function CardResearch(props) {
    function handleClick(e) {
    e.preventDefault();
    alert(props.title);
        
    }
    return(
        <div className="card">
        <img src={props.src} alt=""></img>
        <h3>{props.title}</h3>
        <p> {props.description}</p>
        <p> {props.duration}</p>
        <p> <span className="icon icon-branch"/>  {props.branch}</p>   
        <p> <span className="icon icon-type"/> {props.type}</p>
        <p> {props.author}</p>
        <div> 
<button onClick={(e) => handleClick(e)}> <span role="img" aria-label="Discard"> ❌ </span>  </button>
        <a href={props.link} target="_blank" rel="noopener noreferrer" > <span role="img" aria-label="See Text">  👁️ </span> </a>
        <button> <span role="img" aria-label="Save Card"> ✔️ </span> </button>
        </div>
        </div>
    ) 
}