import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
class Columnchart extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            data: {
                series: [{
                    name: "Total Orders",
                    type: 'bar',
                    data: [0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110]

                }],
                options: {
                    chart: {
                        height: 320,
                        type: "bar",
                        stacked: false,
                        toolbar: {
                            show: true,
                            tools: {
                                download: true,
                                selection: true,
                                zoom: false,
                                zoomin: true,
                                zoomout: true,
                                pan: true,
                                reset: true | '<img src="/static/icons/reset.png" width="20">'
                            },
                        },
                        dropShadow: {
                            enabled: true,
                            opacity: 0.1,
                        },
                    },
                    colors: ["#f99433", 'rgba(119, 119, 142, 0.05)'],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: "smooth",
                        width: [3, 3, 0],
                        dashArray: [0, 4],
                        lineCap: "round"
                    },
                    grid: {
                        padding: {
                            left: 0,
                            right: 0
                        },
                        strokeDashArray: 3
                    },
                    markers: {
                        size: 0,
                        hover: {
                            size: 0
                        }
                    },

                    xaxis: {
                        type: "day",
                        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        axisBorder: {
                            show: false,
                            color: 'rgba(119, 119, 142, 0.08)',
                        },
                        labels: {
                            style: {
                                color: '#8492a6',
                                fontSize: '12px',
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                color: '#8492a6',
                                fontSize: '12px',
                            },
                        },
                        axisBorder: {
                            show: false,
                            color: 'rgba(119, 119, 142, 0.08)',
                        },
                    },
                    fill: {
                        gradient: {
                            inverseColors: false,
                            shade: 'light',
                            type: "vertical",
                            opacityFrom: 0.85,
                            opacityTo: 0.55,
                            stops: [0, 100, 100, 100]
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    legend: {
                        position: "top",
                        show: true
                    }
                },
            }
        };
    }
    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart
                        options={this.state.data.options}
                        series={this.state.data.series}
                        type="line" height="auto" />
                </div>
            </div>
        );
    }
}

export default Columnchart;
