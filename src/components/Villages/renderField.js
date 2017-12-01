import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <li className="current">
    <span>
      <label htmlFor={label}>
        {label}
      </label>
    </span>
    <input {...input} type={type} autoFocus />
    {touched && error && <span className="error-message">{error}</span>}
  </li>
);

export default renderField;
