import { render, screen } from '@testing-library/react';
import Tasks from './page';

describe('Tasks page test', () => {
  it('text in the link', () => {
    render(<Tasks params={{ slug: 'one' }} />);

    const myElem = screen.getByText('Четное или нечетное');

    expect(myElem).toBeInTheDocument();
  });
});
