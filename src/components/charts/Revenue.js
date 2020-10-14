// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Row, Select, Col } from "antd";
// const { Option } = Select;



// const state = {
//     key:Date.now(),
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgba(255,99,132,0.2)",
//       borderColor: "rgba(255,99,132,1)",
//       borderWidth: 1,
//       hoverBackgroundColor: "rgba(255,99,132,0.4)",
//       hoverBorderColor: "rgba(255,99,132,1)",
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };



// function setDayData() {
//     this.state.datasets.backgroundColor="blue";
//     this.state.labels=['4 P.M','5 P.M','6 P.M','7 P.M','8 P.M','9 P.M','10 P.M','11 P.M','12 A.M','1 A.M','2 A.M','3 A.M','4 A.M'];
//     this.state.datasets[0].data=[4,5,6,7,8,9,10,11,12,1,2,3,4];

//     this.setState({ key: Date.now() });

// }
// function setWeekData()
// {
//     this.state.datasets.backgroundColor="green";
//     this.state.labels=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//     this.state.datasets[0].data=[40,50,16,18,80,29,10];

//     this.setState({ key: Date.now() });
// }
// function setMonthData()
// {
//      this.state.datasets.backgroundColor="purple";
//      this.state.labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
//      this.state.datasets[0].data=[100,120,200,256,560,178,280,190,370,100,300,200];

//     this.setState({ key: Date.now() });
// }


// function handleChange(value) {
//     console.log(`selected ${value}`);
//   }

// export default class RevenueChart extends React.Component {
//   render() {
//     return (
//       <div>
//       <Row>
//       <Col md={18}>
//         <h2>Revenue </h2>
//         </Col>
//         <Col md={6}>
//         <Select
//           defaultValue="Day"
//           style={{ width: 120, }}
//           onChange={handleChange}
//         >
//           <Option onClick={this.setDayData} value="Day">Day</Option>
//           <Option onClick={this.setWeekData} value="Week">Week</Option>
//           <Option onClick={this.setMonthData} value="Month">Month</Option>
//         </Select>
//         </Col>
//         </Row>
//         <Bar data={state} />
//       </div>
//     );
//   }
// }


import React from "react";
import { Bar } from "react-chartjs-2";
import { Row, Select, Col } from "antd";
const { Option } = Select;

const CHART_TYPES = Object.freeze({
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month'
})
export default class RevenueChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: CHART_TYPES.DAY,
      dataSets: {
        key: Date.now(),
        labels: this.props.data?.perDay?.map(values => values.hour),
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: this.props.data?.perDay?.map(values => values.count),
          },
        ],
      }
    }
  }

  render() {
    return (
      <div>
      <Row>
      <Col md={18}>
        <h2>Revenue </h2>
        </Col>
        <Col md={6}>
        <Select
          defaultValue="Day"
          style={{ width: 120, }}
          onChange={(item) => {
            this.setState({ value: item})
            
            const data = {
              key: Date.now(),
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  borderWidth: 1,
                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  hoverBorderColor: "rgba(255,99,132,1)",
                },
              ],
            }

            if (item === CHART_TYPES.DAY) {
                data.labels = this.props.data.perDay.map( values => values.hour)
                data.datasets[0]['data'] = this.props.data.perDay.map( values => values.count)
            }
            if (item === CHART_TYPES.WEEK) {
                data.labels = this.props.data.perWeek.map( values => values.week)
                data.datasets[0]['data'] = this.props.data.perWeek.map( values => values.count)

            }
            if (item === CHART_TYPES.MONTH) {
                data.labels = this.props.data.perMonth.map( values => values.month)
                data.datasets[0]['data'] = this.props.data.perMonth.map( values => values.count)
            }

            this.setState({ dataSets: data })
          }}
          value={this.state.value}
        >
          <Option  value={CHART_TYPES.DAY}>Day</Option>
          <Option value={CHART_TYPES.WEEK}>Week</Option>
          <Option value={CHART_TYPES.MONTH}>Month</Option>
        </Select>
        </Col>
        </Row>
        <Bar data={this.state.dataSets} />
      </div>
    );
  }
}