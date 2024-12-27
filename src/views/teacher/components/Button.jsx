import React from 'react';

export const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2';
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    outline: 'border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50 active:bg-blue-100',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};