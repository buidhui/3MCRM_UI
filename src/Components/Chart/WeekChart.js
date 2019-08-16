import React from "react";
import { MDBContainer } from "mdbreact";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import url from "../url";
import axios from "axios";

class WeekChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/conversion`
    })
      .then(respone => {
        this.setState({
          data: respone.data
        });
        // console.log(respone.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    // console.log("datsadasdasda");

    // console.log(data);
    return (
      <MDBContainer>
        <BarChart
          className="chart"
          width={750}
          height={550}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            name="KH Đầu Mối"
            dataKey="totalLead"
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            name="KH Tiềm Năng"
            dataKey="totalOpportunity"
            stackId="a"
            fill="#82ca9d"
          />
          <Bar
            name="KH Chính Thức"
            dataKey="newCustomer"
            stackId="a"
            fill="#ff4f68"
          />
        </BarChart>
      </MDBContainer>
    );
  }
}

export default WeekChart;
