import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Requests Early Access to Get Started</h4>

                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>

                <p>yet bed for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing indulgence why everything joy alteration boisterous the attachment.</p>

                <h4>Requests for Early Access</h4>
            </div>
        </div>
    )
}

export default Possibility
