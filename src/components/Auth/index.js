import styled from 'styled-components';

import { ui } from '../../ui/colors';
import { spacing } from '../../ui/variables';
import background from '../../../static/media/authentication-background.jpg';

export const Logo = styled.img`
  margin-bottom: ${spacing(2)};
  height: 72px;
`;

export const Authentication = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  background-image: url(${background});
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
`;

export const Box = styled.div`
  width: 50%;
  padding: 50px 0;
  border-radius: 5px;
  max-width: ${props => props.maxWidth || '400px'};
  background-color: ${ui('background')};
`;
