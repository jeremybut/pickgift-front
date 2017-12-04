import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Header } from './components/Ui/Header';
import { DropdownMenu } from './components/Ui/DropdownMenu';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.disconnectIfNotLoggedIn();
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    this.disconnectIfNotLoggedIn();
  }

  disconnectIfNotLoggedIn() {
    const { user } = this.props;

    if (!user || !user.access_token) {
      browserHistory.push('/login');
    }
  }

  handleClick(e) {
    console.log(e.nativeEvent);
  }

  render() {
    return (
      <div>
        <Header foo="bar" onClick={this.handleClick} />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
