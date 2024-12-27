import React from "react";

function Badge({ className, variant, ...props }) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
    success: "bg-green-100 text-green-800 hover:bg-green-200",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className || ''}`;

  return (
    <div className={combinedClassName} {...props} />
  );
}

export default Badge;