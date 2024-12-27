import React from 'react';
import './Article.css';
interface ArticleProps {
  image: string;
  date: string;
  title: string;
}

const Article:React.FC<ArticleProps> = ({image,date, title}) => {
  return (
    <div className='gpt3_article'>
      <div className="gpt3_article-img">
        <img src={image} alt ="Article Image"/>
      </div>
      <div className="gpt3_article-content">
        <div>
          <p>
            {date}
          </p>
          <h3>
            {title}
          </h3>
        </div>
        <p>
          Read More...
        </p>
      </div>
    </div>
  )
}

export default Article
