import React from 'react'
import './SlackBot.css';
import bot from './botbot.png';
function SlackBot() {
    return (
        <div className="slackbot">
            <div className="outer-div">
            <img src={bot}/>
            <div className="inner-div">
                <h4 className="heading">A Slack-bot for creating and managing prototypes</h4>
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

export default SlackBot
