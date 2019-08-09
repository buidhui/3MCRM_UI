import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import url from "../url";
import axios from "axios";

class MonthChart extends React.Component {
  state = {
    monthsale: [],
    dataLine: {
      labels: [],
      datasets: [
        {
          label: "Doanh thu tháng",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(26, 157, 240, 0.1)",
          borderColor: "rgb(26, 157, 240)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(26, 157, 240)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }
      ]
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/monthsale`
    })
      .then(respone => {
        this.setState({
          monthsale: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  pushLabel = (monthsale, labelArr) => {
    if (monthsale.length !== 0) {
      for (var i = 0; i < monthsale.length; i++) {
        var date = monthsale[i].date;
        labelArr.push(date);
      }
    }
  };
  pushData = (monthsale, dataArr) => {
    if (monthsale.length !== 0) {
      for (var i = 0; i < monthsale.length; i++) {
        var date = monthsale[i].values;
        dataArr.push(date);
      }
    }
  };
  render() {
    const { monthsale } = this.state;
    this.pushLabel(monthsale, this.state.dataLine.labels);
    this.pushData(monthsale, this.state.dataLine.datasets[0].data);
    return (
      <MDBContainer>
        <Line
          height={210}
          data={this.state.dataLine}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default MonthChart;
