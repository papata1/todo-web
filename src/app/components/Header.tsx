import React from 'react';

interface HeaderProps {
    title: string;
}

const Header =  (headerProps: HeaderProps) => {
    const { title } = headerProps
    return <>
        <div className="pt-10 text-3xl font-bold">
            { title }
        </div>
        <div className="pt-5">
            Your current timezone is: {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </div>
    </>
}

export default Header;
