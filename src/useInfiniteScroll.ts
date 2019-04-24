import { MutableRefObject, useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import throttle from 'lodash/fp/throttle';

const useInfiniteScroll = (
  containerRef: MutableRefObject<HTMLElement | null>,
  fetchItems: () => Promise<any>,
  triggerFetchPos = 300,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', throttleOnScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', throttleOnScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (isFetching) {
      fetchItems().finally(() => setIsFetching(false));
    }
  }, [isFetching]);

  const throttleOnScroll = useCallback(
    throttle(300, () => {
      const el = containerRef.current;

      if (!isFetching && el && el.scrollTop + el.clientHeight + triggerFetchPos >= el.scrollHeight) {
        setIsFetching(true);
      }
    }),
    [],
  );

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
