import { renderHook } from '@testing-library/react-hooks';

import useTemplate from '.';

describe('`useTemplate`', () => {
  describe('check type of return value', () => {
    const { result } = renderHook(useTemplate);

    it('hook does not return anything.', () => {
      expect(typeof result.current).toBe('undefined');
    });
  });
});
