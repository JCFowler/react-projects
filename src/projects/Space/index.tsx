import React, { useEffect, useState } from 'react';
import { News } from './models/space.model';
import './space.css';

const SpaceNews = () => {

    const [newsList, setNewsList] = useState<News[]>([]);

    useEffect(() => {
        fetch('https://spaceflightnewsapi.net/api/v2/articles').then(res => res.json()).then((data: News[]) => {
            setNewsList(data);
        });
    }, [])

    return (
        <div className="App">
            <div className="title">
                <h1>Space News</h1>
            </div>
            <div className="newsContainer">
                {newsList.map((val, key) => {
                    return (
                        <div key={key} className="article" onClick={() => { window.location.href = val.url }}>
                            <h3>{val.title}</h3>
                            <img alt="" src={val.imageUrl} />
                            <p>{val.summary}</p>
                            <h4>{val.publishedAt}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default SpaceNews;
