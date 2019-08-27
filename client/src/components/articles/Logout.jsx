import React from 'react';
import { Redirect } from 'react-router-dom'

class Logout = () => {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
}

export default Logout;