import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { getNews } from '../services/gnApi';

const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() =>{
        getNews().then(data => data && setNews(data.articles));
    },[])

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home - My News</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <main>
                <ul>
                    { news && news.map(( article, key ) => {
                        return (
                            <li key={ key }>
                                <p>{article.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </main>

        </Fragment>
    );
}

export default Home;
