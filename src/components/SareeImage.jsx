import { useState } from 'react';

const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1100"%3E%3Crect width="800" height="1100" fill="%23eaf2fa"/%3E%3Cpath d="M0 780 800 300v800H0z" fill="%23d9e7f5"/%3E%3Cpath d="M80 0h640L80 1100H0V100z" fill="%23f8fbff" opacity=".7"/%3E%3C/svg%3E';

export default function SareeImage({ src, alt, position, className = '', loading = 'lazy', ...props }) {
  const [imageSrc, setImageSrc] = useState(src);
  return (
    <img
      className={`saree-image ${className}`}
      src={imageSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      style={{ objectPosition: position || 'center' }}
      onError={() => setImageSrc(fallbackImage)}
      {...props}
    />
  );
}
