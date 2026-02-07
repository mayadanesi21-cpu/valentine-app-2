export function Button({ children, onClick, variant = 'solid', className = '' }) {
  const base = 'px-4 py-2 rounded-md font-semibold transition-colors duration-200'
  const styles =
    variant === 'outline'
      ? 'border border-pink-600 text-pink-600 hover:bg-pink-100'
      : 'bg-pink-500 text-white hover:bg-pink-600'
  return <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>
}
