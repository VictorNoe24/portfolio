import { useState } from "react";

export function useProfileImage(initialSrc) {
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
