import React from 'react';
import { Field, reduxForm } from 'redux-form';

import renderField from './renderField';

const VillageFormFirstPage = (props) => {
  const { current, total, handleSubmit } = props;

  return (
    <div className="village-form-first-page">
      <form onSubmit={handleSubmit}>
        <Field
          name="displayName"
          type="text"
          component={renderField}
          label="Enter your village name"
        />
        <div>
          <button type="submit" className="next show" />
        </div>
      </form>
      <span className="number">
        <span className="number-current">{ current }</span>
        <span className="number-total">{ total }</span>
      </span>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(VillageFormFirstPage);
