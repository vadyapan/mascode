import { render, screen } from '@testing-library/react';
import Part from '@/app/tasks/part/page';

describe('Part page test', () => {
  it('text in the link', () => {
    render(<Part />);

    const myElem = screen.getByText('1. Примитивы и циклы');

    expect(myElem).toBeInTheDocument();
  });
});
