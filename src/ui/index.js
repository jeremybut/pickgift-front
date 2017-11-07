import styled, { css } from 'styled-components';

import { color, ui } from './colors';
import { spacing, lineHeight } from './variables';
import { Label, Input, FormGroup, FormHelp } from './forms';
import { Button } from './buttons';

export const List = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};

  ${props =>
    props.narrow &&
    css`
    max-width: 850px;
  `} ${props =>
      props.tight &&
      css`
    max-width: 600px;
  `};
`;

export const AlignCenter = styled.div`
  text-align: center;
`;

export const AlignRight = styled.div`
  text-align: right;
`;

export {
  color, ui,
  spacing, lineHeight,
  Label, Input, FormGroup, FormHelp,
  Button,
};
