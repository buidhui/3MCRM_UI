import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import url from "../url";
import axios from "axios";

class YearChart extends React.Component {
  state = {
    yearsale: [],
    dataBar: {
      labels: [],
      datasets: [
        {
          label: "Doanh thu tháng trong năm",
          data: [],
          backgroundColor: [
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)",
            "rgb(26, 157, 240)"
          ]
        }
      ]
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/yearsale`
    })
      .then(respone => {
        this.setState({
          yearsale: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  pushLabel = (yearsale, labelArr) => {
    if (yearsale.length !== 0) {
      for (var i = 0; i < yearsale.length; i++) {
        var date = yearsale[i].month;
        var date1 = date.slice(5) + "-" + date.slice(0, 4);

        labelArr.push(date1);
      }
    }
  };
  pushData = (yearsale, dataArr) => {
    if (yearsale.length !== 0) {
      for (var i = 0; i < yearsale.length; i++) {
        var date = yearsale[i].values;
        dataArr.push(date);
      }
    }
  };
  render() {
    const { yearsale } = this.state;
    this.pushLabel(yearsale, this.state.dataBar.labels);
    this.pushData(yearsale, this.state.dataBar.datasets[0].data);
    return (
      <MDBContainer>
        <Bar
          height={255}
          data={this.state.dataBar}
          //   options={this.state.barChartOptions}
        />
      </MDBContainer>
    );
  }
}

export default YearChart;
