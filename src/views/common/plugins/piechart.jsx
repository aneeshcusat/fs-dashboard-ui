import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({activityTypeValues , activityTypeLabels}) => {
    const options = {
      chart: {
        height: 300,
        type: 'pie',
      },
      series: activityTypeValues,
      labels: activityTypeLabels,
    };
    const divStyle = {
      height:'300px'
    };
  return (
    <div style={divStyle}>
      <ReactApexChart options={options} series={options.series} type="pie" height={300} />
    </div>
  );
};

export default PieChart;
