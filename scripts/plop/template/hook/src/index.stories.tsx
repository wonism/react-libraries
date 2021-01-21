import * as React from 'react';
import { storiesOf } from '@storybook/react';

import useTemplate from '.';

const App = () => {
  useTemplate();

  return (
    <div>
      <b>
        useTemplate
      </b>
    </div>
  );
};

storiesOf('useTemplate', module).add('useTemplate', () => <App />);
