import { render, screen } from '@testing-library/react';
import Problem from './page';

describe('Problem page test', () => {
  it('text in the page', () => {
    render(<Problem params={{ problem: 'even-or-odd' }} />);

    const myElem = screen.getByText('Четное или нечетное');

    expect(myElem).toBeInTheDocument();
  });
});
