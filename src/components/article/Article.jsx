import React from 'react'
import './article.css';
import { blog01, blog02, blog03, blog04, blog05 } from '../../container/blog/imports';

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read full Article</p>
            </div>
        </div>
    )
}

export default Article
