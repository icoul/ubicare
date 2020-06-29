import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { convertSubTagString } from 'utils/utils';
import './LineGraph.css';

const LineGraph = (props) => {
  const config = {
    options: {
      chart: {
        id: props.graphId,
        type: 'line',
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: false,
          },
        },
        animations: {
          enabled: false
        }
      },
      colors: ['#50bb5b'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 2,
      },
      tooltip: {
        theme: 'dark',
        y: {
          title: {
            formatter: () => { return convertSubTagString(props.graphId.toUpperCase()) }
          }
        }
      },
      grid: {
        position: 'front',
        borderColor: '#90A4AE30',
      },
      yaxis: {
        tickAmount: 3,
        labels: {
          minWidth: 10,
          offsetY: 3,
          style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
          }
        }
      },
      xaxis: {
        categories: props.xAxisCategories,
        labels: {
          show: true,
          hideOverlappingLabels: true,
          style: {
            colors: props.xAxisCategories.map((x) => { return '#fff'; }),
            fontSize: '10px'
          },
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    series: [{
      name: "series-" + props.graphId,
      data: props.data
    }],
    
  }

  return (
    <>
      <div className="gasDetailGraph-title">{ props.graphId }</div>
      <div className="gasDetailGraph-lineGraph">
        <Chart type="line" width="1650" height="300" options={config.options} series={config.series}/>
      </div>
    </>
  )
}

export default LineGraph;