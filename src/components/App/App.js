import React, { Component } from 'react';
import Header from '../Header';

class App extends Component {

    state = {
        news : []
    }

    componentDidMount() {
        this.getNews();
    }

    getNews = () => {
        let url = 'https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=ed71b5000a284dab9f366e0dd103b290';

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(news => {
                this.setState({
                    news: news.articles
                })
            })
    }

  render() {
    return (
      <div>
          <Header
            title = 'React News' />
      </div>
    );
  }
}

export default App;
