import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import './Graphs.css'
import apiClient from "../../api/ApiClient";

function CausePieChart(props) {

    const [xAxis,setXAxis] =  useState(['Team A', 'Team B', 'Team C', 'Team D', 'Team E']);
    const [yAxis,setYAxis] =  useState([44, 55, 13, 43, 22]);

    const state = {

        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            title: {
                style: {
                    color:  '#ffffff'
                },
                text: 'Delež nesreč glede na vzrok',
                align: 'center'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'right',
                        labels: {
                            useSeriesColors: true
                        },
                        markers: {
                            strokeColor: '#fff',
                            fillColors: '#fff',
                        },
                    }
                }
            }],
            tooltip: {
                shared: false,
                color: "#ffffff",
                y: {
                    formatter: function (val) {
                        return (val).toFixed(0)
                    }
                }
            }
        },
    }

    async function fetchData(){
        try {
            const response = await apiClient.get("/nesrece/cause_pychart");
            const xDataArray = [];
            const yDataArray = [];
            const stat_Data = Object.entries(response.data)
            for(var i = 0; i < stat_Data.length; i++){
                xDataArray.push(stat_Data[i][0]);
                yDataArray.push(stat_Data[i][1]);
            }
            setXAxis(xDataArray);
            setYAxis(yDataArray);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => fetchData(), [] );

    return (
        <div id="chart" className='customtextc'>
            <ReactApexChart options={state.options} series={state.series} type="pie" height={300} />
        </div>
    );
}

export default CausePieChart;