import React, { Component } from 'react';
import { Link as RawLink } from 'react-router';
import styled, { css } from 'styled-components';

import DropdownMenu from './DropdownMenu';
import { ui, spacing } from '../../ui';
import logo from '../../../static/media/logo-app-white.svg';

const Wrapper = styled.header`
  background-color: ${ui('primary')};
  width: 100%;
  padding: 0 ${spacing()};
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;

  ${props =>
    props.navigation &&
    css`
    flex: 1;
    padding-left: ${spacing(2)};
  `};
`;

const Logo = styled.img`
  height: 48px;
`;

const NavigationItem = styled.li`
  margin-right: ${spacing(1)};
  list-style: none;
`;

const Link = styled(RawLink)`
  color: rgba(255,255,255,.9);
  transition: color 150ms ease;

  &:hover {
    color: #fff;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <NavigationList>
            <NavigationItem>
              <Link to="/">
                <Logo src={logo} alt="Logo PickGift" />
              </Link>
            </NavigationItem>
          </NavigationList>
          <NavigationList navigation>
            <NavigationItem>
              <Link to="/villages">Mes villages</Link>
            </NavigationItem>
          </NavigationList>
          <DropdownMenu />
        </Nav>
      </Wrapper>
    );
  }
}

export { Header };
