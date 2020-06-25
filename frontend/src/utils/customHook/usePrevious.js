import React, { useRef, useEffect } from 'react';

const usePrevious = (value, token) => {
  const ref = useRef();

  useEffect(() => {
    if (!token) {
      ref.current = value;
    }
  });

  return ref.current;
}

export default usePrevious;