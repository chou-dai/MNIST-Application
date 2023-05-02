import React from "react";

type Props = {
    className: string;
    isDisable: boolean;
    onClick: () => void;
};

const ArrowButton = (props: Props) => {
    const { className, isDisable, onClick } = props;

    return (
        <div
            className={`relative ${className} w-full flex items-center justify-center flex-col arrow-shadow sm:p-0 p-4 pt-8`}
        >
            <button
                onClick={onClick}
                disabled={isDisable}
                className={`${
                    isDisable && "opacity-40 cursor-not-allowed"
                } arrow-outer flex items-center justify-center sm:w-full w-[40%] aspect-square bg-zinc-400 sm:rotate-0 rotate-90 sm:scale-100 scale-y-[2]`}
            >
                <div
                    className={`${
                        !isDisable && "hover:opacity-80"
                    } arrow-inner flex items-center w-full aspect-square justify-center pr-5 bg-zinc-800 transition-opacity`}
                >
                    <p className="text-white rotate-[-90deg] sm:rotate-0 sm:scale-100 scale-y-100 scale-50">推 論</p>
                </div>
            </button>
        </div>
    );
};

export default ArrowButton;
