import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. Friendly bachelor entrance to on by.' />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard. Oh ought.' />

                <Feature title='Knowledgebase' text='At jointure ladyship as insisted so humanity me. Friendly bachelor entrance to on by.' />

                <Feature title='Education' text='Friendly bachelor entrance to on by. As but impossible own apartments do.' />
            </div>
        </div>
    )
}

export default WhatGPT3
