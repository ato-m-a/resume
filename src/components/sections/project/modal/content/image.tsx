import type { ReactElement } from 'react';
import type { ImageProps } from '../types/content';

const Image = ({ src, className }: ImageProps): ReactElement => {
  return (
    <div className={`relative w-full h-full rounded-lg box-border border border-gray-300 overflow-hidden shadow-xl ${className ?? ''}`}>
      {src ? <img src={src} className="object-cover w-full h-full" alt="image" /> : null}
    </div>
  )
}

export default Image;