import React from 'react'
import './Feature.css';
import hash from './hash.png';
import graph from './graph.png';
import bird from './bird.png';
function Feature() {
    return (
        <div className="feature">
            <div className="outer-div">
            <div className="upper-div">
                <h1>Experience the freedom to build features, right away.</h1>
                <p>You can now harness components of our plateform and build powerful integration for our 2 million users - or simply just for your team.</p>
            </div>
            <div className="lower-div">
                <div className="card">
                    <img src={hash}/>
                    <h3>Dedicated API Team</h3>
                    <p>Our team are available for user's questions via our slack Devloper Community and Email.</p>
                </div>
                <div className="card">
                    <img src={graph}/>
                    <h3>Our API uses Graph QL</h3>
                    <p>No handling server side, Get many API's responses in a single reqest.</p>
                </div>
                <div className="card">
                    <img src={bird}/>
                    <h3>Supercharge your workflow</h3>
                    <p>Automate workflows , integrated and analyse data and take Marvel to the next level.</p>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Feature
