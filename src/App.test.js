import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the scrollIntoView method
window.HTMLElement.prototype.scrollIntoView = jest.fn();

test('renders terminal prompt', () => {
  render(<App />);
  const promptElement = screen.getByText(/sinojiya@portfolio:~$/i);
  expect(promptElement).toBeInTheDocument();
});