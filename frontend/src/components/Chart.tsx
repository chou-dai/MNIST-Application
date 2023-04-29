import React from "react";
import { IgrPieChart } from "igniteui-react-charts";


const data = [
    {
        value: 10,
        category: "0",
        summary: "0: 10%"
    },
    {
        value: 10,
        category: "1",
        summary: "1: 10%"
    },
    {
        value: 10,
        category: "2",
        summary: "2: 10%"
    },
    {
        value: 10,
        category: "3",
        summary: "3: 10%"
    },
    {
        value: 10,
        category: "4",
        summary: "4: 10%"
    },
    {
        value: 10,
        category: "5",
        summary: "5: 10%"
    },
    {
        value: 10,
        category: "6",
        summary: "6: 10%"
    },
    {
        value: 10,
        category: "7",
        summary: "7: 10%"
    },
    {
        value: 10,
        category: "8",
        summary: "8: 10%"
    },
    {
        value: 10,
        category: "9",
        summary: "9: 10%"
    }
];

const Chart = () => {

    return (
        <div className="h-96 w-96">
        <IgrPieChart
            
            innerExtent="50"
            // ref={this.chartRef}
            legendLabelMemberPath="category"
            labelMemberPath="summary"
            labelsPosition="BestFit"
            valueMemberPath="value"
            radiusFactor="0.7"
            dataSource={data}
            // legend={this.legend}
        />
        </div>
    );
};

export default Chart;
