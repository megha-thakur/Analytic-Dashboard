// import React, { Component } from "react";
// import { Select } from 'antd';

// import { Line,  } from "react-chartjs-2";

// const { Option } = Select;

// ;

// const CHART_TYPES = Object.freeze({
//     DAY: 'day',
//     WEEK: 'week',
//     MONTH: 'month'
// })

// export default class StudentCount extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         value: CHART_TYPES.DAY,
//         dataSets: {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//             datasets: [
//                 {
//                 label: 'Student Count',
//                 fill: false,
//                 lineTension: 0.1,
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: 'rgba(75,192,192,1)',
//                 pointBackgroundColor: '#fff',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                 pointHoverBorderColor: 'rgba(220,220,220,1)',
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: [65, 59, 80, 81, 56, 55, 40]
//                 }
//             ]
//         }
//     };
//   }

  
//   render() {
//     return (
//       <div>
//         <h2>Student Count</h2>
//         <Select
//           style={{ width: 120, marginLeft: 200 }}
//           onChange={(item) => {
//             this.setState({ value: item})
//             const data = {
//                 datasets: [
//                     {
//                         label: 'My First dataset',
//                         fill: false,
//                         lineTension: 0.1,
//                         backgroundColor: 'rgba(75,192,192,0.4)',
//                         borderColor: 'rgba(75,192,192,1)',
//                         borderCapStyle: 'butt',
//                         borderDash: [],
//                         borderDashOffset: 0.0,
//                         borderJoinStyle: 'miter',
//                         pointBorderColor: 'rgba(75,192,192,1)',
//                         pointBackgroundColor: '#fff',
//                         pointBorderWidth: 1,
//                         pointHoverRadius: 5,
//                         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                         pointHoverBorderColor: 'rgba(220,220,220,1)',
//                         pointHoverBorderWidth: 2,
//                         pointRadius: 1,
//                         pointHitRadius: 10,
//                     }
//                 ]
//             }
//             if (item === CHART_TYPES.DAY) {
//                 data.label = ['4 P.M','5 P.M','6 P.M','7 P.M','8 P.M','9 P.M','10 P.M','11 P.M','12 A.M','1 A.M','2 A.M','3 A.M','4 A.M'];
//                 data.datasets[0]['data'] = [4,9,6,18,8,1,4,9,7,1,2,3,4];
//             }
//             if (item === CHART_TYPES.WEEK) {
//                 data.label = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']
//                 data.datasets[0]['data'] = [20,30,66,58,10,59,90];

//             }
//             if (item === CHART_TYPES.MONTH) {
//                 data.label = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
//                 data.datasets[0]['data'] = [119,140,250,260,460,578,180,590,470,200,300,500];

//             }

//             this.setState({ dataSets: data })
//           }}
//           value={this.state.value}
//         >
//           <Option value={CHART_TYPES.DAY}>Day</Option>
//           <Option value={CHART_TYPES.WEEK}>Week</Option>
//           <Option value={CHART_TYPES.MONTH}>Month</Option>
//         </Select>
//         <Line ref="chart" data={this.state.dataSets} 
//         options={
//             {
//                 title:{
//                     display:false
//                 },
//                 legend:{
//                     display:false
//                 }

//             }
//         }
//         />
//       </div>
//     );
//   }

//   componentDidMount() {
//     const { datasets } = this.refs.chart.chartInstance.data;
//     console.log(datasets[0].data);
//   }
// }




import React, { Component } from "react";
import { Select } from 'antd';

import { Line,  } from "react-chartjs-2";

const { Option } = Select;

;

const CHART_TYPES = Object.freeze({
    DAY: 'day',
    WEEK: 'week',
    MONTH: 'month'
})

export default class StudentCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: CHART_TYPES.DAY,
        dataSets: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                label: 'Student Count',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    };
  }

  
  render() {
    return (
      <div>
        <h2>Student Count</h2>
        <Select
          style={{ width: 120, marginLeft: 200 }}
          onChange={(item) => {
            this.setState({ value: item})
            const data = {
                datasets: [
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                    }
                ]
            }
            if (item === CHART_TYPES.DAY) {
                data.label = ['4 P.M','5 P.M','6 P.M','7 P.M','8 P.M','9 P.M','10 P.M','11 P.M','12 A.M','1 A.M','2 A.M','3 A.M','4 A.M'];
                data.datasets[0]['data'] = [4,9,6,18,8,1,4,9,7,1,2,3,4];
            }
            if (item === CHART_TYPES.WEEK) {
                data.label = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']
                data.datasets[0]['data'] = [20,30,66,58,10,59,90];

            }
            if (item === CHART_TYPES.MONTH) {
                data.label = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                data.datasets[0]['data'] = [119,140,250,260,460,578,180,590,470,200,300,500];

            }

            this.setState({ dataSets: data })
          }}
          value={this.state.value}
        >
          <Option value={CHART_TYPES.DAY}>Day</Option>
          <Option value={CHART_TYPES.WEEK}>Week</Option>
          <Option value={CHART_TYPES.MONTH}>Month</Option>
        </Select>
        <Line ref="chart" data={this.state.dataSets} 
        options={
            {
                title:{
                    display:false
                },
                legend:{
                    display:false
                }

            }
        }
        />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}