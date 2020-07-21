import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';
import './ConfirmPrompt.styles.scss';

const ConfirmPrompt = ({
  dataTestId,
  message,
  handleCancel,
  handleClick,
  isLoading,
}) => {
  return (
    <div className="confirm-container">
      <div className="confirm-content">
        <div>
          <p className="confirm-title">{message}</p>
        </div>
        <div className="button-container">
        <Button
            title="yes"
            handleClick={handleClick}
            showLoader={isLoading}
            disabled={isLoading}
            dataTestId={`${dataTestId}-yes`}
            customClassName="deleteButton"
        />
        <Button
            title="no"
            handleClick={handleCancel}
            disabled={isLoading}
            dataTestId={`${dataTestId}-no`}
        />
        </div>
      </div>
    </div>
  );
};

ConfirmPrompt.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string,
  dataTestId: PropTypes.string,
};

ConfirmPrompt.defaultProps = {
  dataTestId: 'confirmprompt',
  message: 'Are you sure you want to perform this operation?',
};

export default ConfirmPrompt;
