const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Obligatoire';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Format email incorrect';
  }
  if (!values.password) {
    errors.password = 'Obligatoire';
  }
  return errors;
};

export default validate;
