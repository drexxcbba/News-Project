import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';


function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const queryAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=651c88e182ac4cf09a9cfc00dffd063a`;
      const res = await fetch(url);
      const newsRes = await res.json();
      setNews(newsRes.articles);
    }
    queryAPI();
  }, [category])

  return (
    <Fragment>
      <Header 
       title="Buscador de Noticias"
       />
       <div className="container white">
         <Form 
          setCategory={setCategory}
          />
          <ListNews
           news={news}
           />
       </div>
    </Fragment>
  );
}

export default App;
