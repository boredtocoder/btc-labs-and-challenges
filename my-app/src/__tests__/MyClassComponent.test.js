import { render, screen, fireEvent } from '@testing-library/react';
import MyClassComponent from '../MyClassComponent';

it('STEP1: console.log the text "Component mounted!"', () => {
    const logSpy = jest.spyOn(console, 'log');
    render(<MyClassComponent />);
    expect(logSpy).toHaveBeenCalledWith('Component mounted!');
});

it('STEP2: console.log the text "Component updated!"', () => {
    const logSpy = jest.spyOn(console, 'log');
    const { rerender } = render(<MyClassComponent foo="initial" />);
    rerender(<MyClassComponent foo="updated" />);
    expect(logSpy).toHaveBeenCalledWith('Component updated!');
});

it('STEP3: console.log the text "Component will unmount!"', () => {
    const logSpy = jest.spyOn(console, 'log');
    const { unmount } = render(<MyClassComponent/>);
    unmount(<MyClassComponent />);
    expect(logSpy).toHaveBeenCalledWith('Component will unmount!');
});


it('STEP4: renders You clicked 0 times', () => {
    render(<MyClassComponent />);
    const linkElement = screen.getByText("You clicked 0 times");
    expect(linkElement).toBeInTheDocument();
});

it('STEP5: should render a button with name "Click me"', () => {
    const { getByRole } = render(<MyClassComponent />);
    const buttonElement = getByRole('button', { name: 'Click me' });
    expect(buttonElement).toBeInTheDocument();
});

it('STEP6: should update count when button is clicked', () => {
    const { getByRole, getByText } = render(<MyClassComponent />);
    const buttonElement = getByRole('button', { name: 'Click me' });
    const countElement = getByText(/You clicked/);
    
    expect(countElement).toHaveTextContent('You clicked 0 times');
    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent('You clicked 1 times');
  });