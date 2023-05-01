import React, { useState } from "react";
import { Canvas, Chart, Header } from "../components";
import { mnistApi } from "../api/clientWrapper";
import { MNISTImageRequestBody } from "../api/api";

const Home = () => {
    const [inputData, setInputData] = useState("");
    const [data, setData] = useState<Array<number>>([]);

    const getMNIST = () => {
        const requestBody: MNISTImageRequestBody = {
            imageBase64: inputData.split(",")[1]
        };
        mnistApi.getMNISTProbability(requestBody).then((res) => {
            setData(res.data.probability_list as Array<number>);
        });
    };

    return (
        <>
            <Header />
            <div className="p-10 flex justify-between max-w-[1000px] mx-auto sm:flex-row flex-col">
                <Canvas className="sm:w-[40%] w-full" setState={setInputData} />
                <div className="sm:w-[18%] w-full flex items-center justify-center">
                    <button onClick={getMNIST}>取得</button>
                </div>
                <div className="sm:w-[40%] w-full">
                    <Chart dataList={data} />
                </div>
            </div>
        </>
    );
};

export default Home;
