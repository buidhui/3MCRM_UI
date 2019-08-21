import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import url from "../url";
import axios from "axios";

class WeekChart extends React.Component {
  state = {
    conversion: [],
    dataLine: {
      labels: [],
      datasets: [
        {
          label: "Đầu mối thành tiềm năng",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgb(255, 255, 255, 0.1)",
          borderColor: "rgb(236, 112, 99)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(236, 112, 99)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        },
        {
          label: "Tiềm năng thành khách hàng",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgb(255, 255, 255, 0.1)",
          borderColor: "rgb(247, 220, 111)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(247, 220, 111)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        },
        {
          label: "Đầu mối thành khách hàng",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgb(88, 214, 141)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(88, 214, 141)",
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
      url: `${url}/conversion`
    })
      .then(respone => {
        this.setState({
          conversion: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  pushLabel = (conversion, labelArr) => {
    if (conversion.length !== 0) {
      for (var i = 0; i < conversion.length; i++) {
        var date = conversion[i].date;
        var date1 = date.slice(5, 7) + "/" + date.slice(0, 4);
        labelArr.push(date1);

        // console.log(date1);
      }
    }
  };
  pushData0 = (conversion, dataArr) => {
    if (conversion.length !== 0) {
      for (var i = 0; i < conversion.length; i++) {
        var date0 =
          (conversion[i].leadToOpportunity / conversion[i].totalLead) * 100;
        dataArr.push(Math.round(date0));
      }
    }
  };
  pushData1 = (conversion, data1) => {
    if (conversion.length !== 0) {
      for (var i = 0; i < conversion.length; i++) {
        var date1 =
          (conversion[i].opportunityToCustomer /
            conversion[i].totalOpportunity) *
          100;

        data1.push(Math.round(date1));
      }
    }
  };
  pushData2 = (conversion, data2) => {
    if (conversion.length !== 0) {
      for (var i = 0; i < conversion.length; i++) {
        var date2 = (conversion[i].newCustomer / conversion[i].totalLead) * 100;

        data2.push(Math.round(date2));
      }
    }
  };
  render() {
    const { conversion } = this.state;
    this.pushLabel(conversion, this.state.dataLine.labels);
    this.pushData0(conversion, this.state.dataLine.datasets[0].data);
    this.pushData1(conversion, this.state.dataLine.datasets[1].data);
    this.pushData2(conversion, this.state.dataLine.datasets[2].data);

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
