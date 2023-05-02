import React from "react";

type Props = {
    className: string;
    isDisable: boolean;
    onClick: () => void;
};

const ArrowButton = (props: Props) => {
    const { className, isDisable, onClick } = props;

    return (
        <div className={`relative ${className} w-full flex items-center justify-center flex-col arrow-shadow`}>
            <button
                onClick={onClick}
                disabled={isDisable}
                className={`${
                    isDisable && "opacity-60 cursor-not-allowed"
                } arrow-outer flex items-center justify-center w-full aspect-square bg-blue-600`}
            >
                <div
                    className={`${
                        !isDisable && "hover:bg-blue-600"
                    } arrow-inner flex items-center w-full aspect-square justify-center pr-5 bg-blue-500 transition-colors font-semibold text-white`}
                >
                    推 論
                </div>
            </button>
        </div>
    );
};

export default ArrowButton;
