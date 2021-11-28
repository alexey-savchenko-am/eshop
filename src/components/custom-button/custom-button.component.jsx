import React from 'react';

import './custom-button.styles.scss';

export const CustomButton = ({children, ...other}) => (
    <button className="custom-button" {...other}>
        {
            children
        }
    </button>
);

export const GoogleButton = ({children, ...other}) => (
    <button className="google-button custom-button" {...other}>
        {
            children
        }
    </button>
);

