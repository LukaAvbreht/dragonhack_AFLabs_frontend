import React, {useState} from "react";
import ReactApexChart from 'react-apexcharts'

import './Graphs.css'
import apiClient from "../../api/ApiClient";

function AccidentFrequencyGraph(props) {

    const state = {
            series: [{
                name: 'Število nesreč',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 41, 35, 51, 49, 62, 69, 41, 35, 51]
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
                    categories: ['2000-11-01', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
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
                            return (val / 1000000).toFixed(0)
                        }
                    }
                }
            },
        };

    async function fetchData(){
        try {
            const response = await apiClient.get("");
            state.series.data = response.data.yaxis; // TODO
            state.options.xaxis.categories = response.data.xaxis // TODO
        }
        catch (error) {
            console.log(error);
        }

    }

    return (
            <div id="chart" className='customtextc'>
                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
            </div>
        );
}

export default AccidentFrequencyGraph;