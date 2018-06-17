import React, { Component } from "react";
import SearchBox from "../../components/SearchBox";
import { ResultsBox, ResultsList, ListItem } from "../../components/ResultsBox";
import API from "../../utils/API";

class Search extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            <SearchBox />
            <ResultsBox>
            {!this.state.articles.length ? (
                <h1 className="text-center">Search for articles to begin!</h1>
            ) : (
                <ResultsList>
                {this.state.articles.map(article => {
                    return (
                    <ListItem
                        key={article.title}
                        title={article.title}
                        date={article.date}
                    />
                    );
                })}
                </ResultsList>
            )}
            </ResultsBox>
        </div>
    );
  }
}

export default Search;