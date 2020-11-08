import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import './Graphs.css'
import apiClient from "../../api/ApiClient";

function AccidentFrequencyGraph(props) {

    const [xAxis,setXAxis] =  useState([]);
    const [yAxis,setYAxis] =  useState([]);

    const state = {
            series: [{
                name: 'Število nesreč',
                data: yAxis
            }],
            options: {
                chart: {
                    foreColor: '#ffffff',
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                title: {
                    color: '#ffffff',
                    text: 'Število nesreč na mesec',
                    align: 'left'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                    title: {
                        text: 'Price'
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: xAxis,
                    tickAmount: 10,
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'MMM.yy')
                        }
                    }
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val).toFixed(0)
                        }
                    }
                }
            },
        };

    async function fetchData(){
        try {
            const response = await apiClient.get("/nesrece/mesecna_statistika");
            console.log("Parsing data")
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
                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
            </div>
        );
}

export default AccidentFrequencyGraph;