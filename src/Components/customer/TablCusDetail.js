import React,{Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import url from '../url';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
      url: `${url}/customers/orders-his/${this.props.customer}`
    }).then(respone => {
      this.setState({
        history: respone.data
      })
    }).catch(error => {
      console.log(error);
    });
  }
  
  render(){
    
    var moment = require('moment');
    const {history} =this.state;
    function formatMoney(
      amount,
      decimalCount = 2,
      decimal = "",
      thousands = ","
    ) {
      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(
          (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
        ).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        return (
          negativeSign +
          (j ? i.substr(0, j) + thousands : "") +
          i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
          (decimalCount
            ? decimal +
              Math.abs(amount - i)
                .toFixed(decimalCount)
                .slice(4)
            : "")
        );
      } catch (e) {
        console.log(e);
      }
    }
    return (
      <Paper style={{width: '100%',
              marginTop: '3px',
      overflowX: 'auto',
      height: '210px',
      overflowY: 'scroll'}}>
        <Table style={{minWidth: "650"}}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã đơn</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Giá trị (VNĐ)</TableCell>
              <TableCell align="center">Ngày ghi nhận</TableCell>
              <TableCell align="center">Cập nhật cuôi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history !== undefined && history.map(order => (
              <TableRow key={order.id}>
                <TableCell align="center" component="th" scope="row">
                <Link className="list-item" to={'/orders/' + order.id}>{order.id}</Link>
                </TableCell>
                <TableCell align="center"><Link className="list-item"  to={'/orders/' + order.id}>{order.state === 1 ? "Hoàn thành" : "Đang thực hiện"}</Link></TableCell>
                <TableCell align="center"><Link className="list-item" to={'/orders/' + order.id}>{formatMoney(order.totalMoney)}</Link></TableCell>
                <TableCell align="center"><Link className="list-item" to={'/orders/' + order.id}>{moment(order.dateOrder).format('DD/MM/YYYY')}</Link></TableCell>
                <TableCell align="center"><Link className="list-item" to={'/orders/' + order.id}>{(order.updateDate) ? moment(order.updateDate).format('DD/MM/YYYY') : moment(order.dateOrder).format('DD/MM/YYYY') }</Link></TableCell>
              </TableRow>
            ))} 
            
            {/* <TableRow >
            
                <TableCell align="center" component="th" scope="row">
                <Link  to={'/orders/'}>aaa</Link> 
                </TableCell>
                <TableCell align="center">aaaaa</TableCell>
                <TableCell align="center">aaa</TableCell>
                <TableCell align="center">aaa</TableCell>
                <TableCell align="center">adsasda</TableCell>
              </TableRow> */}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}