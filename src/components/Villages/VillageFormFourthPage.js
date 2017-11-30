import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import renderField from './renderField';

const VillageFormFourthPage = (props) => {
  const {
    current,
    total,
    handleSubmit,
    pristine,
    submitting,
    label,
    maxInscriptionDate,
    onMaxInscriptionDateChange,
    maxInscriptionDateFocused,
    onMaxInscriptionDateFocusChange,
  } = props;

  return (
    <div className="village-form-second-page">
      <form onSubmit={handleSubmit}>
        <li className="current">
          <span>
            <label htmlFor={label}>
              {label}
            </label>
          </span>
        <SingleDatePicker
          date={maxInscriptionDate}
          onDateChange={onMaxInscriptionDateChange}
          focused={maxInscriptionDateFocused}
          onFocusChange={onMaxInscriptionDateFocusChange}
        />
        </li>
        <div>
          <button
            type="submit"
            className="next show"
            disabled={pristine || submitting}
          >
          </button>
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
})(VillageFormFourthPage);
