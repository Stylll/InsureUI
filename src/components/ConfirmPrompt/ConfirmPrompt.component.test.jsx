import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import ConfirmPrompt from '../../components/ConfirmPrompt/ConfirmPrompt.component';

describe('ConfirmPrompt Test', () => {
  it('should render properly', () => {
    const { baseElement } = render(<ConfirmPrompt
      handleCancel={() => {}}
      handleClick={() => {}}
      isLoading={false}
    />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call handleCancel function when the no button is clicked', () => {
    const handleCancel = jest.fn();
    const { baseElement, getByTestId } = render(<ConfirmPrompt
      handleCancel={handleCancel}
      handleClick={() => {}}
      isLoading={false}
    />);

    fireEvent.click(getByTestId('confirmprompt-no'));
    expect(handleCancel).toHaveBeenCalled();
  });

  it('should call handleClick function when the yes button is clicked', () => {
    const handleClick = jest.fn();
    const { baseElement, getByTestId } = render(<ConfirmPrompt
      handleCancel={() => {}}
      handleClick={handleClick}
      isLoading={false}
    />);

    fireEvent.click(getByTestId('confirmprompt-yes'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should display custom message if passed', () => {
    const { getByText } = render(<ConfirmPrompt
      handleCancel={() => {}}
      handleClick={() => {}}
      isLoading={false}
      message="Please do not delete me"
    />);
    expect(getByText('Please do not delete me')).toBeInTheDocument();
  });
});
