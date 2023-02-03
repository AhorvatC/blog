import React, { useState } from 'react';
import '../index.css';
import { MyComponent } from './ClickedPost';
import { CyberPost } from './CyberPost';

const EmptyList = () => {
  return (
    <div className="emptyList-wrap">
      <MyComponent />
      <CyberPost></CyberPost>
    </div>
  );
};

export default EmptyList;
