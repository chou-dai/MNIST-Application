import React, { Dispatch, SetStateAction, useRef } from "react";
import { MutableRefObject } from "react";
import ReactSignatureCanvas from "react-signature-canvas";

type Props = {
    setState: Dispatch<SetStateAction<string>>;
};

const Canvas = (props: Props) => {
    const { setState } = props;
    const ref = useRef() as MutableRefObject<ReactSignatureCanvas>;

    const changeRef = () => {
        setState(ref.current.toDataURL());
    };

    const clearCanvas = () => {
        ref.current.clear();
        setState("");
    };

    return (
        <div className="relative">
            <ReactSignatureCanvas
                ref={ref}
                minWidth={8}
                maxWidth={8}
                onEnd={changeRef}
                penColor="black"
                backgroundColor="white"
                canvasProps={{ width: 500, height: 400, className: "sigCanvas" }}
            />
            <button onClick={clearCanvas}>リセット</button>
        </div>
    );
};

export default Canvas;
