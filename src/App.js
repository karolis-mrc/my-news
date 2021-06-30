import React, { Fragment, useEffect, useState } from 'react';
import { getNews } from './services/gnApi';
import Header from './components/Header';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() =>{
      getNews().then(data => data && setNews(data.articles));
      console.log(news);
  },[])

  return (
    <Fragment>
      <Header />

      <section>
        <div className="main-content">
          <div className="container">
            <div className="row">
            { news && news.map(( article, key ) => {
                    return (
                      <div key={ key } className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="card shadow">
                          <a href={article.url}  target="_blank" rel="noopener noreferrer">
                            <div className="img object-fit overflow-hidden">
                              <div className="object-fit-cover">
                                <img className="card-img-top" src={article.image} alt={article.title} />
                              </div>

                              <div class="overlay d-flex justify-content-center align-items-center">
                                  <h3 className="overlay-text">Visit the page</h3>
                              </div>
                            </div>
                          </a>

                          <div className="card-body">
                            <div className="meta">
                              <p>
                                <span>Published at : </span>
                                <span>{article.publishedAt}</span>
                              </p>
                            </div>

                            <a href={article.url}  target="_blank" rel="noopener noreferrer">
                              <h4 className="card-title pb-3">{article.title}</h4>
                            </a>

                            <p className="card-text">{article.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                })}
            </div>
            {/* <ul>
                { news && news.map(( article, key ) => {
                    return (
                        <li key={ key }>
                            <p>{article.title}</p>
                        </li>
                    )
                })}
            </ul> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
