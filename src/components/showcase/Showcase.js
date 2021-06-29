import React from 'react';
import './Showcase.css';
import showcase from './showcase.png';
function Showcase() {
    return (
        <div className="showcase">
            <div className="outer-div">
            <img src={showcase}/>
            <div className="inner-div">
                <h4 className="heading">Showcase your app in our integrations directory</h4>
                <p className="summary">Building something special? We're always looking to work with partners who wants to help the word bring there ideas to life.</p>
                <div className="btn-div">
                    <button className="submit">Become a partner</button>
                    <button className="view">View Integrations</button>
                </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default Showcase
