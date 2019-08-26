import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/authAction';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state)        
    }      
       

  render() {
    const { user } = this.props
    if (user.email) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input name="email" id="email" type="email" className="form-control" onChange={this.handleChange}  value={this.state.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" type="password" className="form-control" onChange={this.handleChange}  value={this.state.password}/>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect( mapStateToProps, {login})(Login);