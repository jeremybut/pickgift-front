import styled, { css } from 'styled-components';

import { spacing } from './variables';
import { color, ui } from './colors';

export const Button = styled.button`
  padding: ${spacing(.5)} ${spacing()};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: ${ui('primary')};
  outline: none;
  transition: background-color 150ms ease;
  text-shadow: 1px 1px 1px rgba(0,0,0,.25);

  &:hover {
    background-color: ${color('yellow', 'warmer')};
  }

  ${props => props.big && css`
    padding: ${spacing(.75)} ${spacing(2)};
    font-size: 1.25rem;
  `};

  ${props => props.outline && css`
    background-color: transparent;
    box-shadow: 0 0 0 1px solid ${ui('primary')};
    color: ${ui('primary')};

    &:hover {
      background-color: transparent;
    }
  `};

  ${props => props.outlineWhite && css`
    background-color: transparent;
    box-shadow: 0 0 0 1px solid #fff;
    color: #fff;

    &:hover {
      background-color: transparent;
    }
  `};
`;
