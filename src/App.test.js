import { render, screen } from '@testing-library/react';
import App from './App';

describe('PortfolioTerminal', () => {
  test('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Type 'help'/i)).toBeInTheDocument();
  });

  test('renders terminal interface', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-footer')).toBeInTheDocument();
  });
});