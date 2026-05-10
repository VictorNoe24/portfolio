import { useState } from "react";

interface UseMediaFallbackResult {
  hasError: boolean;
  onError: () => void;
}

export function useMediaFallback(): UseMediaFallbackResult {
  const [hasError, setHasError] = useState(false);

  const onError = () => {
    setHasError(true);
  };

  return { hasError, onError };
}
