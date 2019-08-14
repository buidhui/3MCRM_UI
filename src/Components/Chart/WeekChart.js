import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class WeekChart extends React.Component {
  state = {
    dataPie: {
      labels: ["KH Đầu Mối", "KH Tiềm Năng", "KH Chính Thức"],
      datasets: [
        {
          data: [300, 200, 100],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <Pie
          height={200}
          data={this.state.dataPie}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default WeekChart;
