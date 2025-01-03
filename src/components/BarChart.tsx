import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ChartData } from '../utils/dataProcessing';

interface BarChartProps {
    data: ChartData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);

            const option = {
                title: {
                    text: 'Average Yield of Crops (1950-2020)',
                },
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    data: data.map((item) => item.crop),
                    axisLabel: {
                        rotate: 45, 
                        interval: 0, 
                    },
                },
                yAxis: {
                    type: 'value',
                    name: 'Average Yield (Kg/Ha)',
                },
                series: [
                    {
                        type: 'bar',
                        data: data.map((item) => item.avgYield),
                    },
                ],
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '15%', 
                    containLabel: true,
                },
            };

            chartInstance.setOption(option);

            return () => {
                chartInstance.dispose();
            };
        }
    }, [data]);

    return <div ref={chartRef} style={{ width: '100%', height: '800px' }} />;
};

export default BarChart;