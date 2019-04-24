import React, { FC } from 'react';

import './loadingSpinner.scss';

interface Props {
  loading?: boolean;
}

const LoadingSpinner: FC<Props> = (props) => {
  return props.loading ? (
    <div className="loading-spinner">
      <div className="pulse" />
      <div className="pulse pulse-2" />
      <div className="pulse pulse-3" />
    </div>
  ) : null;
};

LoadingSpinner.defaultProps = {
  loading: true,
}

export default LoadingSpinner;
