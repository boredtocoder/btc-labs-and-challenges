import { render, screen, fireEvent } from '@testing-library/react';
import MyJSXPlayground from '../MyJSXPlayground';

it('STEP1: should render myElement with correct value', () => {
    const { getByText } = render(<MyJSXPlayground />);
    
    const myElement = getByText(/There is only going to be 21 millions of Bitcoins/);
    
    expect(myElement).toBeInTheDocument();
});

it('STEP2: should render myElement2 with correct value', () => {    
    const { getByRole } = render(<MyJSXPlayground />);
    
    const list = getByRole('list');
    
    
    const apples = screen.getAllByRole('listitem')[0].textContent;
    const bananas = screen.getAllByRole('listitem')[1].textContent;
    const cherries = screen.getAllByRole('listitem')[2].textContent;
    
    expect(list).toBeInTheDocument();
    expect(apples).toBe('Apples');
    expect(bananas).toBe('Bananas');
    expect(cherries).toBe('Cherries');
});

it('STEP3: should render myElement3 with correct value', () => {
    const { getByText } = render(<MyJSXPlayground />);
    
    const myElement = getByText(/Hello, John/);
    
    expect(myElement).toBeInTheDocument();
});

it('STEP4: should render myElement4 with correct value', () => {
    const { getByText } = render(<MyJSXPlayground />);
    
    const myElement = getByText(/Cat/);
    
    expect(myElement).toBeInTheDocument();
});