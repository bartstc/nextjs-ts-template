import { renderHook, act } from '@testing-library/react';

import { CounterStepProvider, useCounter } from './use-counter';

test('should use custom step when incrementing', () => {
  const { result } = renderHook(() => useCounter(), {
    wrapper: ({ children }) => <CounterStepProvider step={2}>{children}</CounterStepProvider>,
    initialProps: {}
  });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(4);
});
