import { useState } from "react";

interface UseProfileImageResult {
  hasImageError: boolean;
  imageSrc: string | null;
  onImageError: () => void;
}

export function useProfileImage(initialSrc: string): UseProfileImageResult {
  const [hasImageError, setHasImageError] = useState(false);

  const handleImageError = () => {
    setHasImageError(true);
  };

  return {
    hasImageError,
    imageSrc: hasImageError ? null : initialSrc,
    onImageError: handleImageError
  };
}
