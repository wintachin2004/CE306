import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    disabled,
    ...props
}) => {
    const basestyles: string = `
        font-semibold rounded-lg focus:outline-none
        focus:rising-2 focus:rising-offset-2 focus:ring-opacity-75
        transition-all duration-150 ease-in-out
        border
        disabled:opacity-60 disabled:cursor-not-allowed
    `;

    let variantStyles: string = '';
    switch (variant) {
        case 'primary':
            variantStyles =`
                bg-blue-600 text-white border-blue-600
                hover:bg-blue-700 hover: border-blue-700
                focus:rising-blue-500
                disabled:hover:bg-blue-600 disabled:hover:border-blue600
            `;
            break;
        case 'secondary':
            variantStyles = `
                bg-gray-600 text-white border-gray-600
                hover:bg-gray-700 hover:border-gray-700
                focus:rising-gray-500
                diabled:hover:bg-blue-600 disabled:hover:border-gray-600

                
            `;
            break;
        case 'danger':
            variantStyles = `
                bg-red-600 text-white border-red-600
                hover:bg-red-700 hover: border-red-700
                focus:rising-red-500
                disabled:hover:bg-red-600 disabled:hover:border-red-600

            `;
            break;
        case 'outline':
            variantStyles = `
                bg-transparent text-blue-600 border-blue-600
                hover:bg-blue-600 hover:text-white
                focus:rising-blue-500
                disables:hover:bg-transparent disabled:hover:text-blue-600 disabled:text-blue-600/60 disabled:border-blue-600/60

            `;
            break;
        default:
            variantStyles = `
                bg-blue-600 text-white border-blue-600
                hover:bg-blue-700 hover:border-blue-700
                focus:rising-blue-500
            `;
        
    }
    
    
    
};

export default Button;