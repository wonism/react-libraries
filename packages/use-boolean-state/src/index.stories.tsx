import * as React from 'react';
import { storiesOf } from '@storybook/react';

import useBooleanState from '.';

const App = () => {
  const [bool, setTrue, setFalse, toggle] = useBooleanState(false);

  return (
    <div>
      <span>
        {'state: '}
      </span>
      <b>
        {String(bool)}
      </b>
      <br />
      <button onClick={setTrue} type="button">
        set to true
      </button>
      <button onClick={setFalse} type="button">
        set to false
      </button>
      <button onClick={toggle} type="button">
        toggle
      </button>
    </div>
  );
};

storiesOf('useBooleanState', module).add('example', () => <App />);
