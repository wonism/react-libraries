import { useEffect } from 'react';

const useTemplate = () => {
  useEffect(() => {
    console.log('useTemplate');
  }, []);
};

export default useTemplate;
