import React, { Component } from "react";
import { SearchBox, Input, FormBtn } from "../../components/SearchBox";
import { ResultsBox, ResultsList, ListItem } from "../../components/ResultsBox";
import API from "../../utils/API";

class Search extends Component {
    state = {
      articles: [],
      topic: "",
      startYear: "",
      endYear: ""
    };

  searchArticles = (event) => {
    event.preventDefault();
    API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => 
          {
          this.setState({articles: res.data.response.docs});
          console.log(this.state.articles);
        }
        )
        .catch( err => console.log(err));
  };
  
  componentDidMount() {
    this.searchArticles();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
        <div>
            <SearchBox>
            <form>
              <h4>Topic</h4>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="topic"
              />
              <h4>Start Year</h4>
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="startYear"
              />
              <h4>End Year</h4>
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="endYear"
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                onClick={this.searchArticles}
              >
                Submit
              </FormBtn>
            </form>
            </SearchBox>

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