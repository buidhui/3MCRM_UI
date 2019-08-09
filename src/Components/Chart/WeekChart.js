import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import url from "../url";
import axios from "axios";
// const labelArr = [];
// const dataArr = [];
class WeekChart extends React.Component {
  state = {
    weeksale: [],
    dataLine: {
      labels: [],
      datasets: [
        {
          label: "Doanh thu ngày trong tuần",
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
    if (weeksale.length !== 0) {
      for (var i = 0; i < weeksale.length; i++) {
        var date = weeksale[i].date;
        var date1 =
          date.slice(8) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
        labelArr.push(date1);
      }
    }
  };
  pushData = (weeksale, dataArr) => {
    if (weeksale.length !== 0) {
      for (var i = 0; i < weeksale.length; i++) {
        var date = weeksale[i].values;
        dataArr.push(date);
      }
    }
  };
  render() {
    const { weeksale } = this.state;
    this.pushLabel(weeksale, this.state.dataLine.labels);
    this.pushData(weeksale, this.state.dataLine.datasets[0].data);
    // console.log(this.state);
    return (
      <MDBContainer>
        <Line
          height={255}
          data={this.state.dataLine}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default WeekChart;
