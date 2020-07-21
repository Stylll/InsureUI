import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import Dropdown from './Dropdown.component';

describe('Dropdown Component', () => {
  const categories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Automobile' },
    { id: '3', name: 'Kitchen' },
  ];
  it('should render properly', () => {
    const { baseElement } = render(<Dropdown
            name="category"
            value="1"
            error=""
            onChange={() => {}}
            options={categories}
            optionsTitleProperty="name"
            optionsValueProperty="id"
        />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should call onChange method when dropdownlist is changed', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Dropdown
        name="category"
        value="1"
        error=""
        onChange={onChange}
        options={categories}
        optionsTitleProperty="name"
        optionsValueProperty="id"
        dataTestId="dropdownlist-test"
    />);

    fireEvent.change(getByTestId('dropdownlist-test'), { target: { value: '2' } });
    expect(onChange).toHaveBeenCalled();
  });
});
