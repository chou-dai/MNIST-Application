import React, { useEffect, useState } from "react";
import { Canvas, Chart, Header } from "../components";
import ForwardIcon from "@mui/icons-material/Forward";
import { mnistApi } from "../api/clientWrapper";

const Home = () => {
    const [InputData, setInputData] = useState("");

    useEffect(() => {
        console.log(InputData);
    }, [InputData]);

    const getMNIST = () => {
        mnistApi.getMNISTProbability()
            .then(res => {
                console.log(res.data.probability_list);
            });
    };

    return (
        <>
            <Header />
            <div className="p-10 flex justify-between max-w-[1000px] mx-auto sm:flex-row flex-col">
                <Canvas className="sm:w-[40%] w-full" setState={setInputData} />
                <div className="sm:w-[18%] w-full flex items-center">
                    <ForwardIcon />
                </div>
                <div className="sm:w-[40%] w-full">
                    <Chart />
                    <button onClick={getMNIST}>取得</button>
                </div>
            </div>
        </>
    );
};

export default Home;
