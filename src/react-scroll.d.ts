declare module 'react-scroll' {
  import * as React from 'react';

  interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}
  
  export function animateScroll(): void;
  export function scrollSpy(): void;
  export function scroller(): void;
  export function Events(): void;
}
