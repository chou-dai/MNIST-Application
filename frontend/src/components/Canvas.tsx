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
                penColor="black"
                backgroundColor="white"
                canvasProps={{ className: "w-full aspect-square" }}
            />
            <button onClick={clearCanvas}>リセット</button>
        </div>
    );
};

export default Canvas;
