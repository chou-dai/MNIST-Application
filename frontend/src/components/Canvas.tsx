import React, { Dispatch, SetStateAction, useRef } from "react";
import { MutableRefObject } from "react";
import ReactSignatureCanvas from "react-signature-canvas";

type Props = {
    className: string;
    setState: Dispatch<SetStateAction<string>>;
};

const Canvas = (props: Props) => {
    const { className, setState } = props;
    const ref = useRef() as MutableRefObject<ReactSignatureCanvas>;

    const changeRef = () => {
        setState(ref.current.toDataURL());
    };

    const clearCanvas = () => {
        ref.current.clear();
        setState("");
    };

    return (
        <div className={`relative ${className}`}>
            <ReactSignatureCanvas
                ref={ref}
                minWidth={8}
                maxWidth={8}
                onEnd={changeRef}
                penColor="white"
                backgroundColor="black"
                canvasProps={{ className: "w-full aspect-square border-solid border-[1px] border-gray-400" }}
            />
            <button className="absolute bottom-1 left-1 text-gray-300 text-sm hover:opacity-60" onClick={clearCanvas}>
                リセット
            </button>
            <p className="absolute top-full w-full pt-[2px] text-center text-zinc-700 text-sm">0~9の数字を入力</p>
        </div>
    );
};

export default Canvas;
