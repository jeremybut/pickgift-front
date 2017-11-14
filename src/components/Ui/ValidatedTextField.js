import React, { Component } from 'react';
import { HOC as withValidation } from 'formsy-react';

import withI18n from './withI18n';

class ValidatedTextField extends Component {
  static defaultProps = {
    type: 'text',
    maxLength: null,
    size: null,
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      hasBeenFocused: false,
      hasBeenBlurred: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { setValue, onChange } = this.props;

    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  }

  render() {
    const {
      required, label, name, disabled, type, placeholder, getValue, maxLength,
      size, style,
    } = this.props;

    let inputSize;
    if (Boolean(size)) {
      inputSize = Math.max(size, Number(`${getValue()}`.length));
    }
    return (
      <fieldset>
        <div className="form-group">
          <label htmlFor={name} className="col-sm-2 control-label">{label}</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              maxLength={maxLength}
              size={inputSize}
              value={getValue() || ''}
              type={type}
              disabled={disabled}
              onChange={this.handleChange}
              onFocus={e => this.setState({ hasBeenFocused: true })}
              placeholder={placeholder}
              name={name}
              id={name}
              onBlur={e => this.setState({ hasBeenBlurred: true })}
              required={required}
              ref='input'
              style={style}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default withValidation(withI18n(ValidatedTextField));
