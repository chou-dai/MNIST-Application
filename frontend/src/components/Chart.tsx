import React, { useEffect, useState } from "react";
import { IgrPieChart } from "igniteui-react-charts";

// const initialData = [...Array(10).keys()].map(i => ({
//     value: 10,
//     category: i,
//     summary: `${i}: 10%`
// }));

const initialData = [
    {
        value: 10,
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
        <div className="h-96 w-96 relative">
            <IgrPieChart
                innerExtent="50"
                legendLabelMemberPath="category"
                labelMemberPath="summary"
                labelsPosition="BestFit"
                valueMemberPath="value"
                radiusFactor="0.7"
                dataSource={chartData}
            />
            <div className="absolute w-full h-full top-0 left-0" />
        </div>
    );
};

export default Chart;