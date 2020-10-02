import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';


export default class InstitutionCourses extends React.Component {
  render() {
    const config = {
      labels: this.props.labels || [],
      datasets: [
        {
          label: 'City Wise Coaching',
          backgroundColor: [
            '#5cdbd3',
            '#40a9ff',
            '#ffec3d',
            '#bae637',
            '#d6e4ff'
          ],
          hoverBackgroundColor: [
          '#08979c',
          '#4B5000',
          '#fffb8f',
          '#73d13d',
          '#fadb14'
          ],
          data: this.props.data || []
        }
      ]
    }

    
    return (
      <div>
     

      <Pie
      data={config}
      options={{
        title:{
          display:true,
          text:'Institute by courses',
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



// <Doughnut
// data={state}
// options={{
//   title:{
//     display:true,
//     text:'City Wise Choaching',
//     fontSize:20
//   },
//   legend:{
//     display:true,
//     position:'right'
//   }
// }}
// />