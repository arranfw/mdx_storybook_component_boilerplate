import React from 'react';

export const Component: React.FC<ComponentType> = () => {
  return (
    <div>
      <p>I am a component</p>
    </div>
  );
};

export interface ComponentType {}
