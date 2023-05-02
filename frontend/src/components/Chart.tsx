import React, { useEffect, useState } from "react";
import { IgrPieChart } from "igniteui-react-charts";

// const initialData = [...Array(10).keys()].map((i) => ({
//     value: 10,
//     category: i,
//     summary: `${i}: 10%`
// }));

const initialData = [
    {
        value: 1,
        category: 1,
        summary: "割 合"
    }
];

type Props = {
    dataList: Array<number>;
};

const Chart = (props: Props) => {
    const { dataList } = props;
    const [chartData, setChartData] = useState(initialData);

    useEffect(() => {
        if (!dataList.length) return;
        const FormattedDataList = dataList.map((data, index) => ({
            value: data * 100,
            category: index,
            summary: `${index}: ${(data * 100).toFixed(1)}%`
        }));
        setChartData(FormattedDataList);
    }, [dataList]);

    return (
        <div className="w-full aspect-square relative chart-shadow">
            <IgrPieChart
                innerExtent={60}
                legendLabelMemberPath="category"
                labelMemberPath="summary"
                labelsPosition="BestFit"
                valueMemberPath="value"
                radiusFactor={1}
                startAngle={-90}
                dataSource={chartData}
                width="100%"
                height="100%"
                labelInnerColor="white"
                labelOuterColor="white"
            />
            <div className="absolute w-[56%] aspect-square bg-[rgba(0,0,0,0.1)] text-white rounded-full top-[22%] left-[22%] flex justify-center items-center z-[-1]">
                {dataList.length ? (
                    <p className="text-7xl font-bold font-mono">{dataList.indexOf(Math.max(...dataList))}</p>
                ) : (
                    <p className="text-2xl font-bold">結果</p>
                )}
            </div>
            <div className="absolute w-full h-full top-0 left-0" />
        </div>
    );
};

export default Chart;
