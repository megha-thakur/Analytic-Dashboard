
import React, { Component } from "react";
import { Select, Card, Col, Row } from 'antd';

import { Line,  } from "react-chartjs-2";

const { Option } = Select;
const CHART_TYPES = Object.freeze({
    DAY: 'day',
    WEEK: 'week',
    MONTH: 'month'
})

export default class Quizateempt extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: CHART_TYPES.DAY,
        dataSets: {
            labels: this.props?.data?.perDay?.map( values => values.hour),
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
                data: this.props.data?.perDay?.map( values => values.count)
                }
            ]
        }
    };
  }

  
  render() {
    return (
      <div>
      <Row>
      <Col md={18} sm={14}>

        <h2>No of quiz Attempt by student</h2>
        </Col>
        <Col md={6} sm={8}>

        <Select
          style={{ width: 120, }}
          onChange={(item) => {
            this.setState({ value: item})
            const data = {
                datasets: [
                    {
                        label: 'No of quiz Attempt by student',
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
                data.label = this.props.data?.perDay?.map( values => values.hour);
                data.datasets[0]['data'] = this.props.data?.perDay?.map( values => values.count);
            }
            if (item === CHART_TYPES.WEEK) {
                data.label = this.props.data?.perWeek?.map( values => values.week);
                data.datasets[0]['data'] = this.props.data?.perWeek?.map( values => values.count);
            }
            if (item === CHART_TYPES.MONTH) {
                data.label =  this.props.data?.perMonth?.map( values => values.month);
                data.datasets[0]['data'] =this.props.data?.perMonth?.map( values => values.count);
            }

            this.setState({ dataSets: data })
          }}
          value={this.state.value}
        >
          <Option value={CHART_TYPES.DAY}>Day</Option>
          <Option value={CHART_TYPES.WEEK}>Week</Option>
          <Option value={CHART_TYPES.MONTH}>Month</Option>
        
        </Select>
        </Col>
        </Row>
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