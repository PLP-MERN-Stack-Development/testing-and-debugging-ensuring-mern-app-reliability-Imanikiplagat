import React from 'react';


export default function Button({ children, variant = 'primary', size = 'md', disabled = false, className = '', ...rest }) {
const variantClass = `btn-${variant}`;
const sizeClass = `btn-${size}`;
const disabledClass = disabled ? 'btn-disabled' : '';


return (
<button
role="button"
className={`btn ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
disabled={disabled}
{...rest}
>
{children}
</button>
);
}