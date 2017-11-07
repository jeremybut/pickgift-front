import React from 'react';
import { Label, Input, FormGroup, FormHelp } from '../../ui';

const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) =>
  <div>
    <FormGroup>
      <Label>
        {label}
      </Label>
      <Input {...input} placeholder={placeholder} type={type} />
      {touched &&
        error &&
        <FormHelp error>
          {error}
        </FormHelp>
      }
    </FormGroup>
  </div>;

export default renderField;
