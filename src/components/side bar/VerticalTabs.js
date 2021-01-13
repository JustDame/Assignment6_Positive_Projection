import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel'
import a11yProps from './allyProps'
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 200,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="What Makes Us Different" {...a11yProps(0)} />
        <Tab label="Features" {...a11yProps(1)} />
        <Tab label="About US" {...a11yProps(2)} />
        <Tab label="Contact Form" {...a11yProps(3)} />
  
        
      </Tabs>
      <TabPanel value={value} index={0}>
      What Makes Us Different
      </TabPanel>
      <TabPanel value={value} index={1}>
       Features
      </TabPanel>
      <TabPanel value={value} index={2}>
        About Us 
      </TabPanel>
      <TabPanel value={value} index={3}>
        Contact Form
      </TabPanel>
      
    </div>
  );
}