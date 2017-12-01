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

const LoginFormCredentials = ({ handleSubmit, btnText, action }) =>
  <Form onSubmit={handleSubmit}>
    {action == 'signup' && <Title>Inscription</Title>}
    {action == 'login' && <Title>Connexion</Title>}
    <Field
      name="email"
      type="text"
      component={renderField}
      label="Email :"
      placeholder="jean.dupont@mail.com"
    />
    <Field
      name="password"
      type="password"
      component={renderField}
      label="Mot de passe :"
    />
    <AlignRight>
      <Button big block type="submit" className="next">
        {btnText}
      </Button>
    </AlignRight>
    <p>
      {action == 'signup' &&
        <div>
          <p>Vous avez déjà un compte ?</p>
          <Link to='/login'>Se connecter</Link>
        </div>
      }
    </p>
    <p>
      {action == 'login' &&
        <div>
          <p>Vous n’avez pas encore de compte ?</p>
          <Link to='/signup'>S'enregistrer</Link>
        </div>
      }
    </p>
  </Form>
;

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(LoginFormCredentials);
