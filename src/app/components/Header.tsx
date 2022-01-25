import React from 'react';

interface HeaderProps {
    titleHeader: string;
}

const Header =  (headerProps: HeaderProps) => {
    const { titleHeader } = headerProps
    return <>
        <div className="pt-10 text-3xl font-bold">
            { titleHeader }
        </div>
        <div className="pt-5">
            Your current timezone is: {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </div>
    </>
}

export default Header;
