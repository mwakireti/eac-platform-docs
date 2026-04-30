export function Card({ children, className = "" }) {
  return (
    <div className={`bg-slate-50 rounded-xl shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}