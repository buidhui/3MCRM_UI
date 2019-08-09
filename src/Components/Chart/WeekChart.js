import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import url from "../url";
import axios from "axios";
class WeekChart extends React.Component {
  state = {
    weeksale: [],
    dataLine: {
      labels: [],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }
      ]
    }
  };
  componentDidMount(){
    axios({
      method: "get",
      url: `${url}/weeksale`
    })
      .then(respone => {
        this.setState({
          weeksale: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  pushLabel = (weeksale, labelArr) => {
    if (weeksale.length !== 0 && labelArr.length === 0) {
      for (var i = 0; i < weeksale.length; i++) {
        var date = weeksale[i].date;
        labelArr.push(date);
      }
    }
    
  };
  pushData = (weeksale, dataArr) => {
    if (weeksale.length !== 0 && dataArr.length === 0) {
      for (var i = 0; i < weeksale.length; i++) {
        var date = weeksale[i].values;
        dataArr.push(date);
      }
    }
  };
  render() {
    const {weeksale} = this.state;
    this.pushLabel(weeksale,this.state.dataLine.labels);
    this.pushData(weeksale,this.state.dataLine.datasets[0].data);
    console.log(this.state)
    return (
      <MDBContainer>
        <Line
          height={190}
          data={this.state.dataLine}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default WeekChart;
