import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import './Graphs.css'
import apiClient from "../../api/ApiClient";

function AlkoholRadialChart(props) {

    const [xAxis,setXAxis] =  useState(['Team A', 'Team B', 'Team C', 'Team D', 'Team E']);
    const [yAxis,setYAxis] =  useState([44, 55, 13, 43, 22]);

    const state = {

        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20, 30, 50, 60, 90, 20, 100],
        }],
        options: {
            chart: {
                height: 350,
                type: 'radar',
            },
            title: {
                text: 'Prometne nesreče zaradi alkohola skozi leto',
                style: {
                    color:  '#ffffff'
                },
                align: 'center'
            },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June', "July", "Avgust", "September", "October", "November", "December"]
            }
        },
        tooltip: {
            shared: false,
            color: "#ffffff",
            y: {
                formatter: function (val) {
                    return (val).toFixed(0)
                }
            }
        }


    };

    // async function fetchData(){
    //     try {
    //         const response = await apiClient.get("/nesrece/cause_pychart");
    //         const xDataArray = [];
    //         const yDataArray = [];
    //         const stat_Data = Object.entries(response.data)
    //         for(var i = 0; i < stat_Data.length; i++){
    //             xDataArray.push(stat_Data[i][0]);
    //             yDataArray.push(stat_Data[i][1]);
    //         }
    //         setXAxis(xDataArray);
    //         setYAxis(yDataArray);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //
    // }
    //
    // useEffect(() => fetchData(), [] );

    return (
        <div id="chart" className='customtextc'>
            <ReactApexChart options={state.options} series={state.series} type="radar" height={380} />
        </div>
    );
}

export default AlkoholRadialChart;