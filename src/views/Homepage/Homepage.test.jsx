import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Homepage from './Homepage';
import store from '../../redux/store';
import {
  getCategoryItemsSuccess,
} from '../../redux/actionCreators/categoryActions/categoryActions';
import {
  getCategoryItemsApiResponse,
} from '../../redux/testhelpers';

describe('Homepage Test', () => {
  it('should render properly', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render fetching categories records', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
    );
    expect(getByText('fetching category items records, hang tight...')).toBeInTheDocument();
    store.dispatch(getCategoryItemsSuccess({}));
    expect(getByText('No Records Found.')).toBeInTheDocument();
  });

  it('should render list of accounts', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
    );
    store.dispatch(getCategoryItemsSuccess(getCategoryItemsApiResponse.data.data));
    expect(getByText('Electronics')).toBeInTheDocument();
    expect(getByText('Playstation')).toBeInTheDocument();
  });

  it('should render and close create item form', () => {
    const { getByTestId, getByText, queryByText } = render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
    );
    fireEvent.click(getByTestId('add-item'));
    expect(getByText('Add an Item')).toBeInTheDocument();
    fireEvent.click(getByTestId('modal-close'));
    expect(queryByText('Add an Item')).not.toBeInTheDocument();
  });

  it('should render and close delete item confirm prompt', () => {
    const { getByTestId, getByText, queryByText } = render(
        <Provider store={store}>
            <Homepage />
        </Provider>,
    );
    store.dispatch(getCategoryItemsSuccess(getCategoryItemsApiResponse.data.data));
    fireEvent.click(getByTestId('homepage-delete-1'));
    expect(getByText('Are sure you want to delete this item?')).toBeInTheDocument();
    fireEvent.click(getByTestId('modal-close'));
    expect(queryByText('Are sure you want to delete this item?')).not.toBeInTheDocument();
  });
});
