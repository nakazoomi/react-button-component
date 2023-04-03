export default function Button({
  type,
  variant,
  id,
  onClick,
  children,
  size,
}) {

  const variantClass =
    variant === "success"
      ? "btn--success"
      : variant === "warning"
      ? "btn--warning"
      : variant === "primary"
      ? "btn--primary"
      : variant === "secondary"
      ? "btn--secondary"
      : "";

    const sizeClass = size === "small" ? "btn--small" : size === "large" ? "btn--large" : "";

  return (
    <>
      <button
        type={type ? type : 'button'}
        variant={variant}
        className={`btn ${variantClass} ${sizeClass}`} 
        id={id}
        onClick={onClick}
        size={size}
      >
        {children}
      </button>
    </>
  );
}


