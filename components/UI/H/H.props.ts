import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  > {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}
