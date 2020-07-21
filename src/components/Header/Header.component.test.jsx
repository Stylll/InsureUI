import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header.component';
import store from '../../redux/store';

describe('Header Test', () => {
  it('should render properly', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render and close create item form', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    fireEvent.click(getByTestId('add-item'));
    expect(getByText('Add an Item')).toBeInTheDocument();
    fireEvent.click(getByTestId('modal-close'));
    expect(queryByText('Add an Item')).not.toBeInTheDocument();
  });
});
