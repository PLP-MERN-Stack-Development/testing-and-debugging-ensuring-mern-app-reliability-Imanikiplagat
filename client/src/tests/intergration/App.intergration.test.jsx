import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';


test('renders App heading and button', () => {
render(<App />);
expect(screen.getByText(/App/i)).toBeInTheDocument();
expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});