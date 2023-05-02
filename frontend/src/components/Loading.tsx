import React from "react";

const Loading = () => {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
            <div className="animate-spin h-10 w-10 border-4 border-solid border-white rounded-full border-t-transparent"></div>
        </div>
    );
};

export default Loading;
