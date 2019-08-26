import React,{Component} from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import url from '../url';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";

export default class SimpleTable extends Component{
  constructor(props){
    super(props);
    this.state={
      id: '',
      history: []
    }
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: `${url}/mail/list/${this.props.customer}`
    }).then(respone => {
      this.setState({
        history: respone.data
      })
    }).catch(error => {
      console.log(error);
    });
  }
  
  render(){
    const {history} =this.state;
    return (
      <Paper style={{width: '100%',
              marginTop: '3px',
      overflowX: 'auto',
      height: '210px',
      overflowY: 'scroll'}}>
        
          {history !== undefined && history.map((order,index) => (
              <Card
              key={index}
            //   bg="light"
              style={{ marginBottom: "3px" }}
            >
              <Card.Header><strong>{order.form && order.form.subject}</strong>
              <strong className="float-right">{order.timeSent}</strong>
              </Card.Header>
              
              <Card.Body>
              <Card.Title>Người gửi: {order.fromMail}</Card.Title>
                <Card.Text>
                  {order.form && order.form.content}
                </Card.Text>
                {/* <Card.Text>
                  Phân trăm chuyển đổi:{" "}
                  <strong className="float-right">
                    {this.calculate(
                      customer.convert,
                      customer.total
                    ).toFixed(2)}
                    %
                  </strong>
                </Card.Text> */}
                {/* <Card.Text>
                  Ngày thêm:{" "}
                  <strong className="float-right">{customer.date}</strong>
                </Card.Text> */}
              </Card.Body>
            </Card>
                ))} 
          
      </Paper>
    );
  }
}