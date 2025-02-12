export function Card({ children, className = "" }) {
  return (
    <div className={`bg-black p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}
