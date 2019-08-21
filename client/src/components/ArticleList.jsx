import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArticleList extends Component {
  

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

export default connect(mapStateToProps)(ArticleList);



// componentDidMount() {
//   let token = "Bearer " + localStorage.getItem("jwt");
//   axios({method: 'get', url: '/api/articles', headers: {'Authorization': token }})
//     .then(response => { 
//       this.setState({ articles: response.data })
//     })
//     .catch(error => console.log('error', error));
// }