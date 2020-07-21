import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { CreateItem } from '../../components/CreateItem/CreateItem.component';

describe('CreateItem Test', () => {
  it('should render properly', () => {
    const { baseElement } = render(<CreateItem
      createItem={() => {}}
      closeModal={() => {}}
      isLoading={false}
      createItemSuccess={false}
      errorMessage=""
    />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should validate the input', () => {
    const { baseElement, getByTestId, getByText } = render(<CreateItem
      createItem={() => {}}
      closeModal={() => {}}
      isLoading={false}
      createItemSuccess={false}
      errorMessage=""
    />);
    fireEvent.click(getByTestId('createitem-create'));
    expect(getByText('name cannot be empty')).toBeInTheDocument();
    expect(getByText('value cannot be empty')).toBeInTheDocument();
    expect(getByText('category must be either Electronics, Clothing, or Kitchen')).toBeInTheDocument();
  });

  it('should submit form, call createItem and display error', () => {
    const createItem = jest.fn();
    const {
      baseElement, getByTestId, getByText, rerender,
    } = render(<CreateItem
      createItem={createItem}
      closeModal={() => {}}
      isLoading={false}
      createItemSuccess={false}
      errorMessage=""
    />);

    fireEvent.change(getByTestId('createitem-name'),
      { target: { value: 'Playstation', name: 'Name' } });
    fireEvent.change(getByTestId('createitem-value'),
      { target: { value: '245', name: 'Value' } });
    fireEvent.change(getByTestId('createitem-category'),
      { target: { value: '1', name: 'CategoryId' } });
    fireEvent.click(getByTestId('createitem-create'));
    expect(createItem).toHaveBeenCalled();

    rerender(<CreateItem
      createItem={createItem}
      closeModal={() => {}}
      isLoading={false}
      createItemSuccess={false}
      errorMessage="An error occurred"
    />);
    expect(getByText('An error occurred')).toBeInTheDocument();
  });
});
