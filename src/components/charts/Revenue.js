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