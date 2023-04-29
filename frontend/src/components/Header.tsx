import React, { FC } from "react";

const Header = () => {
    const title = "MNIST App";

    return (
        <>
            <header className="bg-zinc-950 fixed w-full h-20 flex items-center px-10 z-10">
                <h1 className="text-white text-xl font-bold">{title}</h1>
            </header>
            <div className="h-20" />
        </>
    );
};

export default Header;
