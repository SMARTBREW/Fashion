"use client";

import Image from "next/image";
import { useState } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function PlaceholderImage({
  src,
  alt,
  fill = true,
  className = "",
  priority = false,
  sizes = "100vw",
  quality = 90,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`image-placeholder ${fill ? "absolute inset-0" : ""} ${className}`}
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      quality={quality}
      sizes={sizes}
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}
