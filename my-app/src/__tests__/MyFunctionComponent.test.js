import { render, screen, fireEvent } from '@testing-library/react';
import MyFunctionComponent from '../MyFunctionComponent';

it('STEP1: console.log the text "Component mounted/updated!"', () => {
    const logSpy = jest.spyOn(console, 'log');
    const { rerender } = render(<MyFunctionComponent foo="initial" />);
    expect(logSpy).toHaveBeenCalledWith('Component mounted/updated!');
    rerender(<MyFunctionComponent foo="updated" />);
    expect(logSpy).toHaveBeenCalledWith('Component mounted/updated!');
});

it('STEP2: renders You clicked 0 times', () => {
    render(<MyFunctionComponent />);
    const linkElement = screen.getByText("You clicked 0 times");
    expect(linkElement).toBeInTheDocument();
});

it('STEP3: should render a button with name "Click me"', () => {
    const { getByRole } = render(<MyFunctionComponent />);
    const buttonElement = getByRole('button', { name: 'Click me' });
    expect(buttonElement).toBeInTheDocument();
});

it('STEP4: should update count when button is clicked', () => {
    const { getByRole, getByText } = render(<MyFunctionComponent />);
    const buttonElement = getByRole('button', { name: 'Click me' });
    const countElement = getByText(/You clicked/);
    
    expect(countElement).toHaveTextContent('You clicked 0 times');
    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent('You clicked 1 times');
  });