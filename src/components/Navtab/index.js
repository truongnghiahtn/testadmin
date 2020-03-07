import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./style.scss";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: 20
  }
}));

export default function Navtab() {
  const data = [
    { id: "tracau", name: "tra câu", content: "" },
    { id: "tratu", name: "tra từ", content: "" },
    { id: "phude", name: "phu đề phim", content: "" },
    { id: "video", name: "video", content: "" },
    { id: "hinhanh", name: "hình ảnh", content: "" },
    { id: "amnhac", name: "âm nhạc", content: "" },
    { id: "hoathinh", name: "hoạt hình", content: "" },
    { id: "tamsu", name: "tâm sự", content: "" }
  ];

  const classes = useStyles();
  const [value, setValue] = React.useState(data[0].id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = () => {
    return data.map((item, index) => {
      return (
        <Tab
          value={item.id}
          label={item.id}
          key={index}
          {...a11yProps(`${item.id}`)}
        />
      );
    });
  };

  const renderTabPanel = () => {
    return data.map((item, index) => {
      return (
        <TabPanel value={value} index={item.id} key={index}>
          <h3>{item.name}</h3>
        </TabPanel>
      );
    });
  };

  return (
    <div className={classes.root + ` container`}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {renderTab()}
        </Tabs>
      </AppBar>
      {renderTabPanel()}
    </div>
  );
}
