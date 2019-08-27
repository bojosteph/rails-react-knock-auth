import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../actions/index';

class ArticleAdd extends Component {
  state = { title: '', content: ''};     

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle(this.state)
  }

 
  render() {
    return (
      <div>
        <h4>Add Article </h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}
             className="form-control"  placeholder="Title"/>
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea name="content" rows="5" value={this.state.content} onChange={this.handleChange} 
            className="form-control" placeholder="Content" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addArticle };

export default connect(null, mapDispatchToProps)(ArticleAdd);



// handleSubmit(event) {
//   event.preventDefault();
//   let token = "Bearer " + localStorage.getItem("jwt")
//   axios({ method: 'post', url: '/api/articles', headers: {'Authorization': token }, data: this.state})
//     .then((response) => {
//       this.props.history.push(`/articles/${response.data.id}`);
//     })
//     .catch(error => console.log('error', error));
// }