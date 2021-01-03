import { renderHook, act } from '@testing-library/react-hooks';

import useBooleanState from '.';

describe('`useBooleanState`', () => {
  describe('check type of return value', () => {
    const { result } = renderHook(useBooleanState);

    it('type of result is array and its length is 4.', () => {
      expect(typeof result.current).toBe('object');
      expect(Array.isArray(result.current)).toBe(true);
      expect(result.current.length).toBe(4);
    });

    it('type of result[0] is `boolean`.', () => {
      expect(typeof result.current[0]).toBe('boolean');
    });

    it('type of result[1] is `function`.', () => {
      expect(typeof result.current[1]).toBe('function');
    });

    it('type of result[2] is `function`.', () => {
      expect(typeof result.current[2]).toBe('function');
    });

    it('type of result[3] is `function`.', () => {
      expect(typeof result.current[3]).toBe('function');
    });
  });

  describe('initial result[0]', () => {
    it('If no argument is passed, the return value is `false`.', () => {
      const { result } = renderHook(useBooleanState);

      expect(result.current[0]).toBe(false);
    });

    it('If the passed argument is `false`, the return value is `false`.', () => {
      const { result } = renderHook(() => useBooleanState(false));

      expect(result.current[0]).toBe(false);
    });

    it('If the passed argument is `true`, the return value is `true`.', () => {
      const { result } = renderHook(() => useBooleanState(true));

      expect(result.current[0]).toBe(true);
    });
  });

  describe('what functions return from hook will do.', () => {
    describe('after `result[1]` is invoked', () => {
      it('`result[0]` will be set to `true`.', () => {
        const { result } = renderHook(() => useBooleanState(false));

        act(() => {
          result.current[1]();
        });

        expect(result.current[0]).toBe(true);
      });
    });

    describe('after `result[2]` is invoked', () => {
      it('`result[0]` will be set to `false`.', () => {
        const { result } = renderHook(() => useBooleanState(true));

        act(() => {
          result.current[2]();
        });

        expect(result.current[0]).toBe(false);
      });
    });

    describe('after `result[3]` is invoked', () => {
      it('`result[0]` will be set to `false` from `true`', () => {
        const { result } = renderHook(() => useBooleanState(true));

        act(() => {
          result.current[3]();
        });

        expect(result.current[0]).toBe(false);
      });

      it('`result[0]` will be set to `true` from `false`', () => {
        const { result } = renderHook(() => useBooleanState(false));

        act(() => {
          result.current[3]();
        });

        expect(result.current[0]).toBe(true);
      });
    });
  });
});
