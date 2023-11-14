import type { ReactFC } from '@/types/component';

const TextHighlight: ReactFC = ({ children }) => {
  return <span className="p-1 bg-gray-700 rounded text-white">{children}</span>
}

export default TextHighlight;