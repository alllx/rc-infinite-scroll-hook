import React, { FC, ReactElement } from 'react';
import { mount, ReactWrapper } from 'enzyme';

const TestHook: FC<{ callback(): ReactElement | null }> = ({ callback }) => {
  return callback();
};

export const testHook = (callback: () => ReactElement | null): ReactWrapper => {
  return mount(<TestHook callback={callback} />);
};
