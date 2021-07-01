import React, { Fragment, useEffect, useState } from 'react';
import { getNews } from './services/gnApi';
import Header from './components/Header';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // getNews().then(data => data && setNews(data.articles));
    console.log(news);
  }, [])

  return (
    <Fragment>
      <Header />

      <section>
        <div className="main-content">
          <div className="container">
            <div className="row">
              {news && news.slice(0, 9).map((article, key) => {
                return (
                  <div key={key} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="card h-100 shadow">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <div className="img object-fit overflow-hidden">
                          <div className="object-fit-cover">
                            <img className="card-img-top" src={article.image} alt={article.title} />
                          </div>
                        </div>

                        <div className="card-body">
                          <div className="meta">
                            <p>
                              <span>Published at : </span>
                              <span>{(article.publishedAt).replace("T", " ").replace('Z','')}</span>
                            </p>
                          </div>

                          <h4 className="card-title pb-3">{article.title}</h4>

                          <p className="card-text">{article.description}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
