[![License](https://img.shields.io/npm/l/rc-infinite-scroll-hook.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![Version](https://img.shields.io/npm/v/rc-infinite-scroll-hook.svg?style=flat-square)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/rc-infinite-scroll-hook.svg?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/rc-infinite-scroll-hook.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/alllx/rc-infinite-scroll-hook.svg?style=flat-square)](https://travis-ci.com/alllx/rc-infinite-scroll-hook)
[![Coverage Status](https://img.shields.io/coveralls/alllx/rc-infinite-scroll-hook.svg?style=flat-square)](https://coveralls.io/github/alllx/rc-infinite-scroll-hook?branch=master)

<!-- ![Version](https://img.shields.io/npm/dt/react-flexible-progressbar.svg?style=flat-square) -->

# rc-infinite-scroll-hook

Infinite scroll react hook.

## Demo

For example of the rc-infinite-scroll-hook, go to https://alllx.github.com/rc-infinite-scroll-hook.

OR

To run that demo on your own computer:

- Clone this repository
- `npm i`
- `npm start`
- Visit http://localhost:1234/

## Getting Started

### Install

```
  npm i rc-infinite-scroll-hook -S
```

### Import in component

```
  import useInfiniteScroll from 'rc-infinite-scroll-hook'
```

### Supported properties

```
  containerRef: MutableRefObject<HTMLElement | null>;
  fetchItems: () => Promise<any>;
  triggerFetchPos?: number; // default: 300, height in pixels to the end of the scroll, to start fetching items earlier.
```
