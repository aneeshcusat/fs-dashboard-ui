import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChartMin = ({ xAxisData , yAxisData, nameLabel}) => {
    const options = {
        chart: {
          height: 300,
          type: "bar",
          stacked: false,
          toolbar: {
            show: true,
            tools: {
              download: false, 
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
            },
          },
          dropShadow: {
            enabled: true,
            opacity: 0.1,
          },
        },
        colors: ["#9070ff", 'rgba(119, 119, 142, 0.05)'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
          width: [3, 3, 0],
          dashArray: [0, 4],
          lineCap: "round",
        },
        
        markers: {
          size: 0,
          hover: {
            size: 0,
          },
        },
        fill: {
          gradient: {
            inverseColors: false,
            shade: 'light', 
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        legend: {
          position: "top",
          show: true,
        },
        series: [
          {
            name: nameLabel,
            data: yAxisData,
          },
        ],
        xaxis: {
          categories: xAxisData,
        },
      };

      const divStyle = {
        height:'300px'
      };
  return (
    <div style={divStyle}>
      <ReactApexChart options={options} series={options.series} type="line" height={300} />
    </div>
  );
};

export default ColumnChartMin;
