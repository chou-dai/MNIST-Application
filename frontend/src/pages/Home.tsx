import React, { useEffect, useState } from "react";
import { Canvas, Header } from "../components";

const Home = () => {
    const [InputData, setInputData] = useState("");

    useEffect(() => {
        console.log(InputData);
    }, [InputData]);

    return (
        <>
            <Header />
            <div className=" p-10">
                <Canvas setState={setInputData} />
            </div>
        </>
    );
};

export default Home;
