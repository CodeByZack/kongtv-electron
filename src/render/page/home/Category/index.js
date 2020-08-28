import React from "react";
import { Container, Grid } from "@material-ui/core";
import Store from "@render/store";
import { makeStyles } from "@material-ui/core/styles";
import {MovieCard} from '@render/components';

// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

const gridItemConfig = {
  xs: 12,
  sm: 6,
  md: 3,
  lg: 2,
  xl: 2,
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    mainContainer:{
      marginTop: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
    },
  }));

const Category = (props) => {
  const { data } = props;
  const { list } = data;
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer} maxWidth="100%">
      <Grid container spacing={2}>
        {list.map((movie) => {
          const props = {
            image: movie.vod_pic,
            title: movie.vod_name,
            desc: movie.vod_blurb,
          };
          return (
            <Grid key={movie.vod_id} item {...gridItemConfig}>
              <MovieCard {...props} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Category;
