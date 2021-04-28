import clsx from "clsx";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Chart from "./Chart";
import UserCount from "./UserCount";
import RecentPosts from "./RecentPosts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  fixedHeight: {
    height: 300,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={clsx(classes.paper, classes.fixedHeight)}>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={clsx(classes.paper, classes.fixedHeight)}>
            <UserCount />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentPosts />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
