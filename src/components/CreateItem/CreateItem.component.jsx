import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as itemActions from '../../redux/actionCreators/itemActions/itemActions';
import TextInput from '../TextInput/TextInput.component';
import Button from '../Button/Button.component';
import Dropdown from '../Dropdown/Dropdown.component';
import { validateCreateItem } from '../../helpers/validators/itemValidator';
import { categories } from '../../helpers/defaults';
import './CreateItem.styles.scss';

const CreateItem = ({
  createItem, isLoading: reduxIsLoading, closeModal,
  errorMessage, createItemSuccess, dataTestId,
}) => {
  const [values, setValues] = useState({
    Name: '',
    Value: '',
    CategoryId: '',
  });

  const [formErrors, setFormErrors] = useState({
    Name: '',
    Value: '',
    CategoryId: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [serverError, setServerError] = useState('');

  const formSubmitted = useRef(false);
  const hasServerOperationOccurred = useRef(false);

  useEffect(() => {
    if (!reduxIsLoading && createItemSuccess && formSubmitted.current) {
      setIsLoading(false);
      closeModal();
      formSubmitted.current = false;
      return;
    }

    if (!reduxIsLoading && formSubmitted.current) {
      setIsLoading(false);
      formSubmitted.current = false;
    }
  }, [reduxIsLoading, createItemSuccess, closeModal]);

  useEffect(() => {
    if (errorMessage && hasServerOperationOccurred.current) {
      setServerError(errorMessage);
    }
  }, [errorMessage]);

  const handleChange = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const { isValid, errors } = validateCreateItem(values);
    setFormErrors({
      ...errors,
    });
    if (!isValid) {
      return;
    }

    setIsLoading(true);

    createItem({
      Name: values.Name,
      Value: values.Value,
      CategoryId: values.CategoryId,
    });

    formSubmitted.current = true;
    hasServerOperationOccurred.current = true;
  };

  const renderCreateForm = () => (
    <div className="item-container">
        <div>
            <p>Add an Item</p>
            <span className="error-text">{serverError}</span>
            <TextInput
                name="Name"
                placeholder="Playstation"
                title="Enter the item name"
                type="text"
                value={values.Name}
                error={formErrors.Name}
                onChange={handleChange}
                dataTestId={`${dataTestId}-name`} />
            <TextInput
                name="Value"
                placeholder="5000"
                title="Enter the value of the item"
                type="text"
                value={values.Value}
                error={formErrors.Value}
                onChange={handleChange}
                dataTestId={`${dataTestId}-value`} />
            <Dropdown
                options={categories}
                name="CategoryId"
                optionsTitleProperty="name"
                optionsValueProperty="id"
                value={values.CategoryId}
                error={formErrors.CategoryId}
                onChange={handleChange}
                placeholder="select item category"
                dataTestId={`${dataTestId}-category`}
            />
            <br />
            <Button
                title="Create"
                handleClick={handleClick}
                showLoader={isLoading}
                disabled={isLoading}
                dataTestId={`${dataTestId}-create`}
            />
        </div>
        <br />
    </div>
  );

  return (
        <div className="create-item-container">
            <div className="form-container">
                    {renderCreateForm()}
                </div>
        </div>
  );
};

CreateItem.propTypes = {
  createItem: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  createItemSuccess: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

CreateItem.defaultProps = {
  dataTestId: 'createitem',
};

const mapStateToProps = ({ item }) => ({
  isLoading: item.isLoading,
  createItemSuccess: item.createItemSuccess,
  errorMessage: item.errorMessage,
});

const mapDispatchToProps = {
  createItem: itemActions.createItem,
};

export {
  CreateItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
