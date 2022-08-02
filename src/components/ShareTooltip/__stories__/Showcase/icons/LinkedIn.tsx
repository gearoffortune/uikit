import React from 'react';
import {a11yHiddenSvgProps} from '../../../../utils/svg';

export function LinkedIn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="16"
            height="16"
            fill="none"
            {...a11yHiddenSvgProps}
            {...props}
        >
            <path
                d="M15.597 15.69c-.72 0-1.33-.24-1.83-.72a2.37 2.37 0 0 1-.72-1.74c0-.68.24-1.26.72-1.74.5-.48 1.11-.72 1.83-.72.36 0 .69.07.99.21.3.12.56.29.78.51.24.22.42.48.54.78.14.3.21.62.21.96 0 .34-.07.66-.21.96-.12.3-.3.56-.54.78-.22.22-.48.4-.78.54-.3.12-.63.18-.99.18zm2.07 1.74V33h-4.14V17.43h4.14zm11.423 3c-.84 0-1.57.17-2.19.51-.6.34-1.09.78-1.47 1.32V33h-4.14V17.43h3.9l.18 2.34h.06c.42-.76 1.04-1.39 1.86-1.89.82-.5 1.86-.75 3.12-.75.74 0 1.43.11 2.07.33.66.2 1.22.51 1.68.93.48.4.85.91 1.11 1.53.28.62.42 1.35.42 2.19V33h-4.17V22.56c0-.78-.22-1.33-.66-1.65-.42-.32-1.01-.48-1.77-.48z"
                fill="#0668c2"
            />
        </svg>
    );
}
