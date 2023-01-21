import React from 'react';


export const Button = (props) => {
    const { children, backgroundColor, color, style } = props;

    let _style = style || {};

    // Override defaults
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <div>
            <button 
            style={_style} {...props}
            >
                {children}
            </button>
        </div>
    );
};

