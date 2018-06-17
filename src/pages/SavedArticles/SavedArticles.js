import React, { Component } from "react";
import SavedBox from "../../components/SavedBox";
import { ResultsBox, ResultsList, ListItem } from "../../components/ResultsBox";
import API from "../../utils/API";

class SavedArticles extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <div>
            <SavedBox>
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
            </SavedBox>
        </div>
    );
  }
}

export default SavedArticles;