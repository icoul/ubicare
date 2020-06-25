import React, { useMemo } from 'react';

const useCancellationToken = () => {
  return useMemo(() => {
    const token = {
      isCancelled: false,
      cancel: () => {}
    }

    token.cancel = () => token.isCancelled = true;

    return token
  }, [])
}

export default useCancellationToken;