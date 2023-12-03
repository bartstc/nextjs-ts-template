'use client';

import { PropsWithChildren } from 'react';

import { useToggle } from '@/lib/hooks/use-toggle';

// eslint-disable-next-line @typescript-eslint/ban-types
export const Toggler = ({ children }: PropsWithChildren<{}>) => {
  const { bool, toggle } = useToggle(true);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {bool && children}
    </div>
  );
};
