import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

it('calling userEvent.clear() should call onChange on an input', () => {
  const onChange = jest.fn();

  render(
    <label>
      example
      <input defaultValue="default value" onChange={onChange} />
    </label>,
  );

  expect(screen.getByLabelText('example')).toHaveValue('default value');
  userEvent.clear(screen.getByLabelText('example'));
  expect(screen.getByLabelText('example')).toHaveValue('');

  // This test fails
  expect(onChange).toHaveBeenCalled();
});
