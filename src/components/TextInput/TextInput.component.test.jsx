import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import TextInput from './TextInput.component';

describe('TextInput Component', () => {
  it('should render properly', () => {
    const { baseElement } = render(<TextInput
        name="name"
        title="Item Name"
        value="Television"
        type="text"
        error=""
        placeholder="enter your item name"
        onChange={() => {}}
        />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should render properly with error message', () => {
    const { baseElement } = render(<TextInput
        name="name"
        title="Item Name"
        value="Television"
        type="text"
        error="name is required"
        placeholder="enter your item name"
        onChange={() => {}}
        />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should call onchange method when value is typed', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextInput
        name="name"
        title="Item Name"
        value="Television"
        type="text"
        error="name is required"
        placeholder="enter your item name"
        onChange={onChange}
        dataTestId="textinput"
        />);

    fireEvent.change(getByTestId('textinput'), { target: { value: '123' } });
    expect(onChange).toHaveBeenCalled();
  });
});
