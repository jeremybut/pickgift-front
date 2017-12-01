import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TagsInput from 'react-tagsinput';

import renderField from './renderField';

const VillageFormSecondPage = (props) => {
  const {
    current,
    total,
    handleSubmit,
    emails,
    onTagsChange,
  } = props;

  const label = 'Invite your villagers';
  const EMAIL_VALIDATION_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

  function defaultRenderTag (props) {
    let {
      tag,
      key,
      disabled,
      onRemove,
      classNameRemove,
      getTagDisplayValue,
      ...other
    } = props;

    return (
      <span key={key} {...other}>
        {getTagDisplayValue(tag)}
        {!disabled &&
          <a className={classNameRemove} onClick={(e) => onRemove(key)} />
        }
      </span>
    )
  }

  function defaultRenderInput (props) {
    let {onChange, value, addTag, ...other} = props
    return (
      <input type='text' onChange={onChange} value={value} {...other} />
    )
  }

  function defaultRenderLayout (tagComponents, inputComponent) {
    return (
      <span>
        {inputComponent}
        {tagComponents}
      </span>
    )
  }

  return (
    <div className="village-form-second-page">
      <form onSubmit={handleSubmit}>
        <li className="current">
          <span>
            <label htmlFor={label}>
              {label}
            </label>
          </span>
          <TagsInput
            value={emails}
            addKeys={[9, 13, 32, 186, 188]}
            onChange={onTagsChange}
            renderTag={defaultRenderTag}
            renderInput={defaultRenderInput}
            renderLayout={defaultRenderLayout}
            validationRegex={EMAIL_VALIDATION_REGEX}
            placeholder=''
            pasteSplit={data => {
              return data.replace(/[\r\n,;]/g, ' ').split(' ').map(d => d.trim())
            }}
            addOnPaste
            autoFocus
            onlyUnique
          />
        </li>
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
})(VillageFormSecondPage);
