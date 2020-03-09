import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TraCau from "../TabContent/TraCau";
import PhuDePhim from "../TabContent/PhuDePhim";
import Video from "../TabContent/Video";
import AnhViet from "../TabContent/AnhViet";
import NguPhap from "../TabContent/NguPhap";
import ChuyenNganh from "../TabContent/ChuyenNganh";
import VietViet from "../TabContent/VietViet";
import VietAnh from "../TabContent/VietAnh";
import AnhAnh from "../TabContent/AnhAnh";
import HinhAnh from "../TabContent/HinhAnh";
import { connect } from "react-redux";
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
    marginTop: 20,
    textTransform: "uppercase"
  },
  upperFirstLetter: {
    textTransform: "none",
    "&::first-letter": {
      textTransform: "uppercase"
    }
  }
}));

function Navtab(props) {
  const classes = useStyles();
  const [data, setData] = React.useState([
    {
      id: "tracau",
      name: "Tra câu",
      Component: TraCau,
      status: true,
      content: ""
    },
    {
      id: "dict_ev",
      name: "Anh - Việt",
      Component: AnhViet,
      status: false,
      content: ""
    },
    {
      id: "dict_np",
      name: "Ngữ pháp",
      Component: NguPhap,
      status: false,
      content: ""
    },
    {
      id: "dict_di",
      name: "Chuyên ngành",
      Component: ChuyenNganh,
      status: false,
      content: ""
    },
    {
      id: "dict_ve",
      name: "Việt - Anh",
      Component: VietAnh,
      status: false,
      content: ""
    },
    {
      id: "dict_vv",
      name: "Việt - Việt",
      Component: VietViet,
      status: false,
      content: ""
    },
    {
      id: "dict_aa",
      name: "Anh - Anh",
      Component: AnhAnh,
      status: false,
      content: ""
    },
    {
      id: "phude",
      name: "Phụ đề phim",
      Component: PhuDePhim,
      status: true,
      content: ""
    },
    {
      id: "video",
      name: "Video",
      Component: Video,
      status: true,
      content: ""
    },
    {
      id: "hinhanh",
      name: "Hình ảnh",
      Component: HinhAnh,
      status: true,
      content: ""
    }
  ]);
  const [value, setValue] = React.useState("tracau");

  React.useEffect(() => {
    setValue("tracau");

    let dataNew = data.map(item => {
      if (
        item.id !== "tracau" &&
        item.id !== "phude" &&
        item.id !== "video" &&
        item.id !== "hinhanh"
      ) {
        let index = props.traTu.findIndex(it =>
          it.includes(`data-tab-name="${item.name}"`)
        );
        let isFind = index !== -1 ? true : false;
        item.status = isFind;
        if (isFind) {
          item.content = props.traTu[index];
        }
      }
      return item;
    });
    setData(dataNew);
  }, [props]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = () => {
    return data.map((item, index) => {
      return item.status ? (
        <Tab
          value={item.id}
          label={item.name}
          key={index}
          {...a11yProps(`${item.id}`)}
        />
      ) : (
        ""
      );
    });
  };

  const renderTabPanel = () => {
    return data.map((item, index) => {
      return item.status ? (
        <TabPanel value={value} index={item.id} key={index}>
          {item.Component ? <item.Component content={item.content} /> : ""}
        </TabPanel>
      ) : (
        ""
      );
    });
  };

  return (
    <div className={classes.root + ` container navtab`}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          {props.traCau.length ? renderTab() : ""}
        </Tabs>
      </AppBar>
      {props.traCau.length ? renderTabPanel() : ""}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    traCau: state.deMoReducer.traCau,
    traTu: state.deMoReducer.traTu
  };
};
export default connect(mapStateToProps, null)(Navtab);
