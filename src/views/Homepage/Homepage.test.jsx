import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Homepage from './Homepage';
import store from '../../redux/store';

describe('Homepage Test', () => {
  it('should render properly', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
