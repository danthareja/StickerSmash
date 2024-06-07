import React from 'react';
import { render, screen } from '@testing-library/react-native';

import App from './App';

describe('<App />', () => {
  it('should render the App component', () => {
    render(<App />);
    expect(screen.getByText('Choose a photo')).toBeTruthy();
  });
});