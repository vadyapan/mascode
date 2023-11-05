import { render, screen } from '@testing-library/react';
import Faq from './page';

describe('FAQ page test', () => {
  it('text in the page', () => {
    render(<Faq />);

    const myElem = screen.getByText('Часто задаваемые вопросы');

    expect(myElem).toBeInTheDocument();
  });
});
