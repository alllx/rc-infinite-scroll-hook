import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import useInfiniteScroll from '../src/useInfiniteScroll';

import { testHook } from './testUtils';

let isFetching: boolean;
const containerRef: any = {
  current: {
    clientHeight: 10,
    scrollHeight: 30,
    scrollTop: 0,
    addEventListener(ev: string, fn: () => void) {
      // @ts-ignore
      this[ev] = fn;
    },
    removeEventListener(ev: string) {
      // @ts-ignore
      delete this[ev];
    },
  },
};
let fetchFnMock: () => Promise<number[]>;

const getItems = (): Promise<number[]> => {
  return new Promise((res) => {
    setTimeout(() => res([1, 2, 3]), 2000);
  });
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

beforeEach(() => {
  testHook(() => {
    fetchFnMock = jest.fn(getItems);
    [isFetching] = useInfiniteScroll(containerRef, fetchFnMock, 10);
    return null;
  });
});

describe('useInfiniteScroll', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  test('should initialize', async () => {
    expect(isFetching).toBeFalsy();
    act(() => {
      containerRef.current.scrollTop = 20;
      containerRef.current.scroll();
    });
    expect(fetchFnMock).toHaveBeenCalled();
    expect(isFetching).toBeTruthy();
    await sleep(2000);
    expect(isFetching).toBeFalsy();
  });
});
