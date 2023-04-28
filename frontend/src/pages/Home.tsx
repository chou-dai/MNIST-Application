import React, { FC } from "react";
import { Header } from "../components";
import SignatureCanvas from "react-signature-canvas";

const Home: FC = () => {
    return (
        <>
            <Header />
            <div className=" p-10">
                <header className="App-header">
                    <SignatureCanvas
                        minWidth={8}
                        maxWidth={8}
                        penColor="black"
                        throttle={30}
                        backgroundColor="white"
                        canvasProps={{ width: 500, height: 400, className: "sigCanvas" }}
                    />
                </header>
            </div>
        </>
    );
};

export default Home;
