import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles} from '../../actions/index';

class ArticleList extends Component {
  
  componentDidMount(){
    this.props.getArticles()
  }

  render() {
    if(this.props.articles.length) {
    return (
      <div>
        <h4>Articles</h4>
        {this.props.articles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          )     
        })}
        
      </div>
    )
      } else {
        return (<div>No Articles</div> )
      }
  } 
}

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps, {getArticles})(ArticleList);


