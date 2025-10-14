import React from 'react';

const WheatIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75V12m0 0V2.25m0 9.75h-3.75m3.75 0h3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25L9 6m3-3.75l3.75 3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.75l3-3m0 0l3-3m-3 3l-3 3m3-3l3 3" />
    </svg>
);

export default WheatIcon;