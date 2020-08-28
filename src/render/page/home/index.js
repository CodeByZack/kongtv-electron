import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { MyAppBar, MovieCard } from "../../components";
import {
  Tab,
  Tabs,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { Favorite, Restore, LocationOn } from "@material-ui/icons";
import Store from "@render/store";
import IndexAdvice from "./IndexAdvice";
import Category from "./Category";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainContainer: {
    marginTop: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { home, dy, dsj, dm, zy } = Store.useContainer();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <MyAppBar />
      <Toolbar />
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="首页" />
        <Tab label="电影" />
        <Tab label="电视剧" />
        <Tab label="综艺" />
        <Tab label="动漫" />
      </Tabs>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <IndexAdvice />
        <Category data={dy} />
        <Category data={dsj} />
        <Category data={dm} />
        <Category data={zy} />
      </SwipeableViews>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="首页" icon={<Restore/>} />
        <BottomNavigationAction label="电影" icon={<Favorite />} />
        <BottomNavigationAction label="电视剧" icon={<LocationOn />} />
        <BottomNavigationAction label="综艺" icon={<LocationOn />} />
        <BottomNavigationAction label="动漫" icon={<LocationOn />} />
      </BottomNavigation>
    </div>
  );
};
export default Home;
