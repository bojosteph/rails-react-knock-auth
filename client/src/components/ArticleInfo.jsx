import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticle, deleteArticle } from '../actions';

class ArticleInfo extends Component {
  
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id)
  }

  

  render() {
    const article = this.props.article;
    return (
      <div>
        <h2>{article.id}: {article.title}</h2>
        <p>{article.content}</p>
        <div className="btn-group">
          <Link to={{ pathname: `/articles/${article.id}/edit`, state: { article: article }}} className="btn btn-info">Edit</Link> 
          <button onClick={() => this.props.deleteArticle(article.id)} className="btn btn-danger" type="button">Delete</button> 
          <Link to="/articles" className="btn btn-secondary">Close</Link>
        </div>
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article
});
const mapDispatchToProps = { getArticle, deleteArticle}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);


// componentDidMount() {
//   let token = "Bearer " + localStorage.getItem("jwt");
//   axios({method: 'get', url: `/api/articles/${this.props.match.params.id}`, headers: {'Authorization': token }})
//     .then((response) => { 
//       this.setState({
//         article: response.data
//       })
//     })
//     .catch(error => console.log('error', error));
// }

// handleDelete() {
//   let token = "Bearer " + localStorage.getItem("jwt");
//   axios({ method: 'delete', url: `/api/articles/${this.props.match.params.id}`, headers: {'Authorization': token}})
//     .then(() => {
//       this.props.history.push("/articles")
//     })
//     .catch(error => console.log('error', error));
// }