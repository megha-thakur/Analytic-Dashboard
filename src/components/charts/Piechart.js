import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';


export default class PieChart extends React.Component {
  render() {
    const config = {
        labels: this.props.labels || [],
        datasets: [
          {
            label: 'City Wise Coaching',
            backgroundColor: [
              '#36cfc9',
              '#40a9ff',
              '#bae7ff',
              '#d9d9d9',
              '#00474f'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: this.props.data || []
          }
        ]
      }
    return (
      <div>
        <Doughnut
          data={config}
          options={{
            title:{
              display:true,
              text:'City Wise Choaching',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
