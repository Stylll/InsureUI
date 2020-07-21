/* eslint-disable import/prefer-default-export */
import { isEmpty } from 'lodash';

const validateCreateItem = (values) => {
  const errors = {};
  // name is required,
  if (!values.Name || (values.Name && !values.Name.trim())) {
    errors.Name = 'name cannot be empty';
  }

  // value is required
  if (!values.Value || (values.Value && !values.Value.trim())) {
    errors.Value = 'value cannot be empty';
  } else if (/[^0-9.]/gi.test(values.Value)) {
    errors.Value = 'value is invalid';
  } else if (parseFloat(values.Value) <= 0) {
    errors.Value = 'value must be greater than 0';
  }

  // categories is required
  if (!['1', '2', '3'].includes(values.CategoryId)) {
    errors.CategoryId = 'category must be either Electronics, Clothing, or Kitchen';
  }

  const result = {
    Name: errors.Name || '',
    Value: errors.Value || '',
    CategoryId: errors.CategoryId || '',
  };

  return {
    isValid: isEmpty(errors),
    errors: result,
  };
};

export {
  validateCreateItem,
};
