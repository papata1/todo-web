import React from 'react';

interface HeaderProps {
    titleHeader1: string;
}

const Header =  (headerProps: HeaderProps) => {
    const { titleHeader1 } = headerProps
    return <>
        <div className="pt-10 text-3xl font-bold">
            { titleHeader1 }
        </div>
        <div className="pt-5">
            Your current timezone is: {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </div>
    </>
}

export default Header;
