import React from 'react'
import './Description.css';
import logo from './logo-white.svg'
function Description() {
    return (
        <div className="description">
                <div><img src={logo}/></div>
                <div className="first-row"> 
                <div>
                    <ul>
                        <li><h6>Overview</h6></li>
                        <li><a href="">Why Marvel</a></li>
                        <li><a href="">Enterprise</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Request a demo</a></li>
                        <li><a href="">Explore</a></li>
                        <li><a href="">Apps</a></li>
                        <li><a href="">Developer API</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h6>Features</h6></li>
                        <li><a href="">Wireframming</a></li>
                        <li><a href="">Design</a></li>
                        <li><a href="">Prototyping</a></li>
                        <li><a href="">Collabaration</a></li>
                        <li><a href="">Handoff</a></li>
                        <li><a href="">Integration</a></li>
                        <li><a href="">Sketch Plugin</a></li>
                    </ul>
                </div>
                </div>
                <div className="second-row">
                <div>
                    <ul>
                        <li><h6>Support</h6></li>
                        <li><a href="">Hel Center</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Security</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h6>Marvel</h6></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Success Stories</a></li>
                        <li><a href="">Brand Guidelines</a></li>
                    </ul>
                </div>
                </div>
                <div className="third-row">
                <div>
                    <ul>
                        <li><h6>Follow</h6></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Dribble</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Github</a></li>
                        <li><a href="">Workable</a></li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default Description
