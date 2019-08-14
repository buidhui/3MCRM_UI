import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
  }));
export default function DisabledTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Lịch sử đơn hàng" />
        </Tabs>
      </AppBar>
      {/* {value === 0 && <TabContainer>
          <TablCusDetail customer={props.customer}/></TabContainer>} */}
    </div>
  );
}

