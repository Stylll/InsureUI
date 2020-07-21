import { render } from '@testing-library/react';
import React from 'react';

import Modal from './Modal.component';

describe('Modal Component', () => {
  it('should render properly', () => {
    const { baseElement } = render(<Modal
      customContentClass="class"
      handleModalClose={() => {}} />);

    expect(baseElement).toMatchSnapshot();
  });
});
