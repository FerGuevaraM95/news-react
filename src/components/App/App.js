import React, { Component } from 'react';

import Header from '../Header';
import News from '../News';

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
        <div className="app-container">
            <Header
                title = 'React News' />
            <div className="container white news-container">
            <News
                news={this.state.news}
            />
            </div>
        </div>
    );
  }
}

export default App;
