import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));


export default function SimpleBreadcrumbs(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link className="list-item" to="/" >
            Tổng quan
          </Link>
          <Link className="list-item" to="/customers" >
            Danh sách đơn hàng
          </Link>
          <Typography color="textPrimary">Mã đơn {props.customer && props.customer}</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}