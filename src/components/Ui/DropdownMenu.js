import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link as RawLink } from 'react-router';

import avatar from '../../../static/media/flat-avatar.png';
import { logout } from '../../actions/logout';
import { ui, spacing } from '../../ui';

const NavigationList = styled.ul`
  display: block;
  position: absolute;
  top: ${spacing(4)};
  right: ${spacing(.5)};
  width: 200px;
  padding: ${spacing(.5)} 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,.35);
  text-align: right;
  z-index: 10;
`;

const NavigationItem = styled.li`
  display: block;
`;

const Link = styled(RawLink)`
  display: block;
  padding: ${spacing(.5)} ${spacing()};
  color: ${ui('text')};
  transition: background-color 150ms ease;

  &:hover {
    background-color: rgba(0,0,0,.06);
  }
`;

const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
  margin: ${spacing(.5)} 0;
`;

const Logout = Link.extend`
`;

const UserProfile = styled.div`
  border-radius: 100%;
  height: 48px;
  width: 48px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 4px rgba(0,0,0,.35);
  margin-right: 15px;

`;

const Avatar = styled.img`
  height: 50px;
`;

class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleDOMClick = this.handleDOMClick.bind(this);
    this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDOMClick(e) {
    this.handleDismiss(e);
    document.removeEventListener('click', this.handleDOMClick);
  }

  handleToggleDropdown(e) {
    const { open } = this.state;

    this.setState({ open: !open }, () => {
      if (this.state.open) {
        document.addEventListener('click', this.handleDOMClick);
      }
    });
  }

  handleDismiss() {
    this.setState({ open: false });
  }

  handleLogout() {
    this.props.dispatchLogout();
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <UserProfile onClick={this.handleToggleDropdown}>
          <Avatar src={avatar} alt="avatar" />
        </UserProfile>
        {open &&
          <NavigationList>
            <NavigationItem>
              <Link to="/">Paramètres</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Mon profil</Link>
            </NavigationItem>
            <Divider />
            <NavigationItem>
              <Logout onClick={this.handleLogout}>Se déconnecter</Logout>
            </NavigationItem>
          </NavigationList>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(DropdownMenu);
