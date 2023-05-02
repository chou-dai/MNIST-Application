import React, { useState } from "react";
import { ArrowButton, Canvas, Chart, Header, Loading } from "../components";
import { mnistApi } from "../api/clientWrapper";
import { MNISTImageRequestBody } from "../api/api";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [inputData, setInputData] = useState("");
    const [data, setData] = useState<Array<number>>([]);

    const getMNIST = () => {
        setIsLoading(true);
        const requestBody: MNISTImageRequestBody = {
            imageBase64: inputData.split(",")[1]
        };
        mnistApi
            .getMNISTProbability(requestBody)
            .then((res) => setData(res.data.probability_list))
            .catch(() => alert("推論処理に失敗しました。"))
            .finally(() => setIsLoading(false));
    };

    return (
        <>
            <Header />
            <div className="sm:px-10 px-16 sm:py-36 py-10 flex justify-between max-w-[1000px] mx-auto sm:flex-row flex-col">
                <Canvas className="sm:w-[36%] w-full" setState={setInputData} />
                <ArrowButton className="sm:w-[18%] w-full" isDisable={!inputData} onClick={getMNIST} />
                <div className="sm:w-[36%] w-full">
                    <Chart dataList={data} />
                </div>
            </div>
            {isLoading && <Loading />}
        </>
    );
};

export default Home;
