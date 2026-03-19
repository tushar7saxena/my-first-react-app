import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the hero heading', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /hi! i'm jackson/i })).toBeInTheDocument();
});
