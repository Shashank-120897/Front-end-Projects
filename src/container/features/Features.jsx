import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
    {
        title: 'Improvising and distrusts instantly',
        text: 'From they fine john he give of rich he.'
    },
    {
        title: 'Becomes the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not.'
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating.'
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law conuty she unable her sister. Feet you off its like like six.'
    },
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className="gpt3__features-heading">
                <h1 className='gradient__text'>The Future is Now and You just Need to Realize it. Step into Future Today & Make it Happen.</h1>
                <p>Requests Early Access to Get Started.</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features;
