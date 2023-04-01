import { render } from '@testing-library/react';
import MyFunctionComponent from '../MyFunctionComponent';

it('STEP1-2: should render the name passed in props', () => {
    const name = 'Alice';
    const { getByText } = render(<MyFunctionComponent name={name} />);
    const greeting = getByText(`Hello, ${name}!`);
    expect(greeting).toBeInTheDocument();
});