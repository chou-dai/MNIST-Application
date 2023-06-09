import React from "react";

const Header = () => {
    const title = "MNIST App";

    return (
        <>
            <header className=" bg-zinc-900 fixed w-full h-20 flex items-center px-10 z-20 shadow-2xl">
                <h1 className="text-white text-xl font-bold">{title}</h1>
            </header>
            <div className="h-20" />
        </>
    );
};

export default Header;
