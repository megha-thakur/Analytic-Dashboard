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
              '#00474f',
              '#002329', 
              '#0050b3',
              '#9254de', 
              '#ffd6e7', 
              '#874d00', 
              '#7cb305', 
              '#e6fffb', 
              '#597ef7', 
              '#030852', 
              '#520339', 
              '#ffd8bf'
            ],
            hoverBackgroundColor: [
              '#595959'
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
