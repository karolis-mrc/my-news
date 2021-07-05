import React from 'react';
import { postArticles } from '../services/gnApi';

const Card = ({ article }) => {
  return (
    <div className='card h-100 shadow'>
      <a href={article.url} onClick={() => postArticles(article)} target='_blank' rel='noopener noreferrer'>
        <div className='img object-fit overflow-hidden'>
          <div className='object-fit-cover'>
            <img className='card-img-top' src={article.image} alt={article.title} />
          </div>
        </div>

        <div className='card-body'>
          <div className='meta'>
            <p>
              <span>Published at : </span>
              <span>{article.publishedAt.replace('T', ' ').replace('Z', '')}</span>
            </p>
          </div>

          <h5 className='card-title pb-3'>{article.title}</h5>

          <p className='card-text'>{article.description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
