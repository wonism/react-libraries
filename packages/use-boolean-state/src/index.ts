import { useState, useCallback } from 'react';

const useBooleanState = (initialBool = false) => {
  const [bool, setBool] = useState<boolean>(initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggle = useCallback(() => {
    setBool((b: boolean) => !b);
  }, []);

  return [bool, setTrue, setFalse, toggle] as const;
};

export default useBooleanState;
