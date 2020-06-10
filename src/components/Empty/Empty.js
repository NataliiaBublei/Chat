import React from 'react';

const Empty = ({ className, description }) => {
  return (
    <div className={className}>
      <h2>{description}</h2>
    </div>
  );
};

export default Empty;
