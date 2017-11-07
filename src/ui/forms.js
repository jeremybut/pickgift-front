import styled, { css } from 'styled-components';
import { spacing } from './variables';

export const FormGroup = styled.div`
  margin: 0 0 ${spacing(2)} 0;
`;

export const Label = styled.label`
  margin-bottom: ${spacing(.5)};
  display: block;
  font-size: 1.125rem;
`;

export const Input = styled.input`
  padding: ${spacing(0.75)} ${spacing()};
  background-color: rgba(255,255,255,.15);
  width: 100%;
  border-radius: 4px;
  font-size: 1.125rem;
  outline: none;
  transition: background-color 150ms ease;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(255,255,255,.25);
  }
`;

export const FormHelp = styled.div`
  text-align: right;
  font-style: italic;
  opacity: .5;
  margin-right: ${spacing(.5)};
  margin-top: ${spacing(.25)};
  font-size: .875rem;

  ${props => props.error && css`

  `};
`;
