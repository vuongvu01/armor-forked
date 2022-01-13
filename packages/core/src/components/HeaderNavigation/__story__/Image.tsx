import React from 'react';

export const Image = () => {
    return (
        <div style={{ width: '42px', height: '42px' }}>
            <svg width="40px" height="42px" viewBox="0 0 40 42" version="1.1">
                <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g
                        id="Restaurant-Backoffice"
                        transform="translate(-222.000000, -11.000000)"
                    >
                        <image
                            id="streamline-icon-cookware-shelf@140x140-(1)"
                            x="218"
                            y="8"
                            width="48"
                            height="48"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};