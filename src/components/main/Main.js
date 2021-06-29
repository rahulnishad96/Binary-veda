import React from 'react'
import './Main.css';
import logo from './illustration.png';
function Main() {
    return (
        <div className="outer-div">
            <div className="inner-div">
                <h1 className="heading">Let's build the future of design,now.</h1>
                <p className="summary">Create amazing tools and integrations for 1 million users or customise Marvel for your team.</p>
                <div className="btn-div">
                    <button className="submit">Submit your app</button>
                    <button className="view">Veiw API Docs</button>
                </div>
            </div>
            <img src={logo}/>
            
        </div>
        
    )
}

export default Main
