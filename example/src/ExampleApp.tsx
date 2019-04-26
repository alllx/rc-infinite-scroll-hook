import React, { FC, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import useInfiniteScroll from '../../src/useInfiniteScroll';

import './exampleApp.scss';
import LoadingSpinner from './LoadingSpinner';

const App: FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setItems(createItems());
  }, []);

  const [isLoadingMore] = useInfiniteScroll(containerRef, getItems);

  const noMoreItems = () => items.length > 1000;

  function createItems(length = 20, count?: number): string[] {
    return Array.from({ length }, (_, i) => `Item #${count ? i + count : i}`);
  }

  function loadMoreItems() {
    setItems([...items, ...createItems(20, items.length)]);
  }

  function getItems(): Promise<void> {
    return !noMoreItems()
      ? new Promise((res) => {
          setTimeout(() => res(loadMoreItems()), 2000);
        })
      : Promise.resolve();
  }

  return (
    <div className="page-container">
      <h1>Infinite scroll example:</h1>
      <div className="scroll-container" ref={containerRef}>
        {items.map((item, i) => (
          <div className="item" key={i}>
            {item}
          </div>
        ))}
        {isLoadingMore && !noMoreItems() && (
          <div className="spinner-container">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('appRoot'));
