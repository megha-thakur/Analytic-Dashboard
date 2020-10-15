
import React, { Component } from "react";
import { Select } from 'antd';

import { Card, Col, Row } from 'antd';

import { Line,  } from "react-chartjs-2";


const { Option } = Select;

const CHART_TYPES = Object.freeze({
    DAY: 'day',
    WEEK: 'week',
    MONTH: 'month'
})

export default class Organisationcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: CHART_TYPES.DAY,
        dataSets: {
            labels: this.props?.data?.perDay?.map( values => values.hour),
            datasets: [
                {
                label: 'Organisation Counts',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#08979c',
                borderColor: '#08979c',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#08979c',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#08979c',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.data?.perDay?.map( values => values.count), 
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
      <h2> Total Tutor Register</h2>
      </Col>
      <Col md={6} sm={8}>
              <Select
          style={{ width: 120, }}
          onChange={(item) => {
            this.setState({ value: item})
            const data = {
                datasets: [
                    {
                        label: 'No of Tutors',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: '#08979c',
                        borderColor: '#08979c',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#08979c',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#08979c',
                        pointHoverBorderColor: '#08979c',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                    }
                ]
            }
            if (item === CHART_TYPES.DAY) {
                data.labels = this.props.data?.perDay?.map( values => values.hour)
                data.datasets[0]['data'] = this.props.data?.perDay?.map( values => values.count)
            }
            if (item === CHART_TYPES.WEEK) {
                data.labels = this.props.data?.perWeek?.map( values => values.week)
                data.datasets[0]['data'] = this.props.data?.perWeek?.map( values => values.count)

            }
            if (item === CHART_TYPES.MONTH) {
                data.labels = this.props.data?.perMonth?.map( values => values.month)
                data.datasets[0]['data'] = this.props.data?.perMonth?.map( values => values.count)
            }
            debugger
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
