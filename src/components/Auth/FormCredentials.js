import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Link } from 'react-router';

import { Button, AlignRight } from '../../ui';
import validate from './validate';
import renderField from './renderField';

const Form = styled.form`
`;

const Title = styled.h1`
`;

const Subtitle = styled.p`
`;

const LoginFormCredentials = ({ handleSubmit, btnText, action }) =>
  <Form onSubmit={handleSubmit}>
    {action == 'signup' && <Title>Inscription</Title>}
    {action == 'login' && <Title>Connexion</Title>}
    <Subtitle>
      Lorem ipsum
    </Subtitle>
    <Field
      name="email"
      type="text"
      component={renderField}
      label="Email :"
      placeholder="nom@email.com"
    />
    <Field
      name="password"
      type="password"
      component={renderField}
      label="Mot de passe :"
    />
    {action == 'signup' && <Link to='/login'>Se connecter</Link>}
    {action == 'login' && <Link to='/signup'>S'enregistrer</Link>}
    <AlignRight>
      <Button big type="submit" className="next">
        {btnText}
      </Button>
    </AlignRight>
  </Form>
;

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(LoginFormCredentials);
