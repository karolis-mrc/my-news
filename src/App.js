import React, { Fragment, useEffect, useState } from 'react';
import { getNews } from './services/gnApi';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!!query) {
      getNews(query).then((data) => data && setNews(data.articles));
    }
  }, [query]);

  const getQuery = (item) => {
    setQuery(item);
  };

  return (
    <Fragment>
      <Header getQuery={getQuery} />

      <section>
        <div className='main-content'>
          <div className='container'>
            <div className='row'>
              {news &&
                news.slice(0, 9).map((article, key) => {
                  return (
                    <div key={key} className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5'>
                      <Card article={article} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
